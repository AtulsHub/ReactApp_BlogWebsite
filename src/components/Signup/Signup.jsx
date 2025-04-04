import React, {useState} from 'react'
import authService from '../../appwrite/auth'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {Button, Input} from '../index'
import { useForm } from 'react-hook-form'


const Signup = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {register, handleSubmit} = useForm()
  const [error, useError] = useState('')

  const create = async() =>{
    useError("")
    try {
      const userData = await authService.createAccount(data)
      if(userData) dispatch(login(userData))
        navigate('/')

    } catch (error) {
      useError(error.message)
    }
  }
  return (
          <div
          className='flex items-center justify-center w-full '
          >
              <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
              <div className="mb-2 flex justify-center">
                          <span className="inline-block w-full max-w-[100px]">
                              <img src="../logo.png" alt="logo" className='h-15'/>
                          </span>
              </div>
              <h2 className="text-center text-2xl font-bold leading-tight">Sign up new user</h2>
              <p className="mt-2 text-center text-base text-black/60">
                          Already have any account?&nbsp;
                          <Link
                              to="/login"
                              className="font-medium text-primary transition-all duration-200 hover:underline"
                          >
                              Login
                          </Link>
              </p>
              {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
              <form onSubmit={handleSubmit(create)} className='mt-8'>
                  <div className='space-y-5'>
                  <Input
                      label="Full Name: "
                      placeholder="Enter your name"
                      type="text"
                      {...register("email", {
                          required: true,
                          }
                      )}
                      />
                      <Input
                      label="Email: "
                      placeholder="Enter your email"
                      type="email"
                      {...register("email", {
                          required: true,
                          validate: {
                              matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                              "Email address must be a valid address",
                          }
                      })}
                      />
                      <Input
                      label="Password: "
                      type="password"
                      placeholder="Enter your password"
                      {...register("password", {
                          required: true,
                      })}
                      />
                      <Button
                      type="submit"
                      className="w-full"
                      >Sign Up</Button>
                  </div>
              </form>
              </div>
          </div>
        )
}

export default Signup;