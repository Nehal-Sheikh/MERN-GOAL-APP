import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { FaUser } from "react-icons/fa"
import { register, reset } from "../features/auth/authSlice"

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })
 
    const { name, email, password, password2} = formData                           //de structuring the form fields here

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => {state.auth()})                            //here we are selecting what we want from our state

    const onChange = (e) => {
        setFormData((prevState) => ({                                              //here instead of using only {} this bracket we have use ({}) this bracket because we want to be this as an object beacuse we are the formDate to an object
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <section className="heading">
                <h1><FaUser /> Register</h1>
                <p>Please create an account</p>
            </section>

            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" id="name" name="name" value={name} placeholder="Enter your name" onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" id="email" name="email" value={email} placeholder="Enter your email" onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="password" name="password" value={password} placeholder="Enter your password" onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="password2" name="password2" value={password2} placeholder="Confirm password" onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block">Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register