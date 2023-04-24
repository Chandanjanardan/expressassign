const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let products = [
  {
    id: 1,
    name: 'Product 1',
    total_quantity: 12,
    type_of_product: 'shirt',
    price: 300
  },
  {
    id: 2,
    name: 'Product 2',
    total_quantity: 15,
    type_of_product: 'jeans',
    price: 500
  },
  {
    id: 3,
    name: 'Product 3',
    total_quantity: 5,
    type_of_product: 'jacket',
    price: 1000
  }
];

// Get all products
app.get('/products', (req, res) => {
  res.json(products);
});

// Get product by ID
app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  const product = products.find(p => p.id === parseInt(id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Get product by name
app.get('/products/name/:name', (req, res) => {
  const name = req.params.name;
  const product = products.find(p => p.name === name);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Add a new product
app.post('/addproduct', (req, res) => {
  const product = req.body;
  product.id = products.length + 1;
  products.push(product);
  res.json(product);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});