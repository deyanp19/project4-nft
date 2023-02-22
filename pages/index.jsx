import { Container } from "@mui/material";
import Card from "../src/components/card/Card";
 import Example from '../src/components/example/Example'
import Header from "../src/components/header/Header";
import Trending from "../src/components/trending/Trending";
import User from "../src/components/user/User";
 
 
export default function Index() {
  return (
  <Container >
    <Header >

    </Header>
    <Trending />
  {/* <Example></Example> */}
  </Container>
  );
}
