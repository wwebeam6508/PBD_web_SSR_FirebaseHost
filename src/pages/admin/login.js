import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/reducers/auth/action'
export default function Login(props) {
    const dispatch = useDispatch()
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')

    return (
        <section className="vh-100" style={{backgroundColor: `#508bfc`}}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong" style={{borderRadius: `1rem`}}>
                            <div className="card-body p-5 text-center">

                                <h3 className="mb-5">ลงชื่อเข้าใช้</h3>

                                <div className="form-outline mb-4">
                                    <input onChange={e => setUsername(e.target.value)} value={username} type="username" id="typeEmailX-2" className="form-control form-control-lg" />
                                    <label className="form-label" htmlFor="typeEmailX-2">Username</label>
                                </div>

                                <div className="form-outline mb-4">
                                    <input onChange={e => setPassword(e.target.value)} value={password} type="password" id="typePasswordX-2" className="form-control form-control-lg" />
                                    <label className="form-label" htmlFor="typePasswordX-2">Password</label>
                                </div>

                                {/* <div className="form-check d-flex justify-content-start mb-4">
                                    <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                                    <label className="form-check-label" htmlFor="form1Example3"> Remember password </label>
                                </div> */}

                                <button onClick={signIn} className="btn btn-primary btn-lg btn-block" type="button">signIn</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

    async function signIn() {
        dispatch(login(username, password))
    }
}
