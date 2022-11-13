import './HomePage.css'
import { useState, useEffect } from 'react';
import projectApi from '../../api/project.api';

const HomePage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    projectApi.getUsers()
      .then((result) => {
        setUsers(result)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      Users
      {users.map((user) => {
        return (
        <div key={user._id}>
          <h1>{user.username}</h1>
        </div>
        )
      })}
    </div>
  )
}

export default HomePage; 