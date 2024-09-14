import AboutMeal from '@/components/home/AboutMeal';
import React from 'react';
import { getServerSession } from "next-auth/next"
import { authOptions } from '../api/auth/[...nextauth]/route';

const AboutPage = async () => {
    const session = await getServerSession(authOptions)

    
    console.log({session})
    return (
        <div>
            <h3 className='text-center py-3 font-bold text-2xl'>Chose your Breakfast item:......</h3>
            <AboutMeal/>
        </div>
    );
};

export default AboutPage;