import {useState} from 'react';
import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import Context from '../Context/Context';
import "nprogress/nprogress.css";
import dynamic from 'next/dynamic'

const TopProgressBar = dynamic(
  () => {
    return import("../components/TopProgressBar");
  },
  { ssr: false },
);


function MyApp({ Component, pageProps }) {
  
  const contextValue = useState({theme: 'light'});

  return <>
    <TopProgressBar /> 
    <Context.Provider value={contextValue}><Component {...pageProps} /></Context.Provider>
  </>
}

export default MyApp
