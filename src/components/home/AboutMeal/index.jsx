"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";

const AboutMeal = () => {
    const [search, setSearch] = useState('');
    const [error, setError] = useState("");
    const [meals, setMeals] = useState([]);


    const mealData = async ()=>{
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`) 
        const data = await res.json()
        
        setMeals(data.meals)
        setError('')
        } catch (error) {
            setError(error)
        }
    }

    useEffect(()=>{
        mealData()
    },[search])
  return (
    <>
      <div className="flex justify-center py-3">
        <input onChange={(e)=> setSearch(e.target.value)}
          className="py-2 px-4 rounded-l-[10px] border "
          type="text"
          name="meal"
          id="meal"
          placeholder="Serarch Meal...."
        />
        <button type="submit" className="py-2 px-4 rounded-r-[10px] bg-blue-500 text-white">
          Search
        </button>
      </div>

      <div className="grid grid-cols-4 gap-10 p-6">
        {
          meals?.length > 0 && !error &&  meals?.map((meal)=>{
                return <div key={meal.idMeal} className="border rounded-[12px] shadow-lg">
                    <Image src={meal?.strMealThumb} alt={meal?.idMeal} width={200} height={200} className="w-full h-auto"/>
                    <h3 className="text-xl font-semibold text-center py-2"><span className="text-2xl font-bold">Name : </span>{meal.strMeal}</h3>
                    <p className="text-xl font-semibold text-center pb-2"> <span className="text-2xl font-bold">Price : </span> $ {meal.idMeal}</p>
                </div>
            })
        }
        {
            error && <p className="text-center font-bold text-2xl py-3">Data Not Found</p>
        }
      </div>
    </>
  );
};

export default AboutMeal;
