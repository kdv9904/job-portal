import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer"
]

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);

    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % category.length);
        }, 2000);
        return () => clearInterval(intervalId);
    }, [currentIndex, category.length]);

    return (
        <div>
            <div className="flex justify-center mb-20">
                <Button onClick={()=>searchJobHandler(category[currentIndex])} variant="outline" className="rounded-full mr-4">{category[currentIndex]}</Button>
                <Button onClick={()=>searchJobHandler(category[(currentIndex + 1) % category.length])} variant="outline" className="rounded-full">{category[(currentIndex + 1) % category.length]}</Button>
            </div>
        </div>
    )
}

export default CategoryCarousel