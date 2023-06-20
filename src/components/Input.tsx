interface InputProps {
    type?: "text" | "number";
    text: string;
    value?: any;
    readonly?: boolean;
    changedValue?: (value: any) => void;
    className?: string;

}

export default function Input(props: InputProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2">
                {props.text}
            </label>
            <input 
                type={props.type ?? `text`} 
                value={props.value ?? null}
                onChange={e => props.changedValue?.(e.target.value)}
                readOnly={props.readonly ?? false}
                className={`
                    border border-purple-500 rounded-lg
                    focus:outline-none bg-gray-50 px-4 py-2
                    ${props.readonly ? '' : `focus:bg-white`}
                `} />
        </div>
    )
}