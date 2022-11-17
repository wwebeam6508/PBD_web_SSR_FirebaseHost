
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/works.module.css'
import ShuffleImage from '../components/shuffleImage'
import { getWorksData, getWorkYearsData } from '../fetchData/getWorksData'
import { useEffect, useState } from 'react'

export default function Works(props) {

    const [ selectYear, setSelectYear] = useState()

    useEffect(()=>{
        async function fetchData() {
            const yeardata = await getWorkYearsData()
            setSelectYear(yeardata[0])
        }
        fetchData()
    },[])
    return (
        <>
            <Head>
                <link rel="canonical" href='https://pbdsupply.com/works' />
            </Head>
            <div className={styles.realbody} >
                <div className={styles.workBlock}>
                    <div className={styles.yearTitle}><h4><strong>พ.ศ.{selectYear + 543}</strong></h4></div>
                    <ul className="list-group list-group-horizontal-sm">
                        {
                            props.works && props.works.map((work, key)=>{
                                return(
                                    work.isClickable ? 
                                    <a href='#' key={key} className="list-group-item">
                                            {work.title} วันที่ {work.date}
                                    </a>
                                    :
                                    <li key={key} className="list-group-item">
                                            {work.title} วันที่ {work.date}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const yeardata = await getWorkYearsData()
    const res = await getWorksData(yeardata[0])
    const data = res
    return { props: { works: data, years:yeardata } }
}

Works.getLayout = function getLayout(page) {
    return (
        <>
            <Layout>
                {page}
            </Layout>
        </>
    )
  }
