
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import aboutStyle from '../styles/about.module.css'
import { getAboutData } from '../fetchData/getAboutData'

export default function About(props) {
    const data = props.data
    return (
        <>
            {
                data ?
                    <>
                        <Head>
                            <link rel="canonical" href='https://pbdsupply.com/about' />
                            <style>
                                <link rel="preconnect" href="https://fonts.googleapis.com" />
                                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                                <link href="https://fonts.googleapis.com/css2?family=Chonburi&family=Pridi&display=swap" rel="stylesheet"/>
                            </style>
                        </Head>
                        <div className={styles.realbody}>
                            <div className={aboutStyle.mainpoint}>
                                <div className="container-fluid row align-items-center h-100">
                                    <div className="col-md-6 mx-auto text-center" style={{paddingTop:"230px"}}>
                                        <h1 className={aboutStyle.titleDes}>ห้างหุ้นส่วนจำกัด พีบีดี ซัพพลาย</h1>
                                        <h2 className={aboutStyle.titleDes}>( PBD Supply Part., Ltd. )</h2>
                                        <p className={aboutStyle.detailP}>
                                            {data.images.caption[0]}
                                        </p>
                                        <p className={aboutStyle.detailP1}>
                                            {data.images.caption[1]}
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-evenly'>
                                        <div className={aboutStyle.circleImage} style={{backgroundImage:`url(${data.images.source[0]})`,backgroundSize:"230px 230px"}} />
                                        <div className={aboutStyle.circleImage} style={{backgroundImage:`url(${data.images.source[1]})`,backgroundSize:"230px 230px"}} />
                                        <div className={aboutStyle.circleImage} style={{backgroundImage:`url(${data.images.source[2]})`,backgroundSize:"230px 230px"}} />
                                    </div>
                                </div>
                            </div>
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
    const res = await getAboutData()
    const data = res
    return { props: { data } }
}

About.getLayout = function getLayout(page) {
    return (
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
  }