import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "../../src/components/link/Link";
import Header from "../../src/components/header/Header";
import Footer from "../../src/components/footer/Footer";
import Hero from "../../src/components/hero/Hero"
import ActivityList from "../../src/components/activity/ActivityList";
import dataActivity from "../../data/activity.json"
import { useEffect, useState } from "react";

export default function About() {

    const [activity,setActivity] =useState([])

    useEffect(()=>{
        setActivity(dataActivity);
    },[]);

  return (
    <div>

      <Header/>
        <Hero />
        <ActivityList items={activity} />
        
        <Footer />

    </div>
    
  );
}

