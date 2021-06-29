import React, {useState, useEffect} from 'react';
function UserPage({match}) {


  useEffect(() =>{
    fetchUsers();
  },[]);

  const [user, setUser] = useState({});

  const fetchUsers = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${match.params.id}`);
    
    const user = await data.json();
    console.log(user);
    setUser(user);
  }


  console.log(match.params.id);
  return (
    <div className="USerPage">"
      <h1>{user.name}</h1>
    </div>
  );
}

export default UserPage;
