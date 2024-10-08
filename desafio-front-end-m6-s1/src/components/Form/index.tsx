import { StyledForm, StyledFormTitle, StyledFormButton } from "./style"
import Input from "../Input"
import { useContext } from "react"
import { InputFields } from "../../contexts/InputFormValue"
import { OutputFields } from "../../contexts/OutputValues"
import {removeMask} from "../../sources/functions"

function Form(){
    const {amount, installments, mdr, setAmount, setInstallments, setMdr} = useContext(InputFields)
    const {getData} = useContext(OutputFields)

    return (
        <StyledForm onSubmit={(e) => {
            e.preventDefault()
            getData({amount: removeMask(amount), installments: removeMask(installments), mdr: removeMask(mdr)})
        }}>
            <StyledFormTitle>Simule Sua Antecipação</StyledFormTitle>
            <Input inputGetter={amount} inputSetter={setAmount} required={true} shouldMask={true} title="Infome o valor da venda *"/>
            <Input inputGetter={installments} inputSetter={setInstallments} required={true} title="Em quantas parcelas *" footer="Máximo de 12 parcelas"/>
            <Input inputGetter={mdr} inputSetter={setMdr} title="Infome o percentual de MDR *"/>
            <StyledFormButton type="submit">Calcular</StyledFormButton>
        </StyledForm>
    )
} 

export default Form