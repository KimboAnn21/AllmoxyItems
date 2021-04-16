import Card from '../UI/Card';
import classes from './ItemsAvailable.module.css';
import AllItems from '../Items/AllItems/AllItems';
import MKBShirt from '../assets/MKBShirt.jpg';
import BowlCozie from '../assets/BowlCozie.jpg';
import FirstDach from '../assets/FirstDachshund.jpg';
import KimboBag from '../assets/KimboBag.jpg';
import ChessBoard from '../assets/ChessBoard.jpg';
import { useEffect, useState } from 'react';

const AvailableItems = () =>{
  const [items, setItems] = useState => {[]};
}
  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('https://allmoxy-grid-default-rtdb.firebaseio.com/items.json');
      const responseData = await response.json();

      const loadedItems = [];

      for (const key in responseData) {
        loadedItems.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key.description],
          price: responseData[key].price
          
        });
       setItems(loadedItems);
      }   
    }

    fetchItems();
  },
  []);

  //const DUMMY_ITEMS = [
  //  {
  //    id: '7401',
  //    name: 'MKB Tshirt',
  //    description: '100% of Profits go to the Mystery Kindness Brigade!',
  //    image: <img className={classes.img} src={MKBShirt} alt='Kindness is easy and costs nothing.'/>,
  //    price: 24.00,
  //  },
  //  {
  //    id: '7402',
  //    name: 'Hot Bowl Holders Qty 4 per order',
  //    description: 'Keep your hands warm and your food hot!',
  //    image: <img className={classes.img} src={BowlCozie} alt='Keep your hands warm and your food hot!' />,
  //    price: 20.00,
  //  },
  //  {
  //    id: '7403',
  //    name: 'Leather Chess Board',
  //    description: 'Will roll-up and travel!',
  //    image: <img className={classes.img} src={ChessBoard} alt='Will roll-up and travel.' />,
  //    price: 110.00,
  //  },
  //  {
  //    id: '7404',
  //    name: 'Kimbo Bag',
  //    description: 'The perfect grab-and-go bag for errands!',
  //    image: <img className={classes.img} src={KimboBag} alt='The perfect grab-and-go bag for errands!' />,
  //    price: 18.00,
  //  },
  //  {
  //    id: '7405',
  //    name: 'Dapple Dachshund',
  //    description: 'Healthy...and adorable...',
  //    image: <img className={classes.img} src={FirstDach} alt='Kindness is easy and costs nothing.' />,
  //    price: 1899.,
  //  },
  //];
const itemsList = items.map((item) => {
  <AllItems 
      key={item.id} 
      name={item.name} 
      description={item.description} 
      price ={item.price} 
      image={item.image}/>

    return <section className={classes.items}>
      <Card className={classes.img}>
        <ul>
            {itemsList}
        </ul>
      </Card>
    </section>

})
export default ItemsAvailable;