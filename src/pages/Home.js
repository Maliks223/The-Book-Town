import React, { Component } from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import book1 from "../assets/book-1.png"
import book2 from "../assets/book-2.png"
import book3 from "../assets/book-5.png"
const Home = () => {
    return (  
        <div>
            <Banner/>
            <div className='card-flex'>
                <Card title='Card Title' 
                imageUrl = {book1}
                body = 'Author Name'
                />
                <Card title='Card Title' 
                imageUrl = {book2} 
                body = 'Author Name'
                />
                <Card title='Card Title' 
                imageUrl = {book3}
                body = 'Author Name'
                />
                
            </div>
            <a className='viewAll-btn'>View All</a>
            
            
        </div>
    );
}
 
export default Home;