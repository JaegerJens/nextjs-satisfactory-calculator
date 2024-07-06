import { HTMLInputTypeAttribute } from "react";

export interface HtmlFormInputProps {
    id: string;
    label: string;
    type: HTMLInputTypeAttribute;
    defaultValue?: string;
}

export const HtmlFormInput = ({ id, label, type, defaultValue }: HtmlFormInputProps) => <>
    <label htmlFor={id}>{label}</label>
    <input type={type} id={id} value={defaultValue} />
</>;
