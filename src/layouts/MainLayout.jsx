import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function MainLayout({ children }) {
    return (
        <div className="layout">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

export default MainLayout;
