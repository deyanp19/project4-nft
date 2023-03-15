import { Container, ImageList, ImageListItem } from '@mui/material';
import styles from './Featured.module.scss';
import {useRouter} from 'next/router';

export default function Featured({items=[]}) {


console.log(items, 'from featured');
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