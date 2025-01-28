import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import PropTypes from "prop-types"

function MainLayout({ children }) {
    return (
        <div className="layout">
            <Header />
            <main className="container">{children}</main>
            <Footer />
        </div>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default MainLayout
