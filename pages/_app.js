import '../styles/globals.css'
import React, {useEffect} from 'react'
import liff from "@line/liff"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
   const initializeLiff = async () => {
      try {
       await liff.init({ liffId: process.env.YOUR_LIFF_ID })
      } catch (err) {
        console.log("Error initializing LIFF: ", err)
      }
    }
    initializeLiff()
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
