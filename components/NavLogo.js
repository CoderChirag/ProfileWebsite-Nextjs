import Link from 'next/link';
import Image from 'next/image';
// import Image from 'next/image'

function NavLogo(){
    return (
        <div>
            <Link href="/"><a className="nav-logo-a"><Image src="/images/logo.png" height={500} width={500} layout="responsive" className="nav-logo" alt="logo" /></a></Link>
        </div>
    );
}

export default NavLogo;