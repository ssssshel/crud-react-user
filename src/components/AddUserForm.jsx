import React, {Fragment} from 'react';
import { useForm } from 'react-hook-form';  


const AddUserForm = (props) => {

  const {register, formState: {errors}, handleSubmit} = useForm()

  const onSubmit = (data, e) => {
    // console.log(data)
    props.addUser(data)
    // LIMPIAR DATOS
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
      <button>Add new user</button>
    </form>
    </Fragment>
   );
}
 
export default AddUserForm;