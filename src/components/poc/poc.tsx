
import {useState} from 'react'

interface pocProps {
    title: String; 
    numericValue: Number
}

const Poc = ({title, numericValue}:pocProps) => {

    const [numericText,setNumericTest] = useState(numericValue)

    const onValueChange = (inputEvent: any) =>{
        if (inputEvent.target && inputEvent.target.value){
            setNumericTest(inputEvent.target.value)
        }
    }
    return (
        <div>{title} - {numericText.toString()}

            <input type="number" onChange={onValueChange} value={numericText.toString()}></input>
        </div>
    )

} 

export default Poc
