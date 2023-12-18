import './App.css';
import AppRouter from './containers/AppRouter';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <AppRouter/>
      <Toaster />
    </div>
  );
}

export default App;
