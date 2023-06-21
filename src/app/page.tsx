'use client';
import React, { useEffect, useState } from "react";
import Client from "../core/Client";
import Table from "../components/Table";
import Layout from "../components/Layout";
import Form from "../components/Form";
import Button from "../components/Button";
import ClientCollection from "../backend/db/ClientCollection";
import RepositoryClient from "../core/RepositoryClient";
import useClients from "../hooks/useClients";

export default function Home() {

  const {
    client,
    clients,
    newClient,
    saveClient,
    deletedClient,
    selectedClient,
    showTable,
    tableVisible,
} = useClients();

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white`}>
      <Layout title="Register form">
        {tableVisible ? (
        <>
            <div className={`flex justify-end mt-4 mb-4`}>
                <Button color="green" className="mr-6" onClick={newClient}>New client</Button>
            </div>
          <Table clients={clients} selectedClient={selectedClient} deletedClient={deletedClient}></Table>
        </>
        ) : (
          <Form client={client} clientChanged={saveClient} cancel={showTable} />
        )}
      </Layout>
    </div>
  )
}
