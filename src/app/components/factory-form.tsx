import { DropdownSelectInput, ValueLabel } from './dropdown-select-input';
import { HtmlFormInput } from './html-form-input';

enum DurationUnits {
    Second = 1,
    Minute = 60,
}

export interface FactoryFormProps {
    actionUrl: string;
    items: string[];
    recipes: string[];
}

const nameToLabelValue = (name: string): ValueLabel  => ({ label: name, value: name})

export const FactoryForm = ({ actionUrl, items, recipes } : FactoryFormProps) => {
    return <form method="POST" action={actionUrl} >
        <DropdownSelectInput id="calcDuration" label="Calculation duration" values={Object.entries(DurationUnits).map(([label, value]) => ({ label, value: `${value}`}))} />
        <DropdownSelectInput id="targetItem" label="Target item" values={items.map(nameToLabelValue)} />
        <DropdownSelectInput id="targetRecipe" label="Target recipe" values={recipes.map(nameToLabelValue)} />
        <HtmlFormInput id="targetBuildingCount" type="number" label="Target building count" defaultValue="1" />
        <HtmlFormInput id="targetItemCount" type="number" label="Target item count" defaultValue="3" />
    </form>;
}
