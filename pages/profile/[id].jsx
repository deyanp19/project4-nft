import Header from "../../src/components/header/Header";
import ProfileHero from "../../src/components/profile/ProfileHero";
import Footer from "../../src/components/footer/Footer";
import { Container } from "@mui/material";
import ProfileUser from "../../src/components/profile/ProfileUser";
import ProfileCollection from "../../src/components/profile/ProfileCollection";
import dataProfile from '../../data/profile.json';
import { useEffect, useState } from "react";
import Activity from "../../src/components/activity/Activity";


export default function Profile() {

    const [profile, setProfile]=useState('');

    useEffect(()=>{
        setProfile(dataProfile);
    },[]);

    return (
        <div>
        <Container >
          <Header />
         
            <ProfileHero />
            <ProfileUser/>
            <Activity />
            <ProfileCollection />
            
           
          <Footer />
        </Container>
          </div>
    );
}