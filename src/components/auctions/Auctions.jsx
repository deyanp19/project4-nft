import { Box, Chip,  FormControl, Grid,  MenuItem, Stack, Typography } from '@mui/material';
import { Container } from "@mui/material";
import Card from '../card/Card';
import styles from './Auctions.module.scss';
import classNames from 'classnames';
import Select from '@mui/material/Select';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
 
 export default function Auctions( {cards=[],fooSort} ) {
     const {nfts,filters} = cards;
    return (
        <div>
        <Container className={classNames(styles.container)}  >
            <Grid container sx={{ justifyContent:"space-between"}} wrap='nowrap' >

                <Grid item   >
                    <Typography variant='h1' component='h4' >Live Auction </Typography>
                </Grid>
                <Grid item   >
                    <FormControl  sx={{ m: 1}} size="small" >
                        <Select 
                        value="" //needs to be here because without value throws Error
                        color='secondary'
                        label='This week'
                        className={classNames(styles.selectBox)} 
                        onChange={fooSort}
                        >
                      {filters && filters.price.map((filter) => {
                            return (
                                    <MenuItem key={filter.label} value={filter.value}>
                                    {filter.label}
                                    </MenuItem>
                            );
                        })}  
                        
                        {/* </TextField> */}
                        </Select>
                    </FormControl>
                
                </Grid>
            </Grid>
            <Grid container wrap='nowrap' spacing={1} >
            {/* {nfts.map(x=>{
               return <Grid item lg={3} key={x.name} ><Card  mediaUrl={x.mediaUrl}  name={x.name} title={x.name} likes={x.likes}  verified={x.user?.verified}   price={x.price} currency={x.currency} timeLeft={x.timeLeft} /></Grid>
            })}             */}
            </Grid>
        </Container>
        </div>
    );
}