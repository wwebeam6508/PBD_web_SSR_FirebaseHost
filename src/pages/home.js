
import styles from '../styles/Home.module.css'
import mainStyles from '../styles/main.module.css'
import Layout from '../components/layout'
import Head from 'next/head'
import { getHomeData } from '../fetchData/getHomeData'
import { useEffect} from 'react'
export default function Home(props) {
    useEffect(()=>{
        async function init() {
            window.scrollTo(0, 0)
        }
        init()
    },[])
      
    return (
        <>
            { props.data ? 
                <>
                    <Head>
                        <link rel="canonical" href='https://pbdsupply.com/home' />
                        <style>
                            <link rel="preconnect" href="https://fonts.googleapis.com" />
                            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                            <link href="https://fonts.googleapis.com/css2?family=Chonburi&family=Pridi&display=swap" rel="stylesheet"/>
                        </style>
                    </Head>
                    <div className={styles.realbody} >
                        <div style={{backgroundImage: `url(${props.data.background})`, backgroundSize:'cover', backgroundRepeat:"round",width:"100%",height:"95vh"}}>
                            <div className={`${mainStyles.firstDes} container-fluid`}>
                                <h1>{props.data.desTop}</h1>
                            </div>
                        </div>
                        <div style={{backgroundImage: `linear-gradient(rgb(235, 248, 250), rgb(235, 234, 240))`, backgroundSize:'cover', backgroundRepeat:"round",width:"100%",height:"75vh"}}>
                            <div className="d-flex justify-content-center" style={{userSelect:"none"}}>
                                <h3><strong>What We Do</strong></h3>
                            </div>
                            <div className={mainStyles.middleDes}>
                                <div className='d-flex justify-content-center' style={{width:"100%",position:"absolute"}}>
                                    <div className='row container-fluid justify-content-evenly'>
                                        <div className={`${mainStyles.centerIcon} col-md-6`}>
                                            <img src={"/blueprint.png"} width="200" height="200" style={{marginLeft:"80px",maxWidth:"50%",height:"auto"}}/>
                                            <p>{props.data.middle.des1}</p>
                                        </div>
                                        <div className={`${mainStyles.centerIcon} col-md-6`}>
                                            <img src={"/pipeline.png"} width="200" height="200" style={{marginLeft:"80px",maxWidth:"50%",height:"auto"}}/>
                                            <p>{props.data.middle.des2}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div style={{backgroundImage: `url(${props.data.background2})`, backgroundSize:'cover', backgroundRepeat:"round",width:"100%",height:"95vh"}}>
                            <div className={`${mainStyles.firstDes} container-fluid`}>
                                <h2>{props.data.desBot}</h2>
                            </div>
                        </div> */}
                    </div>
                </>
                :
                <div className="bg-info border d-flex aligns-items-center justify-content-center" style="height:100px">
                    <p>Loading....</p>
                </div>
            }
        </>
    )
}

export async function getServerSideProps() {
    const res = await getHomeData()
    const data = res
    return { props: { data } }
}

Home.getLayout = function getLayout(page) {
    return (
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
  }
