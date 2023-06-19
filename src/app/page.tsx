'use client';
import Layout from "@/components/Layout";
import Table from "@/components/Table";
import Client from "@/core/Client";
import React from "react";

export default function Home() {

  const clients = [
    { name: 'João', age: 18, id: 1 },
    { name: 'Maria', age: 25, id: 2 },
    { name: 'José', age: 30, id: 3 },
    { name: 'Pedro', age: 40,  id: 4 },
  ].map(client => new Client(client.name, client.age, client.id));


  function selectedClient(client: Client) {
    console.log(client.name)
  }


  function deletedClient(client: Client) {
    console.log(client.name)
  }


  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white`}>
      <Layout title="Register form">
        <Table clients={clients} selectedClient={selectedClient} deletedClient={deletedClient}></Table>
      </Layout>
    </div>
  )
}
