import { Dispatch, SetStateAction } from "react";

export interface IComponentInput {
    title?: string;
    footer?: string;
    required?: boolean;
    inputSetter: Dispatch<SetStateAction<string>>;
    inputGetter: string;
    shouldMask?: boolean;
}

export interface IComponentOutput {
    value: string;
}

export interface IContextInput {
    amount: string;
    installments: string; 
    mdr: string;
    setAmount: Dispatch<SetStateAction<string>>;
    setInstallments: Dispatch<SetStateAction<string>>;
    setMdr: Dispatch<SetStateAction<string>>;
}

export interface IContextOutput {
    data: any;
    getData: any;
}

export interface IDataInput{
    amount: string;
    installments: string; 
    mdr: string;
}
