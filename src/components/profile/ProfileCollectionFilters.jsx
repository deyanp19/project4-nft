import { Grid, Typography,InputAdornment,Stack,Select, TextField, FormControl, InputLabel, MenuItem } from '@mui/material';
import {Search} from '@mui/icons-material';
import classNames from 'classnames';
import styles from './ProfileCollectionFilters.module.scss';
import { useEffect, useState } from 'react';



export default function ProfileCollectionFilters({filters,fooPrice,fooSort}) {

    const [filtersStateSaved, setFiltersStateSaved]=useState("");
    useEffect(()=>{
        setFiltersStateSaved(filters)
      },[filters]);
      console.log(filters );
    return (
        <div className={styles["profile-collection-filters"]}>
            <Grid container direction="row"  wrap='nowrap' spacing={2} justifyContent="space-between"    alignItems="center">
                            <FormControl sx={{ m: 1}} size="small" fullWidth>
                                <Select 
                                labelId="sort-order"
                                id="sort-order"
                                value={1}
                                label={filters&&filters.sort.label}
                                onChange={fooSort}
                                >
                                    {filters&&filters.sort.map((pumba)=><MenuItem key={pumba.value} value={pumba.value}>{pumba.label}</MenuItem>)}
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
                                  onChange={fooPrice}

                                >
                                   {filters&&filters.price.map((timon)=><MenuItem key={timon.value} value={timon.value}>{timon.label}</MenuItem>)}

                                
                                {/* </TextField> */}
                                </Select>
                            </FormControl>
                            <FormControl sx={{padding:"4"}} >
                                <TextField
                                InputProps={{
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
        </div>
    );
}