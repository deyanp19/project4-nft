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
import ExploreFilters from "../../src/components/explore/ExploreFilters";

export default function Activity() {
    let url=process.env.apiUrl;
    const [activity,setActivity] =useState([]);
    const [filters, setFilters] = useState("");
    const [sortVal,setSortVal] =useState("");
    const [typeVal,setTypeVal] = useState("");

    const handleSort=(e)=>{
          setSortVal(e.target.value)
        }
    const handleType=(e)=>{
      setTypeVal(e.target.value);
    }

    async function getActivity(type,sort){
     return await (await fetch(url+'/activities'+`?type=${type}`)).json();
    }

    async function resolve(callback,type,sort){
        let resolvedData= await callback(type,sort);
        if (callback.name=='getActivity') {
          const {activities,filters}=resolvedData;
          setActivity(activities);
          setFilters(filters);
        }
    }

    useEffect(async ()=>{

      if (typeVal&&sortVal) {
        
       return await  resolve(getActivity,typeVal,sortVal);
      }
      if (typeVal) {
       return  await  resolve(getActivity,typeVal,sortVal);
      }
      if (sortVal) {
       return await  resolve(getActivity,typeVal,sortVal);
      }

  },[typeVal,sortVal])

    useEffect(()=>{
      async function getActivity(){
        return await (await fetch(url+'/activities')).json();
       }
   
       async function resolve(callback){
           let resolvedData= await callback();
           if (callback.name=='getActivity') {
             const {activities,filters}=resolvedData;
             setActivity(activities);
             setFilters(filters);
           }
       }
        resolve(getActivity);
       
    },[]);
console.log(filters)
  return (
    <div>
      
      <Header/>
        <Hero text={"Activity"}/>
        

        {filters && <ActivityFilters filters={filters} fooSort={handleSort} fooType={handleType} />}

        
        {activity && <ActivityList items={activity} /> }

       
      <Footer />
      
    </div>
  );
}

