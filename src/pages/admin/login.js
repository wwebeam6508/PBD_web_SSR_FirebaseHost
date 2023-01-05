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
import React, { useContext, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { LoadingContext } from '../../context/loadingProvider';
import { login } from '../../redux/reducers/auth/action'
import { isEmpty } from '../../util/helper';
import { store } from '../../redux/index.js'
import { useRouter } from 'next/router';
export default function Login(props) {
    const router = useRouter()
    const { setLoading } = useContext(LoadingContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoaded, setIsLoaded] = useState(false)
    const state = store.getState()
    useEffect(() => {
        if (state.auth.isAuthenticated) {
            router.push('/admin/dashboard')
        } else {
            setIsLoaded(true)
        }
    }, [router, state.auth.isAuthenticated])

    if (!isLoaded) {
        return <></>
    }
    return (
        <>
            <section className="vh-100" >
                <MDBContainer fluid style={{ backgroundColor: `rgb(226, 226, 226)`, position: 'absolute' }} className='d-flex justify-content-center align-items-center h-100'>
                    <MDBRow>
                        <MDBCol col='12'>
                            <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                                <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p className="text-white-50 mb-5">กรุณาใส่รหัสและพาสเวิร์ด!</p>
                                    <MDBInput value={username} onChange={(e) => { setUsername(e.target.value) }} wrapperClass='mb-4 mx-5' labelClass='text-white' label='Email address' type='email' size="lg" />
                                    <MDBInput value={password} onChange={(e) => { setPassword(e.target.value) }} wrapperClass='mb-4 mx-5' labelClass='text-white' label='Password' type='password' size="lg" />
                                    <MDBBtn onClick={signIn} disabled={isEmpty(username) || isEmpty(password)} outline className='mx-2 px-5' color='white' size='lg'>
                                        Login
                                    </MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </>
    )

    async function signIn() {
        setLoading(true)
        store.dispatch(login(username, password)).then((res) => {
            setLoading(false)
        })
    }
}
