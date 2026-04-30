'use client'
import UpdateUserModal from '@/components/UpdateUserModal';
import { authClient, useSession } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import React from 'react';

const ProfilePage = () => {
    const userData = authClient.useSession()
    const user = userData.data.user;
    return (
        <div className='my-6'>
            <Card className='max-w-96 mx-auto items-center border-2'>
                <Avatar>
                    <Avatar.Image alt={user?.name} src={user?.image} referrerPolicy="no-referrer" />
                    <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                </Avatar>
                <h2 className='text-xl font-bold'>{user?.name}</h2>
                <p>{user?.email}</p>
                <UpdateUserModal></UpdateUserModal>
            </Card>
        </div>
    );
};

export default ProfilePage;