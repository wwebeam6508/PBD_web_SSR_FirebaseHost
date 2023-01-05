import styles from './styles/layout.module.css'
import React from 'react'
import Sidebar from './sidebar.js'
import { Provider } from 'react-redux'
import { store } from '../../redux/index.js'

function LayoutAdmin({ children }) {
    return (
        <React.Fragment>
            <Sidebar />
            <main className={styles.main}>{children}</main>
        </React.Fragment>
    )
}

export default LayoutAdmin