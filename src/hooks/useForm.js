import { useState } from "react";

export const useForm = (initialValue = {}) => {

    const [formState, setFormState] = useState(initialValue);

    const onInputChange = ({target}) => {
        const { name, value } =  target;
        setFormState({
            ...formState,
            [name]: value
        });
    }    

    const onResetForm = () => {
        setFormState(initialValue);
    } 

    // otra opcion es usar react hook form que es el mismo pero mucho mejor elaborado
  return ({formState, onResetForm, onInputChange, ...formState});
}
