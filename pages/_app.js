import "../css/tailwind.css";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";


function MyApp({ Component, pageProps }) {
  const pathName = useRouter().pathname
  const router = useRouter()
  return (
    <AnimatePresence mode='wait'>
      {
        pathName !== "/mypdf" && (
          <motion.div key={router.route} initial="initialState" animate="animatedState" exit="exitState" transition={{ duration: 0.75 }} variants={{ initialState: { opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }, animatedState: { opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }, exitState: {clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"}}} className="relative bg-primary">
            <Component {...pageProps} />
          </motion.div>
        )
      }
      {
        pathName === "/mypdf" && (
          <div key={router.route}>
            <Component {...pageProps} />
          </div>
        )
      }
    </AnimatePresence>
  );
}

export default MyApp;
