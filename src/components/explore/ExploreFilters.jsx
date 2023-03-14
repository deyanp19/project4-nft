import styles from "./ExploreFilters.module.scss";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

export default function ExploreFilters({filters}) {
    console.log(filters);
    return (
        <div className={styles["explore-filters"]}>
            {/* <Container> */}
                
                <Stack direction={"row"} spacing={2} justifyContent={"flex-end"}  >

                     <FormControl sx={{m:1}} size="small" fullWidth>
                     <InputLabel shrink htmlFor="price">Price range</InputLabel>

                         <Select color="primary" labelId="sort-order" id="sort-order" variant="outlined" value={1}  >
                             <Stack direction="column" spacing={2}> 
                               { filters.sort.map((x)=>{
                                  return (<MenuItem key={x.value} value={x.value}>{x.label}</MenuItem>)})}    
                             </Stack> 
                         </Select>
                     </FormControl>
                     <FormControl sx={{m:1}} size="small" fullWidth>
                     <InputLabel htmlFor="price">Sort by</InputLabel>
                     <Select labelId="price" id="price" value={3}  color='primary' className={ styles.selectBox}  >
                                    {/* <Stack direction="column" spacing={2}> */}

                                    {/* {filters.price.map((timon)=><MenuItem key={timon.value} value={timon.value}>{timon.label}</MenuItem>)}     */}
                                    {/* </Stack> */}
                               </Select>
                     </FormControl>
                      <TextField  InputProps={{  startAdornment: (  <InputAdornment position='start' > <SearchIcon className={styles["search-icon"]}  /> </InputAdornment> ),   disableUnderline:true, sx:{ width:"340px"}}} className={styles.backgroundInputSearch}       variant="standard" placeholder='' />
                              
                </Stack>
             
            {/* </Container> */}
        </div>
    );
}