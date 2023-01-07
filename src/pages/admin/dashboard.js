// default dashboard.js page
import React, { useContext, useEffect } from 'react'
import { LoadingContext } from '../../context/loadingProvider';
import LayoutAdmin from '../../components/admin/layout';
export default function Dashboard(props) {
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