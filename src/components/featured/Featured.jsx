import { Container, ImageList, ImageListItem } from '@mui/material';
import styles from './Featured.module.scss';
import {useRouter} from 'next/router';
import { useEffect,useState } from 'react';

async function getFeaturedPics() {
  
  let url='https://project-4-api.boom.dev/featured'
  let data=await fetch(url);
  return  await data.json();
}

export default  function Featured({items=[]}) {

    const [featuredCards,setFeatured] =useState(null)
 
    const router = useRouter();
    const currentPathname = router.pathname;
    
    async function resolve(){
      const {nfts}=await getFeaturedPics();
      setFeatured(nfts);
    } 

    useEffect(()=>{
      resolve(); 
    },[]);
    return (
        <div>
            <Container >
                <ImageList 
                 sx={{ width: 500, height: 450 }}
                 variant="quilted"
                 cols={4}
                 rowHeight={121}
                >

                {featuredCards && featuredCards.map((item,i)=><ImageListItem 
                key={item.image+i}
                cols={item.cols || 1} rows={item.rows || 1}
                 
                >
                    <img alt={item.title} src={item.image}
                    onClick={()=> router.push({pathname:`/product/${item.id}`})}  
                    loading='lazy'
                    />
                </ImageListItem>)}

                </ImageList>
            </Container>
        </div>
    );
}