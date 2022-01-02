import React, { useState } from 'react';
import UserTable from './components/UserTable';
import { v4 as uuidV4 } from 'uuid';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';

function App() {

  const usersData = [
    { id: uuidV4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidV4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidV4(), name: 'Ben', username: 'benisphere' },
  ]


  // STATE
  const [users, setUsers] = useState(usersData)

  // AGREGAR USUARIOS

  const addUser = (user) =>{
    user.id = uuidV4()
    setUsers([
      ...users,
      user
    ])
  }


  // ELIMINAR USUARIOS

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }


  // EDITAR USUARIOS
  const [editing, setEditing] = useState(false)

  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: '', 
    username: ''
  })

  const editRow = (user) => {
    setEditing(true)
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username
    })
  }

  const updateUser = (id, updateUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">

          {
            editing ? (
              <div>
                <h2>Edit User</h2>
                <EditUserForm 
                currentUser={currentUser}
                updateUser={updateUser}
                />
              </div>
            ) : (
              <div>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser} />
              </div>
            )
          }
          

        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable 
          users={users} 
          deleteUser={deleteUser} 
          editRow={editRow}
          />
        </div>
      </div>
    </div>

  );
}

export default App;
