import Link from 'next/link';
import NavLogo from "./NavLogo";
import NavList from "./NavList";

function Navbar(){

    function uncheck(){
        document.getElementsByClassName("toggler")[0].checked = false;
    }

    return (
        <div>
            <div className="nav">
                <NavLogo />
                <NavList />
            </div>
            <div className="menu-wrap">
                <input type="checkbox" className="toggler" />
                <div className="hamburger">
                    <div></div>
                </div>
                <div className="menu">
                    <div>
                        <div>
                            <ul>
                                <li onClick={uncheck}><Link href="/"><a>Home</a></Link></li>
                                <li onClick={uncheck}><Link href="/work"><a>Work</a></Link></li>
                                <li onClick={uncheck}><Link href="/contact"><a>Contact</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
