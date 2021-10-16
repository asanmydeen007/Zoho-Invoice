import Head from 'next/head'
import Image from 'next/image'
import CentreBanner from '../Components/CentreBanner'
import Header from '../Components/Header'
import State from '../Components/State'
import CustomerLoving from '../Components/CustomerLoving'
import Awards from '../Components/Awards'
import AppInfo from '../Components/AppInfo'
// import Footer from "../Components/Footer"
// import Otherapps from "../Components/Otherapps"
// import Invoicedetails from "../Components/Invoicedetails"

export default function Home() {
  return (
    <>
     <Header/>
    <CentreBanner/>
    <State/>
    <CustomerLoving/>
      <Awards/>
      <AppInfo/>
      {/* <Invoicedetails />
      <Otherapps />
      <Footer /> */}
    </>
  )
}
