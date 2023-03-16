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
import Card from "../../src/components/card/Card";

export default function About() {
    let url=process.env.apiUrl;

    const [nfts,setNtfs] =useState([])
    const [filters,setFilters] =useState("");
    const [priceVal,setPriceVal ]=useState('');
    const [sortVal,setSortVal]=useState('');

    async function getExplore(price,sort){
      console.log(price == true)
      if (price||sort) {
        
        let query=encodeURIComponent(`/?price=${price}&sort=${sort}`)
        console.log(query);
        return await (await fetch(url+'/explore')).json();
      } else {
        return await (await fetch(url+'/explore')).json();
      }
    }

    async function resolve(callback,price,sort){
      let resolvedData= await callback(price,sort);
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

    const handleChangePrice=(e)=>{
      console.log(e.target.value);
      setPriceVal(e.target.value);
      
    }
    const handleChangeSort=(e)=>{
      console.log(e.target.value);
      setSortVal(e.target.value);
      
    }
    useEffect(()=>{
      resolve(getExplore,priceVal,sortVal)
    },[priceVal,sortVal])

    useEffect(()=>{
    resolve(getExplore)

    },[]);

  return (
    <div >
      <Container maxWidth="x1">
      <Header/>
      <Grid container direction="row" justifyContent="space-between" wrap="nowrap">
        <Grid item><ExploreTitle text={"explore"}/></Grid>
            <Grid item>{filters && (<ExploreFilters filters={filters} fooPrice={handleChangePrice} fooSort={handleChangeSort}/>)}</Grid>
      </Grid>
      {nfts && nfts.map((item)=><Card {...item} title={item.name}></Card>)}
      <Footer />
      </Container>
    </div>
    
  );
}

