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
import dataExploreFilters from "../../data/filtersActivity.json";
import { useEffect, useState } from "react";
import ExploreTitle from "../../src/components/explore/ExploreTitle";
import ExploreFilters from "../../src/components/explore/ExploreFilters";

export default function About() {

    const [activity,setActivity] =useState([])
    const [filters,setFilters] =useState([])

    useEffect(()=>{
        setActivity(dataActivity);
        setFilters(dataExploreFilters)

    },[]);

  return (
    <div >

      <Header/>
    <ExploreTitle text={"explore"}/>
    
    <ExploreFilters filters={filters}/>

        <Footer />

    </div>
    
  );
}

