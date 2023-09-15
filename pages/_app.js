import "../css/tailwind.css";
import Navbar from "../components/navbar";


function MyApp({ Component, pageProps }) {
  return (
      <div className='bg-primary'>
        <Component {...pageProps} />
      </div>
  );
}

export default MyApp;
