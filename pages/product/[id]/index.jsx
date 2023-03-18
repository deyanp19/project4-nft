import * as React from "react";
import {useEffect, useState} from 'react';
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "../../../src/components/link/Link";
import ProductContainer from "../../../src/components/product/ProductContainer";
import Header from "../../../src/components/header/Header";
import Footer from "../../../src/components/footer/Footer";
import dataNtfs from "../../../data/nfts.json";
import { useRouter } from 'next/router';
import Hero from "../../../src/components/hero/Hero";
import Description from "../../../src/components/description/Description";
import ExploreTitle from "../../../src/components/explore/ExploreTitle";
import ExploreFilters from "../../../src/components/explore/ExploreFilters";




export default function Product() {
  const router = useRouter();
  const currentPathname = router.query.id;
 
    let url=process.env.apiUrl;

    const [product,setProduct]=useState('');

    async function getProduct(currentPathname){
      return await (await fetch(url+`/nfts/${currentPathname}`)).json();
    }

    async function resolve(callback,id) {
      let resolvedData = await callback(id);
      console.log( resolvedData );

      switch (true) {
        case callback.name=='getProduct':
          setProduct(resolvedData);
          break;
      
        default:
          break;
      }
    }

    useEffect(()=>{
      if (router.isReady) {
        try {
          resolve(getProduct,currentPathname)
          
        } catch (error) {
          res.status(500).json({error:"rima bima data wrong"})
        }
      }
    },[router]);

  return (
    <div>
    <Container >
      <Header />
   
       <ProductContainer {...product} />  
       
      <Footer />
    </Container>
      </div>
  );
}
