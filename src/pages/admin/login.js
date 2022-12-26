import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput
}
    from 'mdb-react-ui-kit';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/reducers/auth/action'
export default function Login(props) {
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <section className="vh-100" >
            <MDBContainer fluid style={{backgroundColor: `rgb(226, 226, 226)`,position:'absolute'}} className='d-flex justify-content-center align-items-center h-100'>

                <MDBRow>
                    <MDBCol col='12'>

                        <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                <p className="text-white-50 mb-5">กรุณาใส่รหัสและพาสเวิร์ด!</p>

                                <MDBInput value={username} onChange={(e)=>{setUsername(e.target.value)}} wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" />
                                <MDBInput value={password} onChange={(e)=>{setPassword(e.target.value)}} wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" />

                                <MDBBtn onClick={signIn} disabled={()=>{}} outline className='mx-2 px-5' color='white' size='lg'>
                                    Login
                                </MDBBtn>

                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </section>
    )

    async function signIn() {
        dispatch(login(username, password)).then((res) => {
            if (res) {
                console.log(res)
            }
        })
    }
}
