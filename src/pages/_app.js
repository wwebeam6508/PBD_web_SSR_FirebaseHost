
import '../styles/globals.css'
import { createFirebaseApp } from '../firebase/clientApp'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import { store } from '../redux/index.js'
import { Provider } from 'react-redux'
import 'sweetalert2/src/sweetalert2.scss'
import ErrorBoundary from '../components/ErrorBoundary'
import { LoadingProvider } from '../context/loadingProvider'
import Init from './init'

config.autoAddCss = false
function MyApp({ Component, pageProps }) {
  createFirebaseApp()
  const getLayout = Component.getLayout || ((page) => page)
  const theme = {
    primaryColor: '#f44336',
    secondaryColor: '#f50057',
    successColor: '#4caf50',
    infoColor: '#2196f3',
    warningColor: '#ff9800',
    dangerColor: '#f44336',
    lightColor: '#e0e0e0',
    darkColor: '#212121'
  };
  return getLayout(
    
    <Provider store={store}>
      <ErrorBoundary>
          <LoadingProvider>
            <Init Component={Component} pageProps={pageProps} />
          </LoadingProvider>
      </ErrorBoundary>
    </Provider>
  )
}

export default MyApp
