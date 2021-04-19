import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import Items from './Items';
import classes from './ItemsAvailable.module.css';

const ItemsAvailable = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(
        'https://allmoxy-grid-default-rtdb.firebaseio.com/Items.json'
      );

      if (!response.ok) {
        throw new Error('Oops!');
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
      <section className={classes.itemsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.itemsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const itemsList = items.map((item) => (
    <Items
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