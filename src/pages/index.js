


import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

export default function Index() {
  const router = useRouter()
  useEffect(() => {
    if (router.pathname == '/') {
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
