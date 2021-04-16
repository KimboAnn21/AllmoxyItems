import { useEffect, useState } from 'react';
//import AllItems from '../Items/AllItems/AllItems';
import Card from '../UI/Card';
import Items from './Items';
import classes from './ItemsAvailable.module.css';

const ItemsAvailable = () => {
  const [Items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(
        'https://allmoxy-grid-default-rtdb.firebaseio.com/items.json'
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

  const ItemsList = Items.map((meal) => (
    <Items
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.Items}>
      <Card>
        <ul>{ItemsList}</ul>
      </Card>
    </section>
  );
};

export default ItemsAvailable;