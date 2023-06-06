import { useState } from "react"

  export const useForm = (estadoInicial) =>{
        const [form, setForm] = useState(estadoInicial)
        
        const onChangeInputs = (e) => {
        const {name,value} = e.target
        setForm({...form,[name]: value})
       }
       const cleanFields = () => {
        setForm(estadoInicial)
       }
    return {form, onChangeInputs,cleanFields}
  }