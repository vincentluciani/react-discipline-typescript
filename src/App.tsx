import './App.css';
import FilterBox from './components/common/FilterBox/FilterBox'
import ModalWindow from './components/common/ModalWindow/ModalWindow';
import HabitBoxesGrid from './components/Habits/HabitBoxesGrid';
import ProgressBoxesGrid from './components/Progress/ProgressBoxesGrid';
import { purple } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {

  const testFunction = () =>{
    console.log('test ModalWindow')
  }

  const habitsList = [{id:1,habitName:"test 1"},{id:2,habitName:"test 2"}]
  const progressList = [{id:1,progressName:"test 1"},{id:2,progressName:"test 2"}]

  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: purple[50],
      },
    },
  });

  return (
    <div className="App">
    <ThemeProvider theme={theme}>
      <FilterBox />
      <HabitBoxesGrid habitsList={habitsList}/>
      <ProgressBoxesGrid progressList={progressList}/>
      <ModalWindow onConfirm={testFunction} className='test' modalTitle='test model'><div>hello world</div></ModalWindow>
    </ThemeProvider>
    </div>
  );
}

export default App;
