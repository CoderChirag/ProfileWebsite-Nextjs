import { useContext } from 'react';
import NextHead from 'next/head';
import Layout from '../components/Layout';
import WorkHead from "../components/WorkHead";
import Card from "../components/Card";
import Context from '../Context/Context';
 
export default function Work(props){

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
                .social-icons a .icon{
                    color: ${context.theme === 'dark' && 'var(--dark-theme-green)'};
                }
                .work-hero-card{
                  background-color: ${context.theme === 'dark' && 'var(--btn-bg-color)'};
                }
            `}</style>
            <NextHead>
                <title>Chirag Jain | Works</title>
            </NextHead>
            <div className="main">
                <WorkHead />
                <p>Take a look at the Websites and Web Apps I have made.</p>
                <Card data={props.data}/>
            </div> 
        </Layout>
    );
}

export async function getServerSideProps() {
   const res = await fetch(`https://api.npoint.io/476f4e001624d79d6683`)
   const data = await res.json()
   return { props: { ...data} }
}