import { createContext, useState } from 'react'
import LoadingComponent from '../components/loadingComponent'

export const LoadingContext = createContext({
  loading: false,
})
export function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false)

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {
        loading ?
          <LoadingComponent />
        :
        children
      }
    </LoadingContext.Provider>
  )
}