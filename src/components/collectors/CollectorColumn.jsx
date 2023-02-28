import Collector from './Collector';
import styles from './Collector.module.scss';

  

export default function CollectorColumn({items=[]}) {

  items= [
      {
        "name": 'jhon',
        "nftsCount": "Number 3",
        "avatar": "/images/nft.jpg",
        "verified": Boolean,
        "id": 33
      }
    ]

console.log({items});
    return (
        <div>
          {items.map((item)=> <Collector {...item}/>) }
        </div>
    );
}