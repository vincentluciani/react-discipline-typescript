
import {useEffect, useState, useReducer} from 'react'

interface pocProps {
    title: String; 
    numericValue: Number
}

const Poc = ({title, numericValue}:pocProps) => {

    const [numericText,setNumericTest] = useState(numericValue)
    const [secondValue,setSecondValue] = useState(numericValue)
    const [increment,setIncrement] = useState(2)

    interface testAction{
        type: String,
        value: String
    }
    
    const testReducer = (state:Array<String>, action:testAction):Array<String> => {
        if (action.type == 'add') {
            return [...state,action.value]
        } else {
            return state
        }
    }

    const [testArray,testDispatch] = useReducer(testReducer,['1','2','3'])

    useEffect(() => {
   
            const timer = setTimeout(
                () => {
                   console.log(numericText);
                   testDispatch({'type':'add','value':numericText.toString()})
                },
                1000        );
            return () => {
                console.log('cleanup');
                
                
                clearTimeout(timer)
            };
    }, [numericText]);

    const onValueChange = (inputEvent: any) =>{
        if (inputEvent.target && inputEvent.target.value){
            setNumericTest(inputEvent.target.value)
            
        }
    }

    const onSecondValueChange = (inputEvent: any) =>{
        if (inputEvent.target && inputEvent.target.value){
            setSecondValue(inputEvent.target.value)
        }
    }

    const incrementValues = (increment: Number) => {
        setNumericTest(+numericText + +increment)
        setSecondValue(+numericText + +increment)
    }

    return (
        <div>{title} - {numericText.toString()}
            <div>First value: {numericText.toString()}</div>
            <div>Second value: {secondValue.toString()}</div>
            <input type="number" onChange={onValueChange} value={numericText.toString()}></input>
            <input type="number" onChange={onSecondValueChange} value={numericText.toString()}></input>
            <button onClick={()=>incrementValues(2)} >TEST</button>
            <button onClick={()=> testDispatch({'type':'add','value':numericText.toString()})} >TEST</button>
            <div>{testArray.map(item => <div>{item}</div>)}</div>
        </div>
    )

} 

export default Poc
