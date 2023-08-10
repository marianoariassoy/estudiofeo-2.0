import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Header />
        <Nav />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Layout
