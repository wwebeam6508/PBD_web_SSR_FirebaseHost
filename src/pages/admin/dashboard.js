// default dashboard.js page
import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { LoadingContext } from '../../context/loadingProvider';
import { store } from '../../redux/index.js'
export default function Dashboard(props) {
    const router = useRouter()
    const { setLoading } = useContext(LoadingContext)
    const state = store.getState()
    useEffect(() => {
        if(!state.auth.isAuthenticated){
            router.push('/admin/login')
        }
    }, [])
    return (
        <>
            <section className="vh-100" >
                <div className='d-flex justify-content-center align-items-center h-100'>
                    <div>
                        <h2 className="fw-bold mb-2 text-uppercase">Dashboard</h2>
                    </div>
                </div>
            </section>
        </>
    )
}