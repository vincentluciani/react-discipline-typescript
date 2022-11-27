import './App.css';
import FilterBox from './components/common/FilterBox/FilterBox'
import ModalWindow from './components/common/ModalWindow/ModalWindow';
import HabitBoxesGrid from './components/Habits/HabitBoxesGrid';
import ProgressBoxesGrid from './components/Progress/ProgressBoxesGrid';

function App() {

  const testFunction = () =>{
    console.log('test ModalWindow')
  }

  const habitsList = [{id:1,habitName:"test 1"},{id:2,habitName:"test 2"}]
  const progressList = [{id:1,progressName:"test 1"},{id:2,progressName:"test 2"}]

  return (
    <div className="App">
     <FilterBox />
     <HabitBoxesGrid habitsList={habitsList}/>
     <ProgressBoxesGrid progressList={progressList}/>
     <ModalWindow onConfirm={testFunction} className='test' modalTitle='test model'><div>hello world</div></ModalWindow>
    </div>
  );
}

export default App;
