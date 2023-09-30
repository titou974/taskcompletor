import "../css/tailwind.css";
import "../css/global.css";
import { m, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { LazyMotion, domAnimation } from "framer-motion";


function MyApp({ Component, pageProps }) {
  const pathName = useRouter().pathname
  const router = useRouter()
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode='wait'>
        {
          pathName !== "/mypdf" && (
            <m.div key={pathName} className="bg-primary">
              <Component {...pageProps} />
              <m.div
                className="slide-in"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{duration: 2, ease: [0.22, 1, 0.36, 1]}}
              ></m.div>
              <m.div
                className="slide-out"
                initial={{ scaleY: 1}}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}>

              </m.div>
            </m.div>
          )
        }
        {
          pathName === "/mypdf" && (
            <div key={pathName}>
              <Component {...pageProps} />
            </div>
          )
        }
      </AnimatePresence>
    </LazyMotion>
  );
}

export default MyApp;
