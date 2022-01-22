import React, { useState } from 'react'
import Base from '../core/Base'
import {Link} from 'react-router-dom'
import {singup} from '../auth/helper'

const Signup = () => {

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false
    })

    const { name, email, password, error, success } = values

    const handleChange = name => 
        event => {
            setValues({...values, error: false, [name]: event.target.value})
        }

    const signUpForm = () => {
        return(
            <div className='row'>
                <div className='col-md-6 offset-sm-3 text-left'>
                    <form>
                        <div className='form-group'>
                            <label className='text-light'>Name</label>
                            <input 
                            className='form-control'
                            value={name}
                            onChange={handleChange('name')}
                            type='text'
                            />
                        </div>
                        <div className='form-group'>
                            <label className='text-light'>Email</label>
                            <input 
                            className='form-control'
                            value={email}
                            onChange={handleChange('email')}
                            type='text'
                            />
                        </div>
                        <div className='form-group'>
                            <label className='text-light'>Password</label>
                            <input 
                            className='form-control'
                            value={password}
                            onChange={handleChange('password')}
                            type='password'
                            />
                        </div>
                        <button className='btn btn-success btn-block'>Submit</button>
                    </form>
                </div>
            </div>
        )
    }

    return (
        <Base title='Sign Up Page' description='A signup for this E-commerce website'>
            {signUpForm()}
            <p>Test of sign up page</p>            
        </Base>
    )
}

export default Signup