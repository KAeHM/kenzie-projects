import { useContext, useEffect, useState } from "react"
import { OutputFields } from "../../contexts/OutputValues"
import { mask } from "../../sources/functions"
import { StyledOutputDiv, StyledOutputTitle, StyledOutputValue, StyledDivider } from "./style"



function Outputs(){



    const {data} = useContext(OutputFields)
    
    const emptyData = {'amanha': mask('0'), 'quinzena': mask('0'), 'mes': mask('0'), 'trimestre': mask('0')}

    const [output, setOutput] = useState(emptyData) 
   
    function modifyData(){
        const requestedData = {'amanha': mask(data[1]), 'quinzena': mask(data[15]), 'mes': mask(data[30]), 'trimestre': mask(data[90])}
        return requestedData
    }

    useEffect(() => {
        data[1] && setOutput(modifyData)
    }, [data])

    return (
        <StyledOutputDiv>
            <div>
                <StyledOutputTitle>VOCÊ RECEBERÁ: </StyledOutputTitle>
                <StyledDivider/>
            </div>
            <StyledOutputValue>Amanha: <b>{output.amanha}</b></StyledOutputValue>
            <StyledOutputValue>Em 15 dias: <b>{output.mes}</b></StyledOutputValue>
            <StyledOutputValue>Em 30 dias: <b>{output.quinzena}</b></StyledOutputValue>
            <StyledOutputValue>Em 90 dias: <b>{output.trimestre}</b></StyledOutputValue>
        </StyledOutputDiv>
    )
}

//  

export default Outputs