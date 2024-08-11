import React from 'react';

const Invoice: React.FC = () => {
  return (
    <div style={styles.invoiceContainer}>
      <div style={styles.header}>
        <div style={styles.companyDetails}>
          <h2>Rona, Inc.</h2>
          <p>Earth</p>
          <p>Universe, 3rd Dimension</p>
        </div>
        <div style={styles.invoiceDetails}>
          <p>Invoice #: 123</p>
          <p>Created: January 1, 2020</p>
          <p>Due: February 1, 2020</p>
        </div>
      </div>
      <div style={styles.clientDetails}>
        <p>JackBoys Inc.</p>
        <p>Jon Wick</p>
        <p>example@example.com</p>
      </div>

      <div style={styles.paymentMethod}>
        <h3>Payment Method</h3>
        <p>Check</p>
        <p>Check #: 1000</p>
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Real Estate</td>
            <td>$33,000.00</td>
          </tr>
          <tr>
            <td>Lamborghini</td>
            <td>$250,000.00</td>
          </tr>
          <tr>
            <td>Another stuff</td>
            <td>$10.00</td>
          </tr>
        </tbody>
      </table>

      <div style={styles.total}>
        <p>Total: $283,010.00</p>
      </div>
    </div>
  );
};

// Define the styles as a TypeScript object
const styles: { [key: string]: React.CSSProperties } = {
  invoiceContainer: {
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    backgroundColor: '#fff',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '2px solid #ddd',
    paddingBottom: '10px',
    marginBottom: '20px',
  },
  companyDetails: {
    textAlign: 'left',
  },
  invoiceDetails: {
    textAlign: 'right',
  },
  clientDetails: {
    marginBottom: '20px',
  },
  paymentMethod: {
    marginBottom: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableHeader: {
    borderBottom: '2px solid #ddd',
  },
  total: {
    textAlign: 'right',
    marginTop: '20px',
    fontSize: '1.2em',
  },
};

export default Invoice;
