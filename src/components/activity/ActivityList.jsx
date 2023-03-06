import styles from "./ActivityList.module.scss";
import ActivityListItem from "./ActivityListItem";
import { Container } from "@mui/material";
import Stack from '@mui/material/Stack';
import classNames from 'classnames'

export default function ActivityList({ items = [] }) {
  return (
    <div className={classNames(styles["activity-list"])}>
        <Stack direction={"column"} spacing={2}>
          {items.map((item, i) => {
            return <ActivityListItem key={i} user={item.user}   nft={item.nft}  created_at={item.created_at} type={item.type} />;
          })}
        </Stack>
   
    </div>
  );
}
 



// {   user:{
//     "avatar": {
//        "url": '/images/profilePic.jpg'
//     },
//     "verified": false,
//     "name":'Cupcat nft'
 
// },
// created_at:"+02023065",
// nft:{
//  "name": 'dog bone',
//  "owner": {
//     "username": "antonio banderas",
//      "avatar": {
//         "url": '/images/avatar.png'
//      },
//     "verified": false
//  }
// },
// type : "like",
// },{   user:{
//     "avatar": {
//        "url": '/images/profilePic.jpg'
//     },
//     "verified": false,
//     "name":'Cupcat nft'
 
// },
// created_at:"+02023065",
// nft:{
//  "name": 'dog bone',
//  "owner": {
//     "username": "antonio banderas",
//      "avatar": {
//         "url": '/images/avatar.png'
//      },
//     "verified": false
//  }
// },
// type : "like",
// }