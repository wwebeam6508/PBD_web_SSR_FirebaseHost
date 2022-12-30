import styles from './layout.module.css'
import React from 'react'
import Sidebar from './sidebar.js'
import { Provider } from 'react-redux'
import { store } from '../../redux/index.js'

function LayoutAdmin({ children }) {
    return (
        <React.Fragment>
            <Provider store={store}>
                <Sidebar />
                <main className={styles.main}>{children}</main>
            </Provider>
        </React.Fragment>
    )
}

export default LayoutAdmin