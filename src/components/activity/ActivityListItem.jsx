import styles from "./ActivityListItem.module.scss";
 
import { formatDistance, parseISO } from "date-fns";
 
import Avatar from "../avatar/Avatar";
import Link from "../link/Link";
import Stack from "@mui/material/Stack";



 
export default function ActivityListItem({
  user,
  created_at,
  nft,
  type = "like"
}) {
   console.log(user.verified);
  const action = () => {
    if (type === "like") {
      return "liked";
    } else if (type === "buy") {
      return "bought";
    }
  };

  let currentDate=new Date();
  let dateInTime=parseISO(created_at, { additionalDigits: 1 })
  console.log(dateInTime);
  return (
    <div>
       <div className={styles["activity-list-item"]}  spacing={2}>
        <Avatar url={user.avatar.url} verified={user.verified} />
        <div className={styles["info-stack"]}>
          <p className={styles["info-par"]}>
            {`${user.name} ${action()}`}{" "}
            <Link href={nft.owner.avatar.url}>"{nft.name}"</Link> by{" "}
            <Link href={user.avatar.url}>{nft.owner.username}</Link>
          </p>
          <p className={styles["info-par"]}>
            {formatDistance(currentDate,dateInTime, {
              addSuffix: true,
            })}
          </p>
        </div>
      </div>  
    </div>
  );
}



// import { Grid, Typography ,Container, Stack} from '@mui/material';
// // import { formatDistance, parseISO } from 'date-fns';
// import Avatar from '../avatar/Avatar';
// import Link from '../link/Link';
// import styles from './ActivityListItem.module.scss';
// import formatDistance from 'date-fns/formatDistance'
// import parseISO from 'date-fns/parseISO'
 

// const bandera={
//    user:{
//        "avatar": {
//           "url": '/images/profilePic.jpg'
//        },
//        "verified": false,
//        "name":'Cupcat nft'
    
//    },
//    created_at:"+02023065",
//    nft:{
//     "name": 'dog bone',
//     "owner": {
//        "username": "antonio banderas",
//         "avatar": {
//            "url": '/images/avatar.png'
//         },
//        "verified": false
//     }
//  },
//    type : "like",
//  }
   
//   let currentDate=new Date();
 
// export default function ActivityListItem({user ,created_at ,nft ,type="like"}) {
//      created_at='+02023065';
//     let dateInTime=parseISO(created_at, { additionalDigits: 1 })
  
  
//    const timeDistanceCalc=formatDistance(currentDate,dateInTime,{addSuffix:true,includeSeconds:true})
//     return (
//                <div> 
//                <Stack className={styles["list-item-stack"]} direction="row" spacing={2}>

//                <Avatar url={user.avatar.url} verified={user.verified} />

//                <Stack className={styles["info-stack"]} direction="column"> 

//                      <p className={styles["info-par"]}> {user} {type=='like'?"liked":(type=="buy"?"bought":null)}  <Link variant="text"  href='/' >{user}</Link> by  <Link variant="text" href='/'>{nft}</Link></p>  
//                      <p className={styles["info-par"]}> { formatDistance(currentDate,dateInTime,{addSuffix:true,includeSeconds:true}) }</p>
//                </Stack>
//                </Stack>
//         </div>
//     );
// }


//  {/* <Grid container wrap="nowrap"  alignItems="center" justifyContent="flex-start" > */}
   {/* <Grid item > */}
     {/* </Grid> */}
            {/* <Grid container direction="column"> */}

     {/* <Grid item > */}
  {/* </Grid> */}
   {/* </Grid> */}
            {/* </Grid> */}



