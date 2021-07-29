import './scss/style.scss';
import NavBar from './components/NavBar/NavBar';
import Input from './components/Input/Input';
import {useState} from 'react';
function App() {
  const [data,setData] = useState("");
  const handleInputChange = (event)=>{
    console.log("Event value" , event.target.value);
    setData(event.target.value);
  }
  return (
    <>
        <div id="container">
        <h1>Hello World</h1>
    </div>
    <div id="toast">
          <h4 className="warning">You may fail this match</h4>
          <h4 className="danger">Alas! I failed this match</h4>
          <h4 className="success">Yahoo ! I won this match</h4>
    </div>
    <div className="box">
      <h3>This text comes inside a box</h3>
      <p>This text is related to tiny size</p>
    </div>

    <div className="flex-container">
      <div className="box-1">
        <h3>Box One</h3>
        <p>This is the description for the Box 1 </p>
      </div>
      <div className="box-2">
        <h3>Box Two</h3>
        <p>This is the description for the Box 1 </p>
      </div>
      <div className="box-3">
        <h3>Box Three</h3>
        <p>This is the description for the Box 1 </p>
      </div>
    </div>

    <Input type="text" value={data} label="Enter a name " placeholder="Enter Your Name" handleInputChange={handleInputChange} />
    </>
  );
}

export default App;
