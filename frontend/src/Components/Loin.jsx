import React from 'react'
import { Link } from 'react-router-dom'
import Signup from './Signup'
import { useForm } from "react-hook-form"

const Loin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  console.log(watch("example")) // watch input value by passing the name of it

  return (
    <div>

<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)}  method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    
    <h3 className="font-bold text-lg">Login</h3>
    <div className='mt-5 py-3'>
      <span>Email:</span><br></br>
      <input type='email' placeholder='
      Enter your Email' className='w-80 px-4 border rounded outline-none py-1'
       {...register("email", { required: true })} /><br></br>
        {errors.email && <span className='text-red-700'>This field is required</span>}
    </div>
    <div className='mt-3 py-3'>
      <span>Password:</span><br></br>
      <input type='password' placeholder='
      Enter your Password' className='w-80 px-4 border rounded outline-none py-1'
     {...register("password", { required: true })} /><br></br>
      {errors.password && <span className='text-red-700'>This field is required</span>}
    </div>
    <div className='flex justify-around mt-2'>
      <button className='bg-pink-500 px-3 py-1 text-white rounded'>Login</button>
      <p>Not Registered?<Link to="Signup" className='text-blue-500 cursor-pointer underline'>Sign up</Link></p>
    </div>
    </form>
  </div>
</dialog>
    </div>
  )
}

export default Loin