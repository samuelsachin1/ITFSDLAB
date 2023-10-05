import axios from 'axios'
import React,{useState} from 'react';

function App() {
  const [sname,setsname] = useState("")
  const [tech,settech] = useState("")
  const [status,setstatus] = useState("")

  const handleSubmit =()=>{
    axios.post("http://localhost:9000/aliens",{name:sname,tech:tech,sub:status}).then(
     console.log("success")
    )
  }
  return (
    <div className="App">
      <div>
        <label>Sname:</label>
        <input name='sname' value={sname} onChange={(e)=>{setsname(e.target.value)}}></input>
      </div>
      <div>
        <label>Tech:</label>
        <input name='tech' value={tech} onChange={(e)=>{settech(e.target.value)}}></input>
      </div>
      <div>
        <label>Status:</label>
        <input name='status' value={status} onChange={(e)=>{setstatus(e.target.value)}}></input>
      </div>
      <div>
        <button onClick={handleSubmit}>Go</button>
      </div>
    </div>
  );
}

export default App;
