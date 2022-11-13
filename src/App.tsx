import './App.css';
import FilterBox from './components/common/FilterBox/FilterBox'
import HabitBox from './components/Habits/HabitBox.js';
import JournalActionButton from './components/common/ActionButton/JournalActionButton'
import LoginActionButton from './components/common/ActionButton/LoginActionButton'
import LogoutActionButton from './components/common/ActionButton/LogoutActionButton'
import ModalWindow from './components/common/ModalWindow/ModalWindow';

function App() {

  const testFunction = () =>{
    console.log('test ModalWindow')
  }
  return (
    <div className="App">
     <FilterBox />
     <HabitBox boxTitle='test title'/>
     <JournalActionButton />
     <LoginActionButton />
     <LogoutActionButton />
     <ModalWindow onConfirm={testFunction} className='test' modalTitle='test model'><div>hello world</div></ModalWindow>
    </div>
  );
}

export default App;
