import styles from './TopCollectors.module.scss';
import _ from 'lodash';
import { Container, FormControl, Grid, MenuItem, Select, Typography } from '@mui/material';
import classNames from 'classnames';
import CollectorColumn from './CollectorColumn';

export default function TopCollectors({collectors=[]}) {
    collectors= [
        {
          "name": 'jhon',
          "nftsCount": "Number 1",
          "avatar": "/images/nft.jpg",
          "verified": Boolean,
          "id": 330
        },
        {
          "name": 'jhon',
          "nftsCount": "Number 2",
          "avatar": "/images/nft.jpg",
          "verified": Boolean,
          "id": 331
        },
        {
          "name": 'jhon',
          "nftsCount": "Number 3",
          "avatar": "/images/nft.jpg",
          "verified": Boolean,
          "id": 332
        },
        {
          "name": 'jhon',
          "nftsCount": "Number 4",
          "avatar": "/images/nft.jpg",
          "verified": Boolean,
          "id": 333
        }
      ]
      
return (
    <Container className={classNames(styles.container)}  >
    <Grid container sx={{ justifyContent:"space-between"}} wrap='nowrap' >

        <Grid item   >
            <Typography variant='h1' component='h4' >Top Collectors </Typography>
        </Grid>
        <Grid item   >
            <FormControl  sx={{ m: 1}} size="small" >
                <Select 
                value="" //needs to be here because without value throws Error
                color='secondary'
                label='This week'
                className={classNames(styles.selectBox)} 
                >
                    <MenuItem key={'this_week'}  value={'this_week'}>This week</MenuItem>
                    <MenuItem key={'last_week'} value={'last_week'}>Last week</MenuItem>
                    <MenuItem key={'last_month'} value={'last_month'}>Last month</MenuItem>

                
                {/* </TextField> */}
                </Select>
            </FormControl>
        
        </Grid>
    </Grid>
    <Grid container direction="row"   spacing={1} >
       
            { _.chunk(collectors,3).map((threeMembers,i)=>{

               return <Grid item key={i} justifyContent="center"
               alignItems="center"><CollectorColumn items={threeMembers} /></Grid>
            }) }
          
    </Grid>
</Container>
);

}