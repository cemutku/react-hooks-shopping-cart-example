import React from 'react';

export default function ShoppingCart(props) {
  function handleClick(e) {
    e.preventDefault();
    props.onDeleteItem(e.target.value);
  }

  return (
    <div className="row">
      <div className="col-md-8">
        <ul className="list-group">
          {props.cartItems.map(cartItem => {
            return (
              <li
                key={cartItem.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {cartItem.name}
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleClick}
                  value={cartItem.id}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
