/* eslint-disable @next/next/no-img-element */
//make sidebar navigation component from mdb-react-ui-kit

import React, { useContext, useEffect, useState } from 'react'
import { MDBBtn, MDBCollapse, MDBIcon, MDBListGroup, MDBListGroupItem, MDBNavbar, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav } from 'mdb-react-ui-kit'
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
  const [subMenuCollaspes, setSubMenuCollaspes] = useState([])
  const [ menu, setMenu ] = useState([])

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
    if(stateAuth.isAuthenticated) {
      getMenu()
    }
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
            <MDBListGroup style={{ display: "flex", alignItems: "center" }} className="list-group-flush">
              <MDBNavbarLink className='sidebar-toggle' onClick={toggleSidebar}>Close Sidebar</MDBNavbarLink >
              <MDBListGroupItem>
                <MDBNavbarNav className='flex-column'>
                {
                  menu && menu.map((item) => {
                    if(item.subMenu.length > 0) {
                      return (
                        <div key={item.key} >
                          <MDBNavbarLink className="waves-effect"
                            onClick={() => {
                              setSubMenuCollaspes((prevState) => {
                                return prevState.map((obj) => {
                                  if(obj.key === item.key) {
                                    return {
                                      ...obj,
                                      isOpen: !obj.isOpen
                                    }
                                  } else {
                                    return obj
                                  }
                                })
                              })
                            }}
                          >
                            <MDBIcon fas icon={item.icon} className="me-3" />
                            {item.name}
                          </MDBNavbarLink>
                          <MDBCollapse navbar show={subMenuCollaspes.find(obj => obj.key === item.key).isOpen}>
                            <MDBNavbarNav className='flex-column'>
                              {
                                item.subMenu.map((subItem) => {
                                  return (
                                    <MDBNavbarLink
                                      key={subItem.key}
                                      active={router.pathname === `/admin${subItem.link}`}
                                      className="waves-effect"
                                      onClick={() => router.push(`/admin${subItem.link}`)}
                                    >
                                      <MDBIcon fas icon={subItem.icon} className="me-3" />
                                      {subItem.name}
                                    </MDBNavbarLink>
                                  )
                                })
                              }
                            </MDBNavbarNav>
                          </MDBCollapse>
                        </div>
                      )
                        
                    } else {
                      return (
                        <MDBNavbarItem key={item.key} >
                          <MDBNavbarLink 
                            
                            active={router.pathname === `/admin${item.link}`}
                            className="waves-effect"
                            
                            onClick={() => router.push(`/admin${item.link}`)}
                          >
                            <MDBIcon fas icon={item.icon} className="me-3" />
                            {item.name}
                          </MDBNavbarLink>
                        </MDBNavbarItem>
                      )
                    }
                  })
                }
                </MDBNavbarNav>
              </MDBListGroupItem>
              <MDBBtn 
                style={{ position: "absolute", bottom: "0" , marginBottom:"10px", backgroundColor: "#BD243D", color: "#fff "}}
                onClick={signOut} >
                ล็อคเอ้าท์
              </MDBBtn>
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
    const menu = await getMenuData()
    setMenu(menu)
    setSubMenuCollaspes(menu.map((item) => { return { key: item.key, isOpen: false }}))
  }
}

export default Sidebar





