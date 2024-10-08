import { createContext, ReactNode, useState } from "react";
import { IContextInput } from "../interfaces";


export const InputFields = createContext<IContextInput>({} as IContextInput)

interface MainProps {
    children?: ReactNode
}

export const InputFieldsProvider = ({children}: MainProps) => {
    const [amount, setAmount] = useState('') 
    const [installments, setInstallments] = useState('')
    const [mdr, setMdr] = useState('')
    
    return (
        <InputFields.Provider value={{amount, installments, mdr, setAmount, setInstallments, setMdr}}>
            {children}
        </InputFields.Provider>
    )
}