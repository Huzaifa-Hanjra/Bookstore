import React from 'react';
import { Link } from 'react-router-dom';
import Loin from './Loin';
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("email")); // watch input value by passing the name of it

  return (
    <div className='flex h-screen items-center justify-center'>
      <div className="w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="post">
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            <h3 className="font-bold text-lg">Signup</h3>
            <div className='mt-5 py-3'>
              <span>Email:</span><br />
              <input 
                type='email' 
                placeholder='Enter your Email' 
                className='w-80 px-4 border rounded outline-none py-1' 
                {...register("email", { required: true })} 
              /><br></br>
              {errors.email && <span className='text-red-500'>This field is required</span>}
            </div>
            <div className='mt-3 py-3'>
              <span>Password:</span><br />
              <input 
                type='password' 
                placeholder='Enter your Password' 
                className='w-80 px-4 border rounded outline-none py-1' 
                {...register("password", { required: true })} 
              /><br></br>
              {errors.password && <span className='text-red-500'>This field is required</span>}
            </div>
            <div className='flex justify-around mt-2'>
              <button type="submit" className='bg-pink-500 px-3 py-1 text-white rounded'>Sign up</button>
              <p>
                Have Account? 
                <button 
                  type="button"
                  className='text-blue-500 cursor-pointer underline'
                  onClick={() => document.getElementById("my_modal_3").showModal()}
                >
                  Login
                </button>
                <Loin />
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
