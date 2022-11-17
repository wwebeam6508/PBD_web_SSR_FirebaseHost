import { useRouter } from 'next/router'
import Link from 'next/link'
import classStyle from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
function NavBar() {
    const router = useRouter()
    const [scrollPosition, setScrollPosition] = useState(0)
    const handleScroll = () => {
        const position = window.scrollY
        setScrollPosition(position)
        tabOptical()
    }
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    const [opacityTab, setOpacityTab] = useState(100)
    const [userSelectTab, setUserSelectTab] = useState('initial')
    const tabOptical = () =>{
        // const setofopacity = ((1- (scrollPosition/(window.outerHeight/2)))*100)+30
        if (scrollPosition > 200){
            setOpacityTab(0)
        } else {
            setOpacityTab(100)
        }
        if(scrollPosition > 200){
            setUserSelectTab('none')
        } else {
            setUserSelectTab('initial')
        }
    }
    return (
        <div className={classStyle.navbar} style={{opacity:`${opacityTab}%`,pointerEvents:userSelectTab, transition:"opacity 1s", backgroundImage:"linear-gradient(rgb(0,0,0,1), rgb(255,255,255,0))"}}>
            <h2 className="float-md-start mb-0" style={styles.title}><img style={{margin:"-40px"}} width="200px" height="200px" src={`https://firebasestorage.googleapis.com/v0/b/pbd-supply.appspot.com/o/PBD.png?alt=media&token=e3d1f586-6b5c-4687-a2d6-483833c882c1`}/></h2>
            <div className="nav nav-tabs nav-masthead justify-content-center float-md-end"> 
                <Link href="/home" scroll={true}>
                    <a style={styles.tabtitle} className={`nav-link ${router.asPath === '/home' ? 'active': ''}`}>หน้าแรก</a>
                </Link>
                <Link href="/about" scroll={true}>
                    <a style={styles.tabtitle} className={`nav-link ${router.asPath === '/about' ? 'active': ''}`}>เกี่ยวกับเรา</a>
                </Link>
                <Link href="/works" scroll={true}>
                    <a style={styles.tabtitle} className={`nav-link ${router.asPath === '/works' ? 'active': ''}`}>ผลงานของเรา</a>
                </Link>
                <Link href="/contact" scroll={true}>
                    <a style={styles.tabtitle} className={`nav-link ${router.asPath === '/contact' ? 'active': ''}`}>ติดต่อเรา</a>
                </Link>
            </div>
        </div>
    )
}
const styles = {
    title:{
        userSelect: 'none',
        color:"rgb(250, 255, 250)",
        fontFamily: "Fantasy"
    },
    tabtitle:{
        fontFamily: 'Kanit',
        fontSize: "18px"
    }
}



export default NavBar