const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Пиши код ниже этой строки

  const arrayValues = [];
  let productKeys;
  for (const product of products) {
    // console.log(product)
    productKeys = Object.keys(product);
    console.log(productKeys)

    for (const key of productKeys) {
      if (key === propName) {
       arrayValues.push(product[key]);
      }
    }
    // console.log(product.name)
    // if (product === propName) {
    //     arrayValues.push(product.name);
    //     // return arrayValues
    // }
    // if ( product === products.price) {
    //     arrayValues.push(products[product]);
    //     // return arrayValues;
    // }
    // if (product === products.quantity) {
    //     arrayValues.push(products[product]);
    //     // return arrayValues
    // }
    return arrayValues;
  }
  
  
  // Пиши код выше этой строки
}



console.log(getAllPropValues('name'));
console.log(getAllPropValues('quantity'));
console.log(getAllPropValues('price'));
console.log(getAllPropValues('category'));