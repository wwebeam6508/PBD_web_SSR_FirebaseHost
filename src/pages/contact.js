/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-page-custom-font */

import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import contactStyles from '../styles/contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faContactCard } from '@fortawesome/free-solid-svg-icons'
export default function Contact() {
    return (
        <>
            <Head>
                <link rel="canonical" href='https://pbdsupply.com/contact' />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Chonburi&family=Pridi&display=swap" rel="stylesheet" />
            </Head>
            <div className={styles.realbody}>
                <div className={contactStyles.mainpoint}>
                    <div className={`container-fluid`}>
                        <div className={`${contactStyles.contactZone} row`} >
                            <div className={`col-12 text-center ${contactStyles.title}`}>
                                <h1>ติดต่อเรา</h1>
                            </div>
                            <div className={`col-md-6 text-center`}>
                                <h2 className={`${contactStyles.title}`}>ที่ตั้ง <FontAwesomeIcon icon={faLocation} /></h2>
                                <h4 className={`${contactStyles.detail}`}>178/1 หมู่ 1 ตำบลปงแสนทอง อำเภอเมืองลำปาง จังหวัดลำปาง 52100</h4>
                                <a rel="noreferrer" href='https://www.google.co.th/maps/dir//%E0%B8%AB%E0%B8%88%E0%B8%81.%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%8D%E0%B9%8C+%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%99%E0%B8%88%E0%B8%B4%E0%B9%80%E0%B8%99%E0%B8%B5%E0%B8%A2%E0%B8%A3%E0%B8%B4%E0%B9%88%E0%B8%87+Nakprad+engineering+ltd.+%E0%B8%9B%E0%B8%87%E0%B9%81%E0%B8%AA%E0%B8%99%E0%B8%97%E0%B8%AD%E0%B8%87+178%2F1+%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B9%88%E0%B8%97%E0%B8%B5%E0%B9%881+%E0%B8%95%E0%B8%B3%E0%B8%9A%E0%B8%A5%E0%B8%9B%E0%B8%87%E0%B9%81%E0%B8%AA%E0%B8%99%E0%B8%97%E0%B8%AD%E0%B8%87+%E0%B8%AD%E0%B8%B3%E0%B9%80%E0%B8%A0%E0%B8%AD%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87+%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87+Lampang+52100/@18.2739454,99.4581149,20.25z/data=!4m9!4m8!1m0!1m5!1m1!1s0x30d96bdeb4afb5a3:0x3999c3f3013ab7ae!2m2!1d99.4579794!2d18.2739052!3e0?hl=en' target={`_blank`}>
                                    <img width={'100px'} height={'100px'} src='/googlemap.png' />
                                </a>
                            </div>
                            <div className={`col-md-6 text-center ${contactStyles.detail}`}>
                                <h2 className={`${contactStyles.title}`}>ช่องทางติดต่อ <FontAwesomeIcon icon={faContactCard} /></h2>
                                <h4 ><label className={`${contactStyles.title}`}>เบอร์โทร :</label> 0966979449 <label className={`${contactStyles.title}`}>(คุณต่าย)</label></h4>
                                <h4 ><a rel="noreferrer" href='https://www.facebook.com/PBD-Supply-105617124490051' target="_blank"><img width={'100px'} height={'100px'} src='/facebook.png' /></a></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Contact.getLayout = function getLayout(page) {
    return (
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
}
