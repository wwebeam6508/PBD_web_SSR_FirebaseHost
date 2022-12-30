import Navbar from './navbar'
import Footer from './footer'
import Head from 'next/head'
import styles from './layout.module.css'
import React from 'react'

export default function Layout({ children }) {
    return (
        <React.Fragment>
            <Head>
                <title>ห้างหุ้นส่วนจำกัด พีบีดีซัพพลาย (PBD Supply Part., Ltd.)</title>
                <meta name="description" content="บริษัทรับเหมา จังหวัดลำปาง ภาคเหนือ ก่อตั้งเพื่อรับงานติดตั้งท่อน้ำโรงงาน,เหมือง และ HDPE มีทีมงานเครื่องมืออุปกรณ์  ซื้อขายอุปกรณ์ต่างประเทศโดยนำเข้าสินค้าวัสดุก่อสร้างและเครื่องจักร" />
                <link rel="icon" href="/favicon.svg" />
                <meta name="author" content="Kraivich NakpradENG PBD" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Navbar />
            <main className={styles.main}>{children}</main>
            <Footer />
        </React.Fragment>
    )
}