import Navbar from "../components/navbar";
import styles from "../components/style";
import DisclosureFaq from "../components/disclosurefaq";
import Footer from "../components/footer";

const FAQ = () => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div className={`w-full h-full py-40 md: max-w-7xl mx-auto ${styles.paddingX}`}>
        <div className="h-screen">
          <DisclosureFaq />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default FAQ;
