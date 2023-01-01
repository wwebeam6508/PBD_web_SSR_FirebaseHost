/* eslint-disable @next/next/no-img-element */
//make sidebar navigation component from mdb-react-ui-kit

import React, { useEffect, useState } from 'react'
import { MDBIcon, MDBListGroup, MDBListGroupItem, MDBNavbarLink } from 'mdb-react-ui-kit'
import { useRouter } from 'next/router'
import { logout } from '../../redux/reducers/auth/action'
import { store } from '../../redux/index.js'
import { useDispatch } from 'react-redux'

function Sidebar(props) {
  const router = useRouter()
  const state = store.getState()
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  const handleResize = () => {
    if(window.innerWidth >= 768) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])
  
  return (
    <>
      <MDBNavbarLink  onClick={toggleSidebar}>Toggle Sidebar</MDBNavbarLink >
      <div className='sidebar-fixed position-fixed'>
        <a className="logo-wrapper waves-effect">
          <img alt="MDB React Logo" className="img-fluid" src="/images/logo.png" />
        </a>
        <MDBListGroup  className="list-group-flush">
          {
            isOpen && 
            <MDBListGroupItem>
              <MDBNavbarLink  active={router.pathname === '/dashboard'} className="waves-effect" >
                <MDBIcon fas icon="chart-pie" className="me-3" />
                Dashboard
              </MDBNavbarLink>
            </MDBListGroupItem>
          }
        </MDBListGroup>
      </div>
    </>
  )
}

export default Sidebar





