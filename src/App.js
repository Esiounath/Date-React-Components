import './App.css';
import {Clock} from './Components/Horloge/Clock';
import {Form} from './Components/Formulaire/Forms';

function App() {
  return (
<body>
    <div className="App">
      <header className="App-header">
      <Clock/>
      <Form />
      </header>
    </div>
</body>
  );
}

export default App;
