
import "./App.css";
import Project01 from "./components/Project01";
import Project02 from "./components/Project02";


function App() {
  

  return (
    <div className="App">
      
      <div 
      style={{
        height:'30vh',
        width:'40vw',
        background:'#ddd',
        
      }}
      >
        {/* <Project01></Project01> */}
      <Project02></Project02>
      </div>

    </div>
  );
}

export default App;
