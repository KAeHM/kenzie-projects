import { createContext, ReactNode, useState } from "react";
import {IContextOutput, IDataInput } from "../interfaces";
import axios from 'axios'
import {toast} from 'react-hot-toast'

export const OutputFields = createContext<IContextOutput>({} as IContextOutput)

interface MainProps {
    children?: ReactNode
}

export const OutputFieldsProvider = ({children}: MainProps) => {
    const [data, setData] = useState({})
    
    function getData(data: IDataInput): void {
        const promise = axios.post('https://frontend-challenge-7bu3nxh76a-uc.a.run.app', data).then((response) => setData(response.data))
        toast.promise(promise, {
            loading: "Calculando",
            success: "Calculo realizado!",
            error: "Algo deu errado!"
        })
    }

    return (
        <OutputFields.Provider value={{getData, data}}>
            {children}
        </OutputFields.Provider>
    )
}