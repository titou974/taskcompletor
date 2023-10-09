import Navbar from "../components/navbar";
import styles from "../components/style";
import DisclosureFaq from "../components/disclosurefaq";

const FAQ = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className={`h-screen w-full py-40 max-w-7xl mx-auto ${styles.paddingX}`}>
        <div>
          <DisclosureFaq />
        </div>
      </div>
    </div>
  )
}

export default FAQ;
