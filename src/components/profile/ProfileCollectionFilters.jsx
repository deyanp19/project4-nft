import { Grid, Typography,InputAdornment,Stack,Select, TextField, FormControl, InputLabel, MenuItem } from '@mui/material';
import {Search} from '@mui/icons-material';
import classNames from 'classnames';
import styles from './ProfileCollectionFilters.module.scss';



export default function ProfileCollectionFilters({filters={
    sort: [
      { label: "Name (Ascending)", value: 1 },
      { label: "Name (Descending)", value: 2 },
    ],
    price: [
      { label: "0.3 - 0.5 ETH", value: 3 },
      {
        label: "0.5 - 2 ETH",
        value: 4,
      },
      {
        label: "2- 3 ETH",
        value: 5,
      },
    ],
    }}) {
    console.log(filters);
    return (
        <div className={styles["profile-colleciton-filters"]}>
            <Grid container direction="row" sx={12} justifyContent="space-between" alignItems="center">
                <Grid item >
                    <Typography variant='h3' inputProps={{textTransform:'uppercase'}}>Collection</Typography>
                </Grid>
                <Grid item >
                    <Grid container direction='row' wrap='nowrap' justifyContent="flex-end" spacing={2} >
                        
                            <FormControl fullWidth sx={{ m: 1}} size="small" >
                                <Select 
                                labelId="sort-order"
                                id="sort-order"
                                value={filters?.sort}
                                label={filters.sort.label}
                                >
                                    {filters.sort.map((pumba)=><MenuItem value={pumba.value}>{pumba.label}</MenuItem>)}
                                </Select>
                            </FormControl>
                            <FormControl  sx={{ m: 1}} size="small" fullwidth>
                                <Select 
                                value="" //needs to be here because without value throws Error
                                color='secondary'
                                label='This week'
                                className={classNames(styles.selectBox)} 
                                >
                                   {filters.price.map((timon)=><MenuItem value={timon.value}>{timon.label}</MenuItem>)}

                                
                                {/* </TextField> */}
                                </Select>
                        </FormControl>
                            <FormControl >
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
                </Grid>
            </Grid>
        </div>
    );
}