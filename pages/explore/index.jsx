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
    let url=process.env.apiUrl;

    const [nfts,setNtfs] =useState([])
    const [filters,setFilters] =useState("")

    async function getExplore(){
      return await (await fetch(url+'/activities')).json()
    }

    async function resolve(callback){
      let resolvedData= await callback();
      switch (true) {
        case callback.name=='getExplore':
          const {nfts,filters}=resolvedData;
          setFilters(filters);
          setNtfs(nfts);
          break;
          case callback.name=='getExplore':
            setProduct(resolvedData);
            break;
        
        default:
          break;
      }
    }
    useEffect(()=>{
    resolve(getExplore)

    },[]);

  return (
    <div >
      <Container>
      <Header/>
      <Grid container direction="row" justifyContent="space-between" wrap="nowrap">
        <Grid item><ExploreTitle text={"explore"}/></Grid>
        <Grid item>{filters && (<ExploreFilters filters={filters}/>)}</Grid>
      </Grid>
      <Footer />
      </Container>
    </div>
    
  );
}

