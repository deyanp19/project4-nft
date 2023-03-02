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




export default function Product(props) {
    console.log(props);
    const [ntfs,setNtfs]=useState();
    useEffect(()=>{
        setNtfs(dataNtfs)
    },[]);

    const router=useRouter();
    

  return (
    <div>
    <Container >
      <Header />
     
      <ProductContainer />
      <Hero text='opals'/>
    
      <Footer />
    </Container>
      </div>
  );
}
