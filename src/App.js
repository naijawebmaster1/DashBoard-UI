import Sidebar from './Components/Sidebar/Sidebar';
import Main from './Components/Main/Main';

import './App.css';

function App() {


  return (
    <div className="App">
      <div className="flex">

        <Sidebar />
        <Main />

      </div>
    </div>
  );
}

export default App;
