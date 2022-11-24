import styles from './HabitBoxesGrid.module.css'
import HabitBox from './HabitBox.js';
import React from 'react'
import JournalActionButton from '../common/ActionButton/JournalActionButton'
import LoginActionButton from '../common/ActionButton/LoginActionButton'
import LogoutActionButton from '../common/ActionButton/LogoutActionButton'


interface HabitBoxesProp {
    habitsList: Array<Habit>;
}

interface Habit {
    id: number;
    habitName: string;
}
const HabitBoxesGrid = ({habitsList}:HabitBoxesProp) => {

    //const myArray:HabitBoxesProp = {habitsList:[{id:1,habitName:"test"}]};
    
    return( <div className={styles['habit-boxes-grid']}>
    <> 
    { habitsList.map((item:Habit, index:number) => (<HabitBox boxTitle={item.habitName}></HabitBox>)) }
    <JournalActionButton />
    <LoginActionButton />
    <LogoutActionButton />
    </>  
    </div>);

}
// {testArray.map(o => (<div>/{o}</div>))} 
//  const testArray = ["test1","test2"];
export default HabitBoxesGrid