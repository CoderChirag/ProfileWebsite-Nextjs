import Image from 'next/image'

export default function NotFound(){
    return(
        <div id="not-found">
            <Image src="/images/something-lost.png" height={800} width={800} layout="responsive" alt="something-lost" />
            <h1>Oops, looks like the page is lost.</h1>
            <p>This is not a fault, just an accident that was not intentional.</p>
        </div>
    );
}