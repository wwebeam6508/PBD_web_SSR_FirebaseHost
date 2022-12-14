
import styles from '../styles/Home.module.css'

function NavBar() {

    return (
        <footer className={`${styles.footer} footer mt-auto py-3 bg-light`} style={{userSelect:"none", fontFamily:"fantasy"}}>
            <h4 className="float-md-start mb-0">PBD Supply ©{' 2022'}</h4>
        </footer>
    )
}

export default NavBar