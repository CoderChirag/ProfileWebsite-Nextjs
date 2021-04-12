import Image from 'next/image';

function AvatarImg(){
    return (
        <div className="avatar-img">
            <Image src="/images/avatar-img.jpg" alt="logo" width={250} height={250} layout="responsive" className="avatar-img-component" />
        </div>
    );
}

export default AvatarImg;