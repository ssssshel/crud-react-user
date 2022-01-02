import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';

const EditUserForm = (props) => {

  console.log(props.currentUser)

  const {register, formState: {errors}, handleSubmit, setValue} = useForm({
    defaultValues: props.currentUser
  })

  setValue('name', props.currentUser.name)
  setValue('username', props.currentUser.username)

  const onSubmit = (data, e) => {
    // props.editUser(data)

    data.id = props.currentUser.id
    props.updateUser(props.currentUser.id, data)

    // LIMPIAR CAMPOS
    e.target.reset()
  }

  return ( 
    <Fragment>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="">Name</label>
      <input type="text"
      {
        ...register("name", 
        {
          required: true
        })
      } 
      ></input>
      <p>{errors.name && "Llenar nombre"}</p>
      <label htmlFor="">Username</label>
      <input type="text" 
      {
        ...register("username", 
        {
          required: true
        })
      }
      ></input>
      <p>{errors.username && "Llenar nombre de usuario"}</p> 
      <button>Edit user</button>
    </form>
    </Fragment>
   );
}
 
export default EditUserForm;