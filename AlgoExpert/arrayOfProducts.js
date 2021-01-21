function arrayOfProducts(array) {
  const product = new Array(array.length).fill(1);
  let leftProduct = 1;
  let rightProduct = 1;
  // left to right traversal
  for (let i = 0; i < array.length; i++) {
    product[i] = leftProduct;
    leftProduct *= array[i];
  }
  // Right to left traversal
  for (let i = array.length - 1; i > -1; i--) {
    product[i] = rightProduct;
    rightProduct *= array[i];
  }

  return product;
}

// Do not edit the line below.
exports.arrayOfProducts = arrayOfProducts;
