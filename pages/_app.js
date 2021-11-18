import Footer from '../layout/Footer'
import Navbar from '../layout/Nav'
import '../styles/style.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
