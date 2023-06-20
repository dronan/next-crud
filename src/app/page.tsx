'use client';
import React, { useState } from "react";
import Client from "../core/Client";
import Table from "../components/Table";
import Layout from "../components/Layout";
import Form from "../components/Form";
import Button from "../components/Button";

export default function Home() {
  const [client, setClient] = useState<Client>(Client.empty())
  const [visible, setVisible] = useState<'table' | 'form'>('table')

  const clients = [
    { name: 'João', age: 18, id: '1' },
    { name: 'Maria', age: 25, id: '2' },
    { name: 'José', age: 30, id: '3' },
    { name: 'Pedro', age: 40,  id: '4' },
  ].map(client => new Client(client.name, client.age, client.id));


  function selectedClient(client: Client) {
    setClient(client)
    setVisible('form')
  }


  function deletedClient(client: Client) {
    console.log(client.name)
  }

  function saveClient(client: Client) {
    console.log(client)
    setVisible('table')
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
