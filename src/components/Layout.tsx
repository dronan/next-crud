import React from "react";
import Title from "./Title";
import Button from "./Button";

interface LayoutProps {
    title: string;
    children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={`flex flex-col w-2/3 bg-white text-gray-800 rounded-md`}>
            <Title>{props.title}</Title>
            <div className={`flex justify-end mt-4 mb-4`}>
                <Button color="green" className="mr-6">New user</Button>
            </div>
            <div className={`p-6`}>
                {props.children}
            </div>
        </div>
            
    )
}