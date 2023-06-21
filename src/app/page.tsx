'use client';
import React, { useEffect, useState } from "react";
import Client from "../core/Client";
import Table from "../components/Table";
import Layout from "../components/Layout";
import Form from "../components/Form";
import Button from "../components/Button";
import ClientCollection from "../backend/db/ClientCollection";
import RepositoryClient from "../core/RepositoryClient";

export default function Home() {

  const repo: RepositoryClient = new ClientCollection()

  const [client, setClient] = useState<Client>(Client.empty())
  const [clients, setClients] = useState<Client[]>([])
  const [visible, setVisible] = useState<'table' | 'form'>('table')


  useEffect(() => { getAllClients() }, [])

  function getAllClients() {
    repo.getAll().then( clients => {
      setClients(clients);
      setVisible('table')
      }) 
  }

  function selectedClient(client: Client) {
    setClient(client)
    setVisible('form')
  }


  async function deletedClient(client: Client) {
    await repo.delete(client);
    getAllClients();
  }

   async function saveClient(client: Client) {
    await repo.save(client);
    getAllClients();
  }

  function newClient() { 
    setClient(Client.empty())
    setVisible('form')
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white`}>
      <Layout title="Register form">
        {visible === 'table' ? (
        <>
            <div className={`flex justify-end mt-4 mb-4`}>
                <Button color="green" className="mr-6" onClick={newClient}>New client</Button>
            </div>
          <Table clients={clients} selectedClient={selectedClient} deletedClient={deletedClient}></Table>
        </>
        ) : (
          <Form client={client} clientChanged={saveClient} cancel={() => setVisible('table')} />
        )}
      </Layout>
    </div>
  )
}
