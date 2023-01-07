/* eslint-disable @next/next/no-img-element */
//make sidebar navigation component from mdb-react-ui-kit

import React, { useContext, useEffect, useState } from 'react'
import { MDBIcon, MDBListGroup, MDBListGroupItem, MDBNavbarLink } from 'mdb-react-ui-kit'
import { useRouter } from 'next/router'
import { logout } from '../../redux/reducers/auth/action'
import { store } from '../../redux/index.js'
import { getMenuData } from '../../fetchData/admin/getMenuData'
import { LoadingContext } from '../../context/loadingProvider'
import withReactContent from "sweetalert2-react-content";
import Swal from 'sweetalert2'
import { useSelector } from 'react-redux'
const MySwal = withReactContent(Swal)

function Sidebar(props) {
  const { setLoading } = useContext(LoadingContext)
  const router = useRouter()
  const stateAuth = useSelector(state => state.auth)
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    setLoading(true)
    async function init() {
      await getMenu()
    }
    if(stateAuth.isAuthenticated) {
      init()
    }else{
      router.replace('/admin/login')
    }
    setLoading(false)
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [router, stateAuth, setLoading])

  return (
    <>
      <MDBNavbarLink className='sidebar-toggle' onClick={toggleSidebar}>Open Sidebar</MDBNavbarLink >
      {
        isOpen && (
          <div className='sidebar-fixed position-fixed'>
            <MDBListGroup className="list-group-flush">
              <MDBNavbarLink className='sidebar-toggle' onClick={toggleSidebar}>Close Sidebar</MDBNavbarLink >
              <MDBListGroupItem>
                <MDBNavbarLink active={router.pathname === '/dashboard'} className="waves-effect" >
                  <MDBIcon fas icon="chart-pie" className="me-3" />
                  Dashboard
                </MDBNavbarLink>
                <MDBNavbarLink onClick={signOut} className="waves-effect" >
                  <MDBIcon fas icon="chart-pie" className="me-3" />
                  Sign Out
                </MDBNavbarLink>
              </MDBListGroupItem>
            </MDBListGroup>
          </div>
        )
      }
    </>
  )

  function signOut() {
    MySwal.fire({
      title: 'ยืนยันการออกจากระบบ',
      text: "แน่ใจว่าต้องการออกจากระบบ",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sign Out'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await signOutProcess()
      }
    })

    
  }

  async function signOutProcess() {
    setLoading(true)
    const userID = stateAuth.user.userProfile.userID
    await store.dispatch(logout({userID: userID}))
    setLoading(false)
  }

  async function getMenu() {
    setLoading(true)
    console.log(await getMenuData())
    setLoading(false)
  }
}

export default Sidebar





