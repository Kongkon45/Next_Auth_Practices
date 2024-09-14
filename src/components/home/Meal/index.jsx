"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const MealComponent = () => {
    const [search, setSearch] = useState("");
    const [error, setError] = useState("");
    const [meals, setMeals] = useState([]);

    console.log(meals)

    

    const loadData = async ()=>{
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        const data = await res.json()
        setMeals(data.meals)
        setError('')
        console.log(data.meals)
        } catch (error) {
            console.log(error)
            setError("Data not found")
        }
    }

    useEffect(()=>{
        loadData()
    },[search])

    const hander = (e)=>{
        // console.log(e.target.value)
        setSearch(e.target.value);
    }


    return (
        <div >
            <div className='w-full flex justify-center '>
            <input onChange={hander} className='py-2 px-2 border-2 border-gray-500 rounded-l-[10px]' type="text" name="meal" id="meal" placeholder='Search Meal....' />
            <button type='submit' className='bg-green-500 text-white py-2 px-4 rounded-r-[10px] '>Search</button>
            </div>
            <div className='grid grid-cols-4 gap-10 p-10'>
                {
                   meals?.length > 0 && !error && meals?.map((meal)=>{
                        return <div key={meal.idMeal}>
                            <Image src={meal.strMealThumb} alt='meal.strMeal' width={300} height={300}/>
                            <h3 className='text-center text-2xl font-bold'>{meal.strArea}</h3>
                            <h3 className='text-center text-2xl font-bold'>{meal.strMeal}</h3>
                        </div>
                    })
                }
                {
                    error && <h3>data no found</h3>
                }
            </div>
            
        </div>
    );
};

export default MealComponent;