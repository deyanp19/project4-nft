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
import ProductInfoTitle from "../src/components/product/ProductInfoTitle";
import ProductionInfoLikes from "../src/components/product/ProductInfoLikes";
import ProductInfoCreator from '../src/components/product/ProductInfoCreator';
import ProductInfoStatus from "../src/components/product/ProductInfoStatus";
import ProductInfoTimer from "../src/components/product/ProductInfoTimer";
import ProductInfo from "../src/components/product/ProductInfo";
import ProductTabs from "../src/components/product/ProductTabs";
import ProductActions from "../src/components/product/ProductActions";
import ProductContainer from "../src/components/product/ProductContainer";
 
export default function Index() {



  async function getTrendingData() {
    return await (await fetch('https://project-4-api.boom.dev/trending')).json()
  }

  async function getAuctionData(){
    return await (await fetch('https://project-4-api.boom.dev/live-auctions')).json()
  }
  async function getTopCollectorData() {
    return await (await fetch('https://project-4-api.boom.dev/top-collectors')).json();
  }
  async function getFeaturedPics() {
    let url='https://project-4-api.boom.dev/featured'
    let data=await fetch(url);
    return  await data.json();
  }

  async function getAction(){
    return fetch('https://project-4-api.boom.dev/live-actions')
  }

  const [featuredCards, setFeaturedCards]=useState([]);
  const [trending,setTrending]=useState([]);
  const [auctions,setAuctions]=useState([]);
  const [topCollectors,setTopCollectors] = useState([]);

  async function resolve(callback) {
    let resolvedData =await callback();
    console.log(resolvedData,callback.name);
    switch (true) {
      case callback.name=='getTrendingData':
        const {nfts}=resolvedData;
        setTrending(nfts);
        
        break;
      case callback.name=='getAuctionData':
        setAuctions(resolvedData)
      break;
      case callback.name==='getFeaturedPics':
        setFeaturedCards(resolvedData)
      break;
      case callback.name==='getTopCollectorData':
        setTopCollectors(resolvedData);
      break;

      case callback.name==='getAction':
        setAction(resolvedData);
      break;
      default:
        break;
    }
  }
 
  useEffect(()=>{

    resolve(getTrendingData);
    resolve(getAuctionData);
    resolve(getFeaturedPics);
    resolve(getTopCollectorData);

  },[])

  return (
    <div>
  <Container >
    <Header />
   <Featured items={featuredCards}/>
    <Trending cards={trending} />
    <TopCollectors collectors={topCollectors} />
    <How />
    <Auctions cards={auctions}/>
 
    <Footer />
  
  </Container>
    </div>
  );
}
