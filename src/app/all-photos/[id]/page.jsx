import Image from 'next/image';
import React from 'react';

const PhotoDetailsPage = async ({params}) => {
    const {id} = await params;
    const res = await fetch('https://pixgen-ebon.vercel.app/data.json');
    const data = await res.json();
    const photo = data.find(p => p.id == id)
    return (
        <div>
            <h2>{photo.title}</h2>
            <div>
                <Image src={photo.imageUrl} alt={photo.title} width={300} height={300}></Image>
            </div>
            <p>{photo.prompt}</p>
        </div>
    );
};

export default PhotoDetailsPage;