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

    #conversor = {
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

    async save(client: Client): Promise<Client> {
        return null
    }

    async delete(client: Client): Promise<void> {
        return null
    }

    async getAll(): Promise<Client[]> {
        return null
    }

    #collection() {
        return collection(dataBase, 'clientes').withConverter(this.#conversor)
    }
}
