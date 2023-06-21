import Client from "../../core/Client";
import RepositoryClient from "../../core/RepositoryClient";
import firestore, {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    setDoc,
  } from 'firebase/firestore'
import { dataBase } from "../config";

export default class ClientCollection implements RepositoryClient {

    private conversor = {
        toFirestore: (client: Client) => {
          return {
            name: client.name,
            age: client.age,
          }
        },
        fromFirestore: (
          snapshot: firestore.QueryDocumentSnapshot,
          options: firestore.SnapshotOptions,
          ) => {
            const data = snapshot.data(options)
            return new Client(data.name, data.age, snapshot.id)
          },
        }

    private collection = collection(dataBase, 'clients').withConverter(this.conversor)

    async save(client: Client): Promise<Client> {
      if (client?.id) {
        await setDoc(
          doc(dataBase, 'clients', client.id).withConverter(this.conversor),
          client,
        )
        return client
      } else {
        const docRef = await addDoc(
          this.collection,
          client,
        )
        const doc = await getDoc(docRef)
        return doc.data()
      }
    }

    async delete(client: Client): Promise<void> {
        return deleteDoc(doc(dataBase, 'clients', client.id))
    }

    async getAll(): Promise<Client[]> {
      const clientsCol = this.collection
      const clientsSnapshot = await getDocs(clientsCol)
      const clientsList = clientsSnapshot.docs.map((doc) => doc.data()) ?? []
      return clientsList
    }


}
