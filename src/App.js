
import './App.css';

//components
import Header from './components/header';
import PhaseList from './components/phaseList';
import CreateProgress from './components/createProgress';

//context
import TaskContextProvider from './context/taskContext';

function App() {
  return (
    <div className="App">
      <TaskContextProvider>
        <Header/>
        <PhaseList/>
        <CreateProgress/>
      </TaskContextProvider>
    </div>
  );
}

export default App;
