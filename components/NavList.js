import Link from 'next/link';

function NavList(){
    return (
        <div className="nav-list">
            <ul>
                <li><Link href="/contact"><a>Contact</a></Link></li>
                <li><Link href="/work"><a>Work</a></Link></li>
                <li><Link href="/"><a>Home</a></Link></li>
            </ul>
        </div>
    );
}

export default NavList;