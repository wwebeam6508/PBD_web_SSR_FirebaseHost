// default dashboard.js page
import React, { useEffect } from 'react'
import LayoutAdmin from '../../components/admin/layout';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
export default function Dashboard(props) {
    const router = useRouter()
    const stateAuth = useSelector(state => state.auth)
    useEffect(() => {
        if (!stateAuth.isAuthenticated) {
            router.replace('/admin/login')
        }
    }, [stateAuth])
    return (
        <>
            <div className='d-flex justify-content-center align-items-center h-100'>
                <div>
                    <h2 className="fw-bold mb-2 text-uppercase">Dashboard</h2>
                </div>
            </div>
        </>
    )
}

Dashboard.getLayout = function getLayout(page) {
    return (
        <>
            <LayoutAdmin>
                {page}
            </LayoutAdmin>
        </>
    )
}