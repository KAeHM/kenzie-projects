import { IComponentInput } from "../../interfaces"
import { StyledInput, StyledInputFooter, StyledInputTitle, StyledInputDiv } from "./style"
import {mask} from '../../sources/functions'

function Input({title, footer, required=false, inputSetter, inputGetter, shouldMask=false}: IComponentInput){

    return (
        <StyledInputDiv>
            <StyledInputTitle>{title}</StyledInputTitle>
            <StyledInput required={required} value={inputGetter} onChange={(e) => inputSetter(shouldMask ? mask(e.target.value) : e.target.value)}/>
            <StyledInputFooter>{footer}</StyledInputFooter>
        </StyledInputDiv>
    )
}


export default Input