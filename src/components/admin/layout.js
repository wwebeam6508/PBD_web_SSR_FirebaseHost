import styles from './styles/layout.module.css'
import React from 'react'
import Sidebar from './sidebar.js'
import { LoadingProvider } from '../../context/loadingProvider'
import { Provider } from 'react-redux'
import { store } from '../../redux'

function LayoutAdmin({ children }) {
    return (
        <React.Fragment>
            <Provider store={store}>
                <LoadingProvider>
                    <Sidebar />
                </LoadingProvider>
            </Provider>
            <main className={styles.main}>{children}</main>
        </React.Fragment>
    )
}

export default LayoutAdmin