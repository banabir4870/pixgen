import PhotoCard from '@/components/PhotoCard';
import { Button } from '@heroui/react';
import React from 'react';

const AllPhotosPage = async () => {
    const res = await fetch('https://pixgen-ebon.vercel.app/data.json');
    const data = await res.json();

    const resCategory = await fetch('https://pixgen-ebon.vercel.app/category.json')
    const dataCategory = await resCategory.json()
    console.log(dataCategory);
    return (
        <div className='my-6 space-y-4'>
            <h1 className='text-3xl font-semibold'>All Photos</h1>
            <div className='flex gap-4'>
                {
                    dataCategory.map(category => <Button key={category.id} variant="outline">{category.name}</Button>)
                }
            </div>
            <div className='grid grid-cols-4 gap-6 my-4'>
                {
                    data.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
            </div>
        </div>
    );
};

export default AllPhotosPage;