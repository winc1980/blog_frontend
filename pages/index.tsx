import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    router.push('/1')
  }, [])

  const router = useRouter()

  return <></>
}
