
import { Paper } from '@mui/material';
import './App.css';
import { InputComponent } from './components/InputComponent';
import { MinMaxWeather } from './components/MinMaxWeather';

function App() {
  return (
    <Paper elevation={3} className="App">
      <InputComponent />
      <MinMaxWeather />
    </Paper>
  );
}

export default App;
