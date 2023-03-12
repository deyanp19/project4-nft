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
import ActivityFilters from "../../src/components/activity/ActivityFilters";
import dataActivityFilters from "../../data/filtersActivity.json";
import ExploreTitle from "../../src/components/explore/ExploreTitle";
export default function About() {

    const [activity,setActivity] =useState([]);
    const [filters, setFilters] = useState([]);

    useEffect(()=>{
        setActivity(dataActivity);
        setFilters(dataActivityFilters)
    },[]);
    // console.log(activity);
    console.log(filters);

  return (
    <div>

      <Header/>
      

        <Hero text={"Activity"}/>
        {filters && <ActivityFilters filters={filters}/>}
        {activity && <ActivityList items={activity} />}
        
        <Footer />

    </div>
    
  );
}

