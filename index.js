const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());

let sortedProducts = [
  {
    id: 1,
    name: 'Xiaomi iPhone 12',
    brand: 'Xiaomi',
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 2,
    name: 'Oppo Mi 10',
    brand: 'Xiaomi',
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 3,
    name: 'Samsung Mi 10',
    brand: 'Oppo',
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 4,
    name: 'Apple Find X2',
    brand: 'Samsung',
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 48,
  },
  {
    id: 5,
    name: 'Oppo Mi 11',
    brand: 'Xiaomi',
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 6,
    name: 'OnePlus Find X3',
    brand: 'Apple',
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 7,
    name: 'Apple Pixel 5',
    brand: 'Apple',
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 8,
    name: 'Google Mi 10',
    brand: 'Oppo',
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 108,
  },
  {
    id: 9,
    name: 'Oppo Mi 11',
    brand: 'Samsung',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 10,
    name: 'Xiaomi Mi 10',
    brand: 'Oppo',
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 11,
    name: 'OnePlus Pixel 5',
    brand: 'Apple',
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 12,
    name: 'Xiaomi OnePlus 8',
    brand: 'Xiaomi',
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: 'Android',
    camera: 48,
  },
  {
    id: 13,
    name: 'Xiaomi Pixel 6',
    brand: 'Oppo',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 14,
    name: 'Samsung Find X2',
    brand: 'Oppo',
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: 'Android',
    camera: 48,
  },
  {
    id: 15,
    name: 'Google OnePlus 8',
    brand: 'Apple',
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 16,
    name: 'OnePlus iPhone 12',
    brand: 'OnePlus',
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 17,
    name: 'Google Mi 11',
    brand: 'Oppo',
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 18,
    name: 'Google OnePlus 9',
    brand: 'Apple',
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 64,
  },
  {
    id: 19,
    name: 'Oppo Galaxy S22',
    brand: 'Samsung',
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: 'Android',
    camera: 12,
  },
  {
    id: 20,
    name: 'Apple Pixel 5',
    brand: 'Oppo',
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: 'Android',
    camera: 108,
  },
];

//Endpoint 1 : Define an endpoint /products/sort/popularity using the get method.Define a variable sortedProducts to create a condition to sort the products on their ratings (high to low).Send the filtered products as a JSON response.//
const sortedProductsLowToHigh = (products) => {
  return products.sort((a, b) => b.rating - a.rating);
};
app.get('/products/sort/popularity', (req, res) => {
  let productsCopy = sortedProducts.slice();
  res.json({products:sortedProductsLowToHigh(productsCopy)});
});

//Endpoint 2 : Define an endpoint /products/sort/price-high-to-low using the get method.Define a variable sortedProducts to create a condition to sort the products on their pricing (high to low).Send the filtered products as a JSON response.//
const sortedProductsByPrice = (products) => {
  return products.sort((a, b) => b.price - a.price);
};
app.get('/products/sort/price-high-to-low', (req, res) => {
  let productsCopy1 = sortedProducts.slice();
  res.json({products:sortedProductsByPrice(productsCopy1)});
});

//Endpoint 3 : Define an endpoint /products/sort/price-low-to-high using the get method.Define a variable sortedProducts to create a condition to sort the products on their pricing ( low to high).Send the filtered products as a JSON response.//
const sortedProductsByPriceLowToHigh = (products) => {
  return products.sort((a, b) => a.price - b.price);
};
app.get('/products/sort/price-low-to-high', (req, res) => {
  let productsCopy2 = sortedProducts.slice();
  res.json({products:sortedProductsByPriceLowToHigh(productsCopy2)});
});

//Endpoint 4 : Define an endpoint /products/filter/ram using the get method.Implement a function filterByRam that returns the products if it meets the selected RAM configuration.Send the filtered products as a JSON response.//
function filterByRam(products, ram) {
  return products.ram === ram;
}
app.get('/products/filter/ram', (req, res) => {
  let productsCopy3 = sortedProducts.slice();
  let ram = parseFloat(req.query.ram);
  res.json(productsCopy3.filter((p) => filterByRam(p, ram)));
});

//Endpoint 5 : Define an endpoint /products/filter/rom using the get method.Implement a function filterByRom that returns the products if it meets the selected ROM configuration.Send the filtered products as a JSON response.//
function filterByRom(products, rom) {
  return products.rom === rom;
}
app.get('/products/filter/rom', (req, res) => {
  let productsCopy4 = sortedProducts.slice();
  let rom = parseFloat(req.query.rom);
  res.json(productsCopy4.filter((p) => filterByRom(p, rom)));
});

//Endpoint 6 : Define an endpoint /products/filter/brand using the get method.Implement a function filterByBrand that returns the products for the specified brand category.While matching you convert both the values to lowercase. This will ensure that strings comparisons are case-insensitive.Use the .toLowerCase() string function.Send the filtered products as a JSON response.//
function filterByBrand(products, brand) {
  return products.brand.toLowerCase() === brand.toLowerCase();
}
app.get('/products/filter/brand', (req, res) => {
  let productsCopy5 = sortedProducts.slice();
  let brand = req.query.brand;
  res.json(productsCopy5.filter((p) => filterByBrand(p, brand)));
});

//Endpoint 7 : Define an endpoint /products/filter/os using the get method.Implement a function filterByOs that returns the products for the specified OS configuration.While matching you convert both the values to lowercase. This will ensure that strings comparisons are case-insensitive.Use the .toLowerCase() string function.Send the filtered products as a JSON response.//
function filterByOs(products, os) {
  return products.os.toLowerCase() === os.toLowerCase();
}
app.get('/products/filter/os', (req, res) => {
  let productsCopy6 = sortedProducts.slice();
  let os = req.query.os;
  res.json(productsCopy6.filter((p) => filterByOs(p, os)));
});

//Endpoint 8: Define an endpoint /products/filter/price using the get method.Implement a function filterByPrice that returns the products for the products less than or equal to the specified price filter.Send the filtered products as a JSON response.//
function filterByPrice(products, price) {
  return products.price <= price;
}
app.get('/products/filter/price', (req, res) => {
  let productsCopy7 = sortedProducts.slice();
  let price = parseFloat(req.query.price);
  res.json(productsCopy7.filter((p) => filterByPrice(p, price)));
});

//Endpoint 9 : Define an endpoint /products using the get method.Send the products array as a JSON response.
app.get('/products', (req, res) => {
  res.json({ products: sortedProducts });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
