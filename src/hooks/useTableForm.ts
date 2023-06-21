import { useState } from "react"

export default function useTableForm() {

    const [visible, setVisible] = useState<'table' | 'form'>('table')

    const  showTable = () => setVisible('table')
    const  showForm = () => setVisible('form')

    return {
        showTable,
        showForm,
        tableVisible: visible === 'table',
        formVisible: visible === 'form',
    }
}