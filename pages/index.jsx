import { Container } from "@mui/material";
import Auctions from "../src/components/auctions/Auctions";
import Card from "../src/components/card/Card";
import CollectorsColumn from "../src/components/collectors/CollectorsColumn";
 import Example from '../src/components/example/Example'
import Featured from "../src/components/featured/Featured";
import Footer from "../src/components/footer/Footer";
import Header from "../src/components/header/Header";
import How from "../src/components/how/How";
import Trending from "../src/components/trending/Trending";
import User from "../src/components/user/User";
 
 
export default function Index() {
  return (
    <div>

  <Container >
    <Header >
    </Header>
    <Featured />
    <Trending />
    <CollectorsColumn />
    <How ></How>
    <Auctions />

    <Footer />
  
  </Container>
    </div>
  );
}
