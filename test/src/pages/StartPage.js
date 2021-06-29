import React, {useState, useEffect} from 'react';


import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function StartPage() {

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
      <div className="StartPage">
        <h1>APP</h1>
        {users.map(user =>(
          
            <h1 key={user.id}>
              <Link to={{
                  pathname: `/${user.id}`,
                  state: {
                    userName: user.name,    
                  }
                  
                }}  
                >{user.name}</Link>
            </h1>
          
        ))}
        
    
      </div>
  );
}

export default StartPage;
