import NextHead from 'next/head';
import {useContext} from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import Context from '../Context/Context';

const Contact = () => {

    const [context, setContext] = useContext(Context);

    function success(){
        let name = document.getElementById('name').value;  
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('msg').value = '';
        setTimeout(() => alert(`Thanks ${name} for contacting me.\n    I have got your message and I will reply you very soon`), 500);
    }
    function failure(){
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('msg').value = '';
        setTimeout(() => alert(`Message sending failed\n    Looks like something is wrong. Please try again later`), 500);
    }

    function postData(e){
        e.preventDefault();
        fetch('/api/contact', 
            {
                method: 'post',
                credentials: "same-origin",
                headers: {
                "Content-Type": "application/json",
                }, 
                body: JSON.stringify({
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    msg: document.getElementById('msg').value
                })
            }
        ).then(res => res.status === 200 ? success() : failure());
    }

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
                input, textarea{
                    background-color: ${context.theme === 'dark' && '#fff'};
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
            `}</style>
            <NextHead>
                <title>Chirag Jain | Contact</title>
            </NextHead>
            <div className="contact-main">
                <div className="contact">
                    <h1 id="intro-head" className="fadeInLeft" style={{fontSize: "3.5rem", fontFamily: 'Poppins', marginBottom: "5px"}}>Let's Get In Touch</h1>
                    <p>If you want to get connected with me for some projects, feel free to fill up this form.</p>
                    <div className="contact-form">
                    <form >
                        <label htmlFor="name" >Name</label>
                        <input type="text" name="name" id="name" required />
                        <label htmlFor="email" >Email Address</label>
                        <input type="email" name="email" id="email" required />
                        <label htmlFor="msg" >Your Message</label>
                        <textarea rows="5" name="msg" id="msg" required />
                        <button onClick={(e) => postData(e)}>Send Message</button>
                    </form>
                    </div>
                </div>
                <div className="contact-img">
                    <Image src="/images/contact.png" height={800} width={800} layout="responsive" alt="contact-img"/>
                </div>
            </div>
        </Layout>
    );
}
 
export default Contact;