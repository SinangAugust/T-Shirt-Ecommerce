import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Base from '../core/Base'


const Signin = () => {

    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        success: false,
        loading: false,
        didRedirect: false
    })

    const { email, password, error, success, loading, didRedirect } = values

    const handleChange = name => 
        event => {
            setValues({...values, error: false, [name]: event.target.value})
        }

    const successMessage = () => {
        return(
            <div className='row'>
                <div className='col-md-6 offset-sm-3 text-center'>
                    <div
                    className='alert alert-success'
                    style={{ display: success ? "" : "none" }}
                    >
                        New account created successfully. You can <Link 
                            to='/signin'
                        >
                        login now.
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    const errorMessage = () => {
        return(
            <div className='row'>
                <div className='col-md-6 offset-sm-3 text-left'>
                    <div
                    className='alert alert-danger'
                    style={{ display: error ? "" : "none" }}
                    >
                        Signup error! Check all fields again.
                    </div>
                </div>
            </div>
        )
    }

    const signInForm = () => {
        return(
            <div className='row'>
                <div className='col-md-6 offset-sm-3 text-left'>
                    <form>
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
                        <button
                        onClick={()=>{}}
                        className='btn btn-success btn-block'
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        )
    }

    return(
        <Base title='Signin Page' description='A t-shirt store'>
            {signInForm()}
            <p className='text-center'>
                {JSON.stringify(values)}
            </p>
        </Base>
    )
}

export default Signin