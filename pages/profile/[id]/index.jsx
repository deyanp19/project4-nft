import Header from "../../../src/components/header/Header";
import ProfileHero from "../../../src/components/profile/ProfileHero";
import Footer from "../../../src/components/footer/Footer";
import { Container } from "@mui/material";
import ProfileUser from "../../../src/components/profile/ProfileUser";
import ProfileCollection from "../../../src/components/profile/ProfileCollection";
import dataProfile from '../../../data/profile.json';
import { useEffect, useState } from "react";
import ActivityFilters from "../../../src/components/activity/ActivityFilters";
import ActivityListItem from "../../../src/components/activity/ActivityListItem";
import ActivityList from "../../../src/components/activity/ActivityList";
import { useRouter } from "next/router";
 


export default function Profile() {
  let url = process.env.apiUrl;
  const [profile, setProfile]=useState('');
  const [profileFilters,setProfileFilters] = useState('');

  const [filtersPriceVal,setFiltersPriceVal] =useState("");
  const [filtersSort,setFiltersSort] = useState("");

  async function getProfile(id,price,sort){
      console.log(url+`/users/${id}`)

    return await (await fetch(url+`/users/${id}?price=${price}&sort=${sort}`)).json();
  }

  async function resolve(callback,id,price,sort) {
    let {user,filters} = await callback(id,price,sort);
    setProfile(user);
    setProfileFilters(filters)
  }

  let router=useRouter();
  let id=router.query.id;
  console.log(id);

  const handlePriceValue=(e)=>{
    console.log(e.target.value)
    setFiltersPriceVal(e.target.value);
  }

  const handleSortValue=(e)=>{
    console.log(e.target.value)
    setFiltersSort(e.target.value)
  }

  // useEffect(()=>{
  
  //   if (filtersPriceVal&&filtersSort) {
  //     return resolve(getProfile,id,filtersPriceVal,filtersSort);
  //   }
  //   if (filtersPriceVal) {
      
  //     resolve(getProfile,id,filtersPriceVal,filtersSort)
  //   }
  //   if (filtersSort) {
      
  //     resolve(getProfile,id,filtersPriceVal,filtersSort)
  //   }
  // },[filtersPriceVal,filtersSort])

    useEffect(()=>{
        resolve(getProfile,id);
    },[router]);

    useEffect(() => {
      if (filtersPriceVal !== "" && filtersSort !== "") {
        resolve(getProfile, id, filtersPriceVal, filtersSort);
      } else {
        resolve(getProfile, id);
      }
    }, [id, filtersPriceVal, filtersSort, router]);
    

    return (
        <div>
        <Container >
          <Header />
         
             <ProfileHero />
            <ProfileUser/>
           
            <ProfileCollection user={profile} filters={profileFilters} fooSort={handleSortValue} fooPrice={handlePriceValue}/>  
           
          <Footer />
        </Container>
          </div>
    );
}