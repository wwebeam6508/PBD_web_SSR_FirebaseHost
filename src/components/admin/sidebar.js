/* eslint-disable @next/next/no-img-element */
//make sidebar navigation component from mdb-react-ui-kit

import React, { useEffect, useState } from 'react'
import { MDBIcon, MDBListGroup, MDBListGroupItem, MDBNavbarLink } from 'mdb-react-ui-kit'
import { useRouter } from 'next/router'
import { logout } from '../../redux/reducers/auth/action'
import { store } from '../../redux/index.js'
import { useDispatch } from 'react-redux'
import { getMenuData } from '../../fetchData/admin/getMenuData'

function Sidebar(props) {
  const router = useRouter()
  const state = store.getState()
  const dispatch = useDispatch()
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
    async function init() {
      await getMenu()
    }
    init()
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }

  }, [])

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
              </MDBListGroupItem>
            </MDBListGroup>
          </div>
        )
      }
    </>
  )

  async function getMenu() {
    await getMenuData().then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.error(err)
    })
  }
}

export default Sidebar





