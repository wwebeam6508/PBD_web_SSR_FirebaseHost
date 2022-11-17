
import 'bootstrap/dist/css/bootstrap.css'
import Layout from '../components/layout'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
export default function Index() {
    const router = useRouter()
    useEffect(() => {
      if(router.pathname == '/' ){
        router.push('/home')
      }
    })
    return (
        <>
        </>
    )
}

Index.getLayout = function getLayout(page) {
    return (
        <>
            {page}
        </>
    )
  }
