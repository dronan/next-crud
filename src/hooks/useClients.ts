import { useEffect, useState } from "react";
import ClientCollection from "../backend/db/ClientCollection"
import Client from "../core/Client"
import RepositoryClient from "../core/RepositoryClient"
import useTableForm from "./useTableForm";

export default function useClients() {
    
    const { tableVisible, showForm, showTable } = useTableForm();

    const repo: RepositoryClient = new ClientCollection()
    
    const [client, setClient] = useState<Client>(Client.empty())
    const [clients, setClients] = useState<Client[]>([])
    const [visible, setVisible] = useState<'table' | 'form'>('table')
    
    
    useEffect(() => { getAllClients() }, [])
    
    function getAllClients() {
        repo.getAll().then( clients => {
            setClients(clients);
            showTable();
        }) 
    }
    
    function selectedClient(client: Client) {
        setClient(client)
        showForm()
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
        showForm()
    }
    
    return {
        client,
        clients,
        newClient,
        saveClient,
        deletedClient,
        selectedClient,
        showTable,
        tableVisible,
    }
    
}