import { useEffect, useState } from 'react';

import Card from '../UI/Card';
import classes from './ItemsAvailable.module.css';
import AllItems from './AllItems/AllItems';

const ItemsAvailable = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  
  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(
        'https://allmoxy-grid-default-rtdb.firebaseio.com/items.json'
      );

      if (!response.ok) {
        throw new Error('Uh oh!');
      }

      const responseData = await response.json();

      const loadedItems = [];

      for (const key in responseData) {
        loadedItems.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setItems(loadedItems);
      setIsLoading(false);
    };

    fetchItems().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.ItemsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.ItemsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const itemsList = items.map((item) => (
    <AllItems
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  ));

  return (
    <section className={classes.items}>
      <Card>
        <ul>{itemsList}</ul>
      </Card>
    </section>
  );
};

export default ItemsAvailable;