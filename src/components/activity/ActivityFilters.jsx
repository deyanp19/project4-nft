
import { Grid,Container, Typography,Stack,Select, TextField, FormControl, InputLabel, MenuItem } from '@mui/material';
import classNames from 'classnames';
import { formatDistance, parseISO } from 'date-fns';
import Avatar from '../avatar/Avatar';
import Link from '../link/Link';
import styles from './ActivityFilters.module.scss';
import {Search} from '@mui/icons-material';
import { InputAdornment } from '@mui/material';
import {useState, useEffect} from 'react';

export default function ActivityFilters({filters,fooSort,fooType }) {
  const [sortBy, setSortBy] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [filtersStateSaved, setFiltersStateSaved]=useState("")
console.log(filters,fooSort);
useEffect(()=>{
  setFiltersStateSaved(filters)
},[]);


    return (
        <div className={styles["activity-filters"]} >
            <Container >

            <Stack direction={"row"} spacing={2} justifyContent={"flex-end"}>
                <Grid item >
                <FormControl sx={{ m: 1}} size="small" fullWidth>
                <InputLabel id="sort-by-label">Sort by</InputLabel>
                                <Select 
                                  labelId="sort-by-label"
                                  value={sortBy}
                                  sx={{ minWidth: "120px" }}
                                  color={"primary"}
                                  onChange={(e) => fooSort(e)}
                                >
                                    {filtersStateSaved && filtersStateSaved.sort.map((filter) => {
                                          return (
                                              
                                            <MenuItem key={filter.label} value={filter.value}>
                                              {filter.label}
                                            </MenuItem>
                                            
                                          );
                                        })}     
                                </Select>
                           </FormControl>

                               <FormControl  sx={{ m: 1}} size="small" fullWidth >
                                <InputLabel id="price-range-label">Type</InputLabel>
                                <Select 
                                labelId="price"
                                id="price"
                                value={priceRange} 
                                sx={{ minWidth: "120px" }}
                                onChange={fooType}
                                color='primary'
                                className={classNames(styles.selectBox)} 
                                >
                                     {filters && filters.price.map((timon)=><MenuItem key={timon.value} value={timon.value}>{timon.label}</MenuItem>)}     
                               </Select>
                              </FormControl> 
                              <FormControl sx={{padding:"4"}} >  
                                <TextField variant="standard" InputProps={{  startAdornment: (  <InputAdornment position='start' > <Search sx={{color:'white'}}  /> </InputAdornment> ),   disableUnderline:true}} className={classNames(styles.backgroundInputSearch)}  fullWidth    color='secondary'  />
                            </FormControl>  
                        
                </Grid>
            
             
            </Stack>
                                </Container>
        </div>
    );
}