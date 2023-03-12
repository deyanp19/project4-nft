import { Container, FormControl, InputAdornment, MenuItem, TextField, Typography,Grid,Select, InputLabel, Stack } from '@mui/material';
import classNames from 'classnames';
import styles from './ExploreFilters.module.scss';
import {Search} from '@mui/icons-material';

export default function ExploreFilters({filters}) {
    return (
        <div className={styles["explore-filters"]}>
            <Container>
                <Grid container direction="column" >

                     <FormControl sx={{m:1}} size="small" fullWidth>
                     <InputLabel shrink htmlFor="price">Price range</InputLabel>

                         <Select color="primary" labelId="sort-order" id="sort-order" variant="outlined" value={1} label={filters?  'sdf' :'none' }>
                    <Stack >
                              {filters.sort.map((x)=><MenuItem key={x.value} value={x.value}>{x.label}</MenuItem>)}  
                     </Stack>
                         </Select>
                     </FormControl>
                     <FormControl sx={{m:1}} size="small" fullWidth>
                     <InputLabel htmlFor="price">Sort by</InputLabel>
                     <Select 
                                labelId="price"
                                id="price"
                                value={3} //needs to be here because without value throws Error
                                color='primary'
                                label={filters?  'sdf' :'none' }
                                className={classNames(styles.selectBox)} 
                                >
                                   {/* {filters && filters.type.map((timon)=><MenuItem key={timon.value} value={timon.value}>{timon.label}</MenuItem>)}  */}
                               </Select>
                     </FormControl>
                     <FormControl sx={{padding:"4"}} >  

                                <TextField variant="standard" InputProps={{  startAdornment: (  <InputAdornment position='start' > <Search sx={{color:'white'}}  /> </InputAdornment> ),   disableUnderline:true}} className={classNames(styles.backgroundInputSearch)}  fullWidth    color='secondary'  />
                            </FormControl>  
                </Grid>
            </Container>
        </div>
    );
}