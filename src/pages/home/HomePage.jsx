import React from "react";
import HeroSection from "../../components/heroSection/HeroSection";
import Category from "../../components/category/Category";
// import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";
import Layout from "../../components/layout/Layout";
import Testimonial from "../../components/testimonial/Testimonial";

import Gemini from "../gemini/Gemini";
import Message from "../message/Message";

import GovScheme from "../govscheme/GovScheme";
import Skills from "../skills/Skills";

const HomePage = () => {
  

  return (
    <div>
      <Layout>
    
      
        <HeroSection />
       
        
        <Gemini />
        
        <Category />
        
        
        <Message />

        <GovScheme />

        <Skills />

        {/* <Testimonial /> */}
      </Layout>
    </div>
  );
};

export default HomePage;
