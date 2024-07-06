
export interface ValueLabel {
    value: string;
    label: string;
}

export interface DropDownSelectInputProps {
    id: string;
    label: string;
    values: ValueLabel[];
}

export const DropdownSelectInput = ({ id, label, values }: DropDownSelectInputProps) => <>
    <label htmlFor={id}>{label}</label>
    <select id={id}>
        {values.map(({ value, label}) => <option key={value} value={value}>{label}</option>)}
    </select>
</>