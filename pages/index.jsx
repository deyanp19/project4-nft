import { Container } from "@mui/material";
import Auctions from "../src/components/auctions/Auctions";

import TopCollectors from "../src/components/collectors/TopCollectors";

import Featured from "../src/components/featured/Featured";
import Footer from "../src/components/footer/Footer";
import Header from "../src/components/header/Header";
import How from "../src/components/how/How";
import Trending from "../src/components/trending/Trending";
 
 // importing json files according to documentation  https://vercel.com/guides/loading-static-file-nextjs-api-route

 import dataActivity from '../data/activity.json';
 import dataFeatured from '../data/featured.json';
 import dataFiltersActivity from '../data/filtersActivity.json';
 import dataFiltersExplore from '../data/filtersExplore.json';
 import dataFiltersProfile from '../data/filtersProfile.json';
 import dataNfts from '../data/nfts.json';
 import dataProfile from '../data/profile.json';
 import dataTrending from '../data/trending.json';
 import dataUsers from '../data/users.json';
import { useEffect, useState } from "react";
import ProductImage from "../src/components/product/ProductImage";
 
export default function Index() {

  const [featuredCards, setFeaturedCards]=useState([]);
  const [trending,setTrending]=useState([]);
  const [auctions,setAuctions]=useState([]);
  const [dataProfile,setTopProfile] = useState([]);
 
  useEffect(()=>{
    setFeaturedCards(dataFeatured);
    setTrending(dataTrending);
    setAuctions(dataNfts);
    
    setTopProfile(dataProfile)
  },[])

  return (
    <div>

  <Container >
    <Header />
   <ProductImage url='/images/nft.jpg' />
    <Footer />
  
  </Container>
    </div>
  );
}
