import styles from "./ActivityListItem.module.scss";
import { parseISO, formatDistance } from "date-fns";
import Avatar from "../avatar/Avatar";
import Link from "../link/Link";

export default function ActivityListItem({
  user,
  created_at,
  nft,
  type = "like",
}) {
  let activity;

  switch (type) {
    case "like":
      activity = "liked";
      break;
    case "buy":
      activity = "bought";
      break;
  }

  return (
    <div className={styles["activity-list-item"]}>
      <Avatar size={56} url={user.avatarUrl} verified={user.verified} />
      <div className={styles["activity-info"]}>
        <div className={styles.text}>
          <span className={styles.name}>{user.name}</span>
          <span> {activity} </span>
          <Link href={"#"} className={styles.link}>
            {nft.name}
          </Link>
          <span> by </span>
          <Link href={"#"} className={styles.link}>
            {nft.name}
          </Link>
        </div>
        <div className={styles.elapsed}>
          {formatDistance(Date.now(), parseISO(created_at))}
        </div>
      </div>
    </div>
  );
}





// import styles from "./ActivityListItem.module.scss";
 
// import { formatDistance, parseISO } from "date-fns";
 
// import Avatar from "../avatar/Avatar";
// import Link from "../link/Link";
// import Stack from "@mui/material/Stack";



 
// export default function ActivityListItem({
//   user,
//   created_at,
//   nft,
//   type = "like"
// }) {
//   const action = () => {
//     if (type === "like") {
//       return "liked";
//     } else if (type === "buy") {
//       return "bought";
//     }
//   };

//   let currentDate=new Date();
//   let dateInTime=parseISO(created_at, { additionalDigits: 1 })
//   console.log(dateInTime);
//   return (
//     <div>
//        <Stack className={styles["activity-list-item"]} direction="row"  spacing={1}>
//         <Avatar url={user.avatar.url} verified={user.verified} />
//         <Stack direction="column" spacing={1} className={styles["info-stack"]}>
//           <p className={styles["info-par"]}>
//             {`${user.name} ${action()}`}{" "}
//             <Link href={nft.owner.avatar.url}>"{nft.name}"</Link> by{" "}
//             <Link href={user.avatar.url}>{nft.owner.username}</Link>
//           </p>
//           <p className={styles["info-par"]}>
//             {formatDistance(currentDate,dateInTime, {
//               addSuffix: true,
//             })}
//           </p>
//         </Stack>
//       </Stack>  
//     </div>
//   );
// }



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



