import { Container, FormControl, InputAdornment, MenuItem, TextField, Typography,Grid,Select, InputLabel, Stack } from '@mui/material';
import classNames from 'classnames';
import styles from './ExploreFilters.module.scss';
import {Search} from '@mui/icons-material';
import SearchIcon from "@mui/icons-material/Search";

export default function ExploreFilters({filters}) {
    return (
        <div className={styles["explore-filters"]}>
            {/* <Container> */}
                
                <Stack direction={"row"} spacing={2} justifyContent={"flex-end"}  >

                     <FormControl sx={{m:1}} size="small" fullWidth>
                     <InputLabel shrink htmlFor="price">Price range</InputLabel>

                         <Select color="primary" labelId="sort-order" id="sort-order" variant="outlined" value={1} label={filters?  'sdf' :'none' }>
                            {/* <Stack direction="column" spacing={2}> */}
                              { filters.sort.map((x)=><MenuItem key={x.value} value={x.value}>{x.label}</MenuItem>)}   
                            {/* </Stack> */}
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
                                    {/* <Stack direction="column" spacing={2}> */}

                                   {/* {filters.type.map((timon)=><MenuItem key={timon.value} value={timon.value}>{timon.label}</MenuItem>)}   */}
                                    {/* </Stack> */}
                               </Select>
                     </FormControl>
                     <FormControl sx={{padding:"4"}} >  <TextField variant="standard" InputProps={{  startAdornment: (  <InputAdornment position='start' > <SearchIcon className={styles["search-icon"]}  /> </InputAdornment> ),   disableUnderline:true}} className={classNames(styles.backgroundInputSearch)}  fullWidth    color='secondary'  />
                            </FormControl>  
                </Stack>
             
            {/* </Container> */}
        </div>
    );
}