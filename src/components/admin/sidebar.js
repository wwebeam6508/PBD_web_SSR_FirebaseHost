/* eslint-disable @next/next/no-img-element */
//make sidebar navigation component from mdb-react-ui-kit

import React from 'react'
import { MDBIcon, MDBListGroup, MDBListGroupItem, MDBNavLink, MDBBtn } from 'mdb-react-ui-kit'
import { useRouter } from 'next/router'
import { logout } from '../../redux/reducers/auth/action'
import { store } from '../../redux/index.js'
import { useDispatch } from 'react-redux'
function Sidebar(props) {
  const router = useRouter()
  const state = store.getState()
  const dispatch = useDispatch()
  return (
    <>
      <div className='sidebar-fixed position-fixed'>
        <a href='#!' className='logo-wrapper waves-effect'>
          <img alt='MDB React Logo' className='img-fluid' src='/images/logo.png' />
        </a>
      </div>
    </>
  )
}

export default Sidebar





