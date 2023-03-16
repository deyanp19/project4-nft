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

  async function getProfile(id){
      console.log(url+`/users/${id}`)
    return await (await fetch(url+`/users/${id}`)).json();
  }

  async function resolve(callback,id) {
    let {user,filters} = await callback(id);
    setProfile(user);
    setProfileFilters(filters)
  }

  let router=useRouter();
  const id = router.query.id;
  console.log(id);

    useEffect(()=>{
        resolve(getProfile,id);
    },[router]);

    return (
        <div>
        <Container >
          <Header />
         
             <ProfileHero />
            <ProfileUser/>
           
            <ProfileCollection user={profile} filters={profileFilters}/>  
           
          <Footer />
        </Container>
          </div>
    );
}