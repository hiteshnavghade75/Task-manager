import './App.css';
import AppRouter from './containers/AppRouter';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <AppRouter/>
      <Toaster />
    </div>
  );
}

export default App;
