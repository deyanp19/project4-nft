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

  let url=process.env.apiUrl

  async function getTrendingData(sort) {
    if (sort) {
      return await (await fetch(url+'/trending'+`?sort=${sort}`)).json()
              }
    return await (await fetch(url+'/trending')).json();
  }
 

  async function getAuctionData(){
    return await (await fetch(url+'/live-auctions')).json()
  }
  async function getTopCollectorData(sort) {
    if (sort) {
      return await (await fetch(url+'/top-collectors'+`?sort=${sort}`)).json();
    }
    return await (await fetch(url+'/top-collectors')).json();
  }
  async function getFeaturedPics() {
    let data=await fetch(url+'/featured');
    return  await data.json();
  }

  async function getAction(sort){
    if (sort) {
      fetch(url+'/live-actions'+`?sort=${sort}`)
    }
    return fetch(url+'/live-actions')
  }

  const [featuredCards, setFeaturedCards]=useState([]);
  const [trending,setTrending]=useState([]);
  const [trendingSortVal,setTrendingSortVal]=useState("");
  const [auctions,setAuctions]=useState([]);
  const [auctionVal,setAuctionVal] =useState([]);
  const [topCollectors,setTopCollectors] = useState([]);
  const [topCollectorsVal,setTopCollectorsVal] = useState("");

  async function resolve(callback,sort) {
    let resolvedData =await callback(sort);
    console.log(resolvedData,callback.name);
    switch (true) {
      case callback.name=='getTrendingData':
        setTrending(resolvedData);
        
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
  
  const handleSortTrending=(e)=>{
    console.log(e.target.value)
    setTrendingSortVal(e.target.value);
  }
  const handleSortTopCollectors=(e)=>{
    console.log(e.target.value)

    setTopCollectorsVal(e.target.value)
  }
  useEffect(()=>{
    resolve(getTrendingData,trendingSortVal);
    
  },[trendingSortVal])
  useEffect(()=>{
    resolve(getTopCollectorData,topCollectorsVal)
  },[topCollectorsVal])

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
    <Trending cards={trending} fooSort={handleSortTrending}/>
    <TopCollectors collectors={topCollectors} fooSort={handleSortTopCollectors} />
    <How />
    <Auctions cards={auctions}/>
 
    <Footer />
  
  </Container>
    </div>
  );
}
