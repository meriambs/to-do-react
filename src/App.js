import './App.css';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="App m-5">
      <div style={{marginTop:"40px",marginBottom:"20px"}}>
        <h2>Welcome To Your </h2>
        <h4>To Do List</h4>
      </div>

     <TodoInput style={{ marginBottom:"20px"}}/>
     <TodoList/>
    
    </div>
  );
}

export default App;
