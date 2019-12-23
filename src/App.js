import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import InsertItem from './components/InsertItem';
import ShoppingCart from './components/ShoppingCart';
import uuid from 'uuid';

const shoppingListItems = [
  {
    id: uuid(),
    name: 'Item 1'
  },
  {
    id: uuid(),
    name: 'Item 2'
  },
  {
    id: uuid(),
    name: 'Item 3'
  }
];

function App() {
  const [cartItems, setShoppingListItems] = useState(shoppingListItems);

  useEffect(() => {
    document.title = `Item count : ${cartItems.length}`;
  }, [cartItems.length]);

  function deleteItem(id) {
    setShoppingListItems(cartItems.filter(item => item.id !== id));
  }

  function addItem(newItem) {
    setShoppingListItems([...cartItems, newItem]);
  }

  return (
    <div className="container">
      <Navbar />
      <InsertItem onAddItem={addItem} />
      <ShoppingCart onDeleteItem={deleteItem} cartItems={cartItems} />
    </div>
  );
}

export default App;
