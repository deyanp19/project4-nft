import { Container, ImageList, ImageListItem } from '@mui/material';
import styles from './Featured.module.scss';
import {useRouter} from 'next/router';


const images=[
    {
      image:
        "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500&h=500",
      title: "Breakfast",
      rows: 2,
      cols: 3,
      href: "/about",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&h=500",
      title: "Burger",
      href: "/about",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=500&h=500",
      title: "Camera",
      href: "/about",
    }];
export default function Featured({items=images}) {

    const router = useRouter();
    const currentPathname = router.pathname;
    const handleClick=(href,e)=>{
         
        router.push(href)
    }
    return (
        <div>
            <Container >
                <ImageList 
                 sx={{ width: 500, height: 450 }}
                 variant="quilted"
                 cols={4}
                 rowHeight={121}
                >

                {items.map((item,i)=><ImageListItem 
                key={item.image+i}
                cols={item.cols || 1} rows={item.rows || 1}
                 
                >
                    <img alt={item.title} src={item.image}
                    onClick={()=>router.push(item.href)}  
                    loading='lazy'
                    />
                </ImageListItem>)}

                </ImageList>
            </Container>
        </div>
    );
}