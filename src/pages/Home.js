
import ToDoList from '../components/ToDoList';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1 className="home-title">Welcome to the TODO App</h1>
    <ToDoList /> 
    </div>
  );
}
export default Home;
