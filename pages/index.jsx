import { Container } from "@mui/material";
import Auctions from "../src/components/auctions/Auctions";
import Card from "../src/components/card/Card";
 import Example from '../src/components/example/Example'
import Footer from "../src/components/footer/Footer";
import Header from "../src/components/header/Header";
import Trending from "../src/components/trending/Trending";
import User from "../src/components/user/User";
 
 
export default function Index() {
  return (
    <div>

  <Container >
    <Header >
    </Header>
    <Auctions />
    <Footer />
  
  </Container>
    </div>
  );
}
