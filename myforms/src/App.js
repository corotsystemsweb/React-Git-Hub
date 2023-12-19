import logo from './logo.svg';
import './App.css';
import UserData from './UserData';
import Card from './Card';

function App() {

  const headingWelcome = {
    backgroundColor: "olive",
    fontSize: "25px",
    padding: "1em",
    marginTop: "2em",
    color: "#ffffff"
  };
  return (
    <div className="App">
       <UserData />
       <h1 style={headingWelcome}>Welcome Back !</h1>
       <Card />
    </div>
  );
}
export default App;
