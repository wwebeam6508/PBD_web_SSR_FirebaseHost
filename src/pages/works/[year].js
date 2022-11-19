
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../styles/works.module.css'
import ShuffleImage from '../../components/shuffleImage'
import { getWorksData, getWorkYearsData } from '../../fetchData/getWorksData'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
 
export default function Works(props) {
    const router = useRouter();

    useEffect(()=>{
        async function fetchData() {
            
            const yeardata = await getWorkYearsData()
            if(yeardata.indexOf(Number(router.query.year)) >= 0){
                router.replace('/works/'+router.query.year)
            } else {
                router.replace('/works/'+yeardata[0])
            }
        }
        fetchData()
    },[])
    return (
        <>
            <Head>
                <link rel="canonical" href='https://pbdsupply.com/works' />
            </Head>
            <div className={styles.realbody} >
                <div className={`${styles.workBlock} position-relative`}>
                    <div className={styles.yearTitle}><h4><strong>พ.ศ.{Number(router.query.year) + 543}</strong></h4></div>
                    <ul className="list-group list-group-horizontal-md list-group-numbered ">
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
                    <div className={`${styles.paginationBttns} position-absolute bottom-0 start-50 translate-middle-x`} aria-label="Page navigation">
                        <ul className="pagination justify-content-center">
                            {
                                props.years && props.years.map((year, key)=>{
                                    return(
                                        <li key={key} className="page-item"><a onClick={async ()=>{ getWorksByYear(year) }} className={`page-link ${Number(router.query.year) === year ? 'active' : ''}`} href="#">พ.ศ.{year+543}</a></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )

    async function getWorksByYear(year){
        router.replace('/works/'+year)
    }
}

export async function getServerSideProps(context) {
    console.log(context.query.year)
    const res = await getWorksData(Number(context.query.year))
    const data = res
    return { props: { works: data.works, years:data.pagination } }
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
