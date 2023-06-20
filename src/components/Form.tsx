import { useState } from "react";
import Input from "./Input";
import Client from "../core/Client";
import Button from "./Button";

interface FormProps {
    client: Client;
}

export default function Form(props: FormProps) {
    const id = props.client?.id ?? null

    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)
    
    return (
        <div>
            {id ? (
                <Input readonly text="Id" value={id} className="mb-4" />
            ) : false}
            <Input type="text" text="Name" value={name} changedValue={setName} className="mb-4" />
            <Input type="number" text="Age" value={age} changedValue={setAge} />

            <div className="flex justify-end mt-7">
                    <Button color="blue" className="mr-2">
                        {id ? 'Change' : 'Save'}
                    </Button>
                    <Button color="gray" className="mr-2">
                        Cancel
                    </Button>
            </div>
        </div>
    )
}