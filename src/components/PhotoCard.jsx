import { Badge, Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';

const PhotoCard = ({ photo }) => {
    return (
        <Card className='border'>
            <div className='relative'>
                <Image className='h-50 object-cover rounded-2xl' src={photo.imageUrl} alt={photo.title} width={400} height={400}></Image>
                <Chip className='absolute top-1 right-1' size='sm'>{photo.category}</Chip>
            </div>
            <div>
                <h1>{photo.title}</h1>
            </div>
            <div className='flex items-center gap-5'>
                <p className='flex items-center gap-2'><FaHeart /> {photo.likes}</p>
                <Separator orientation='vertical'></Separator>
                <p className='flex items-center gap-2'><MdOutlineFileDownload className='text-xl' /> {photo.downloads}</p>
            </div>
            <Button className='w-full' variant="outline">View</Button>
        </Card>
    );
};

export default PhotoCard;