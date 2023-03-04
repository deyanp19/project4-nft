import { Container } from '.pnpm/@mui+system@5.11.11_emc6qr3qmuqskibkvjebpluxve/node_modules/@mui/system';
import { Grid, Typography,InputAdornment,Stack,Select, TextField, FormControl, InputLabel, MenuItem } from '@mui/material';
import classNames from 'classnames';
import { formatDistance, parseISO } from 'date-fns';
import Avatar from '../avatar/Avatar';
import Link from '../link/Link';
import styles from './ActivityFilters.module.scss';
import {Search} from '@mui/icons-material';

export default function ActivityFilters({filters={
    sort: [
      { label: "Name (Ascending)", value: 1 },
      { label: "Name (Descending)", value: 2 },
    ],
    type: [
      { label: "Liked", value: 3 },
      {
        label: "Bought",
        value: 4,
      },
    ],
    }}) {
   
    
    return (

        
        <div className={styles["activity-filters"]} >
            <Container >

            <Grid container direction="column" >
                <Grid item >
                <Typography variant='h3' >Collection</Typography>
                </Grid>
                <Grid item >
                <FormControl sx={{ m: 1}} size="small" fullWidth>
                                <Select 
                                color="primary"
                                labelId="sort-order"
                                id="sort-order"
                                variant="outlined"
                                value={1}
                                label={filters.sort.label}
                                >
                                    {filters.sort.map((pumba)=><MenuItem key={pumba.value} value={pumba.value}>{pumba.label}</MenuItem>)}
                                </Select>
                            </FormControl>
                             <FormControl  sx={{ m: 1}} size="small" fullWidth >
                                <Select 
                                labelId="price"
                                id="price"
                                value={3} //needs to be here because without value throws Error
                                color='secondary'
                                label='This week'
                                className={classNames(styles.selectBox)} 
                                >
                                   {filters.type.map((timon)=><MenuItem key={timon.value} value={timon.value}>{timon.label}</MenuItem>)}  

                                
                               {/* </TextField> */}
                               </Select>
                              </FormControl>
                              <FormControl sx={{padding:"4"}} >  
                                <TextField
                                variant="standard"
                                inputprops={{
                                    startAdornment: (
                                        <InputAdornment position='start' >

                                        <Search sx={{color:'white'}}  />
                                        </InputAdornment>
                                    ),
                                    disableUnderline:true
                                }}
                                className={classNames(styles.backgroundInputSearch)} 
                                fullWidth 
                                variant="standard" 
                                color='secondary'  />
                            </FormControl>  
                        
                </Grid>
            
             
            </Grid>
                                </Container>
        </div>
    );
}