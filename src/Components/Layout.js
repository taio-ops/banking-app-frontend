import { Outlet } from "react-router-dom";
import Header from '../Components/Header';
import Footer from '../Components/Footer'

const Layout = () => {
  return (
    <main className="App">
      <Header />
        <Outlet />
      <Footer />
    </main>
  )
}

export default Layout
