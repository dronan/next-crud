import Client from "@/core/Client";
import { IconDelete, IconEdit } from "./Icons";
import React from "react";

interface TableProps {
    clients: Client[];
    selectedClient?: (client: Client) => void;
    deletedClient?: (client: Client) => void;
}

export default function Table(props: TableProps) {

    const showActions = props.selectedClient || props.deletedClient;

    function headers() {
        return (
            <tr>
                <th className="text-left p-4">#</th>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Age</th>
                { showActions ? <th className="text-center p-4">Actions</th> : false }
            </tr>)
    }

    function renderData() {
        return props.clients?.map((client, i) => {
            return ( 
                    <tr key={client.id} className={i%2 == 0 ? `bg-purple-200` : `bg-purple-100`}>
                        <td className="text-left p-4">{client.id}</td>
                        <td className="text-left p-4">{client.name}</td>
                        <td className="text-left p-4">{client.age}</td>
                        { showActions ? renderActions(client) : false }
                    </tr>
            )
        })
    }

    function renderActions(client: Client) {
        return (
            <td className="text-left p-4">
                <div className={`flex justify-center`}>
                    { props.selectedClient ? (
                        <button 
                            onClick={() => props.selectedClient?.(client)}
                            className={`flex justify-center items-center text-green-600 rounded-full hover:bg-purple-50 p-2 m-1`}>
                            {IconEdit}
                        </button>
                    ) : false }
                    { props.deletedClient ? (
                    <button 
                        onClick={() => props.deletedClient?.(client)}
                        className={`flex justify-center items-center text-red-600 rounded-full hover:bg-purple-50 p-2 m-1`}>
                        {IconDelete}
                    </button>
                    ) : false }
                </div>
            </td>
        )
    }

    return (
        <table className={`w-full rounded-xl overflow-hidden`}>
            <thead className={`text-gray-100 bg-gradient-to-r from-purple-500 to-purple-800`}>
                {headers()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}