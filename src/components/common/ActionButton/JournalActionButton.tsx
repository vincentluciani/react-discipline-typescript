import { TfiWrite } from "react-icons/tfi";
import ActionButton from "./ActionButton";
import React from 'react'

const JournalActionButton = () => {
    const testFunction = () =>{
        console.log('test')
      }

    return(
        <ActionButton title='Edit Journal' icon={React.createElement(TfiWrite)} buttonAction={testFunction} />
    )


}

export default JournalActionButton