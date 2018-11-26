import React from 'react';

const OrderConfirmation = () => (
  <main role="main" id="container" className="main-container push">
    <section className="order-confirmation">
      <div className="content">
        <div className="confirmation">
          <h2>
            Awesome! Your order has been placed{' '}
            <span role="img" aria-label="smiley-face">
              ☺️
            </span>
          </h2>
          <p>
            Make sure you check your{' '}
            <span role="img" aria-label="email">
              📧{' '}
            </span>for confirmation!
          </p>
        </div>
      </div>
    </section>
  </main>
);

export default OrderConfirmation;
