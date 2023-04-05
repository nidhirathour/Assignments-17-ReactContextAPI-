import logo from './logo.svg';
import './App.css';
// import A from './Components/A';
import A from './ChildToParent/A';
function App() {
  return (
    <div className="App">
      {/* <h1 style={{colo:"blue"}}>Data passing from parent to child using contextAPI</h1> */}
      <h1 style={{colo:"blue"}}>Data received from child to parent using contextAPI</h1>
      <A/>
    </div>
  );
}

export default App;
