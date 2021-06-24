import React, {useState, useEffect} from 'react';
import './App.css';
import UserPage from './pages/UserPage';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
function App() {

  useEffect(() =>{
    fetchUsers();
  },[]);

  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    
    const users = await data.json();
    console.log(users);
    setUsers(users);
  }

  return (
    <Router>
      <div className="App">
        <h1>APP</h1>
        {users.map(user =>(
          
            <h1 key={user.id}>
              <Link to={`/${user.id}`}>{user.name}</Link>
            </h1>
          
        ))}
        <UserPage/>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
