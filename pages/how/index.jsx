import * as React from "react";
import {useEffect, useState} from 'react';
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Header from "../../src/components/header/Header";
import Footer from "../../src/components/footer/Footer";
import dataNtfs from "../../data/nfts.json";
import { useRouter } from 'next/router';
import Hero from "../../src/components/hero/Hero";
import Description from "../../src/components/description/Description";
import ProfileHero from "../../src/components/hero/ProfileHero";




export default function How(props) {
    
    const [ntfs,setNtfs]=useState();
    useEffect(()=>{
        setNtfs(dataNtfs)
    },[]);

    const router=useRouter();
    

  return (
    <div>
    <Container >
      <Header />
      <ProfileHero />
        <Hero text='fredrikd+a' />
        <Description text="What are they they are the broken promise and to do is out of reach. Hand oer the candy notes food is so expensive to the Cashier." />
       
      <Footer />
    </Container>
      </div>
  );
}
