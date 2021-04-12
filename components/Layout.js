import {useContext, useEffect} from 'react';
import NextHead from 'next/head';
import DarkIcon from "./DarkIcon";
import Navbar from './Navbar';
import Footer from "./Footer";
import Context from '../Context/Context';

function Layout({children}){

    const [context, setContext] = useContext(Context);

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if(theme){
            setContext({...context, theme: theme})
        }
    }, [])

    return (
        <div id="#root-div">
            <NextHead>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=McLaren&family=Poppins&display=swap" rel="stylesheet" />
                <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
                <link rel="manifest" href="/icons/site.webmanifest" />
                <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
                <link rel="shortcut icon" href="/icons/favicon.ico" />
                <meta name="apple-mobile-web-app-title" content="Chirag Jain" />
                <meta name="application-name" content="Chirag Jain" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="msapplication-config" content="/browserconfig.xml" />
                <meta name="theme-color" content="#ffffff" />
                <meta name="description" content="I am in first year B.E CSE at Chitkara University, Punjab. I know Python, Java and MERN Stack. I create awesome Websites and Web Apps. If you are looking for a partner for any project based on this, the feel free to contact me."/>
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="chirag, Chirag, CHIRAG, chirag jain, Chirag Jain, CHIRAG JAIN, chirag_jain, CHIRAG_JAIN, Chirag_Jain, Coder Chirag, coder chirag, coder_chirag_jain, CODER CHIRAG JAIN, coder-chirag-jain, CODER-CHIRAG-JAIN, chirag-jain, CODER, coder, chirag-jain, coder-jain, chiragjain, ChiragJain, coderchiragjain, coderjain" />
            </NextHead>
            <DarkIcon />
            <Navbar />
            {children}
            <Footer />
        </div> 
    );
}

export default Layout;