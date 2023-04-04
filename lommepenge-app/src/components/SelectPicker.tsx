import { Listbox } from '@headlessui/react'

interface SelectPickerModel {
    name: string;
    id?: string;
}
type DepartmentPickerProps = {
    selected: SelectPickerModel;
    pickList: Array<SelectPickerModel>;
    onChange: (value: SelectPickerModel) => void;
}
const SelectPicker = ({ selected, onChange, pickList }: DepartmentPickerProps) => {
    return (
        <Listbox value={selected} by="id" onChange={onChange}>
            <Listbox.Button>{selected.name}</Listbox.Button>
            <Listbox.Options>
                {pickList.map((element) => (
                    <Listbox.Option key={element.id} value={element}>
                        {element.name}
                    </Listbox.Option>
                ))}
            </Listbox.Options>
        </Listbox>
    )
}

export default SelectPicker;