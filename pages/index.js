import {useContext} from 'react';
import Layout from '../components/Layout';
import IntroHead from "../components/IntroHead";
import NextHead from 'next/head';
import IntroText from "../components/IntroText";
import AvatarImg from "../components/AvatarImg";
import Context from '../Context/Context';

const Home = () => {

    const [context, setContext] = useContext(Context);

    return (
        <Layout>
            <style jsx global>{`
                body{
                    background-color: ${context.theme === 'dark' && 'rgb(13, 17, 23)'};
                }
                .menu-wrap .menu>div{
                    background-color: ${context.theme === 'dark' && 'var(--btn-bg-color)'};
                }
                body, p, button, .social-icons a .icon, .menu-wrap .menu>div>div>ul>li>a, .nav-list li a{
                    color: ${context.theme === 'dark' && 'var(--dark-theme-green)'};
                }
                .menu-wrap .hamburger>div{
                    background-color: ${context.theme === 'dark' && 'var(--dark-theme-green)'};
                }
                #dark-icon{
                    color: ${context.theme === 'dark' && '#fff'};
                    opacity: 1;
                }
                #dark-icon:hover{
                    transform: ${context.theme === 'dark' && 'rotate(100deg)'};
                }
                button:hover{
                    background-color: ${context.theme === 'dark' && 'var(--dark-theme-green)'};
                    color: ${context.theme === 'dark' && 'var(--btn-bg-color)'};
                }
            `}</style>
            <NextHead>
                <title>Chirag Jain</title>
            </NextHead>
            <div className="main">
                <IntroHead />
                <AvatarImg />
                <IntroText />
            </div>
        </Layout>
    );
}
 
export default Home;