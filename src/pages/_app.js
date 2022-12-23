
import '../styles/globals.css'
import { createFirebaseApp } from '../firebase/clientApp'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {store} from '../redux/index.js'
import { Provider } from 'react-redux'
import 'sweetalert2/src/sweetalert2.scss'
config.autoAddCss = false
function MyApp({ Component, pageProps }) {
  createFirebaseApp()
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
  )
}

export default MyApp
