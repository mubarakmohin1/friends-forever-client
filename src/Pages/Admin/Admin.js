import React from 'react';
import photos4 from '../../Image/photos4.jpg'
import './Admin.css'
 

const Admin = () => {
     
    
    return (
        <div className="hero admin-responsive max-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={photos4} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Mubarak Hosen Mohin</h1>
                    <h2>B.Sc Hons(chemisty),University of chittagong.</h2>
                    <h2>Tutor(HSC) Math,Chemisty,physics,Ict,Zoology</h2>
                    <h2>Full Stack Web Developer,Student of programming hero</h2>
                    <p><a href="https://www.facebook.com/mubarokhusen.mohin/"><u>Facebook Account</u></a></p>
                    <p><a href="https://github.com/mubarakmohin1?tab=repositories"><u>Github Repositories</u></a></p>
                    <p><a href="https://app.netlify.com/teams/mubarakmohin1/sites"><u>My Project</u></a></p>
                    <p><a href="https://www.linkedin.com/in/mobarak-hosen-mohen-b1994023a/"><u>LinkedIn Profile</u></a></p>
                    <h2>Mobile: <b>01853909088, 01726385196</b></h2>

                    <p className="py-6"> Chemistry is essential for meeting our basic needs of food, clothing, shelter,  health, energy, and clean air, water, and soil. Chemical technologies enrich   our quality of life in numerous ways by providing  new solutions to problems in health,  materials, and energy usage..</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Admin;