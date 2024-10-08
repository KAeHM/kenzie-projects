import styled from 'styled-components'

export const StyledInput = styled.input`

    height: 30px;
    width: 220px;
    border: 1px solid gray;
    border-radius: 5px;
    padding-left: 10px;

    &:focus {
        outline: 1px solid #4169e1;
    }

`

export const StyledInputFooter = styled.p`
    
    margin: 0;

    color: #808080;
    font-size: 0.8rem;
`

export const StyledInputTitle = styled.p`
    margin: 0;

    color: #313131;
    font-size: 0.9rem;
`

export const StyledInputDiv = styled.div`
    
    display: flex;
    flex-direction: column;
    gap: 5px;
`