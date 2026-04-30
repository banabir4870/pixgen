import React from 'react';
import PhotoCard from './PhotoCard';

const TopGenerations = async () => {
    const res = await fetch('https://pixgen-ebon.vercel.app/data.json');
    const data = await res.json();
    const topPhotos = data.slice(0, 8)
    console.log(topPhotos)
    return (
        <div className='my-6'>
            <h1 className='text-center text-3xl font-semibold'>Top Image Generations</h1>
            <div className='grid grid-cols-4 gap-6 my-4'>
                {
                    topPhotos.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
            </div>
        </div>
    );
};

export default TopGenerations;