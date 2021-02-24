import { SyntheticEvent, useState } from "react";

const useFormFields = <T>(initialState: T): [T, (event: SyntheticEvent<HTMLElement>, data: any) => void] => {
    const [fields, setValues] = useState<T>(initialState);

    return [
        fields,
        (event: SyntheticEvent<HTMLElement>, data: any) => {

            console.log(this)
            if (data.value) {
                setValues({
                    ...fields,
                    [data.name]: data.value
                });
            }
        }
    ];
}

export default useFormFields;
