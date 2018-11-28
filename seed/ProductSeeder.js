 var Product = require('../models/product');
 var mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost:27017/shopping', {
     useNewUrlParser: true
 });

 var products = [
     new Product({
         imagePath: 'images/product/product-01.jpg',
         imagePath2: 'images/product/product-01-02.jpg',
         title: 'Product1',
         description: 'Product1 Description',
         price: 10,
         category: 'Shirts'
     }),
     new Product({
        imagePath: 'images/product/product-02.jpg',
        imagePath2: 'images/product/product-02-02.jpg',
        title: 'Product2',
         description: 'Product2 Description',
         price: 11,
         category: 'Bags'
     }),
     new Product({
        imagePath: 'images/product/product-03.jpg',
        imagePath2: 'images/product/product-03-02.jpg',
        title: 'Product3',
         description: 'Product3 Description',
         price: 13,
         category: 'Pents'
     }),
     new Product({
        imagePath: 'images/product/product-04.jpg',
        imagePath2: 'images/product/product-04-02.jpg',
        title: 'Product4',
         description: 'Product4 Description',
         price: 14,
         category: 'Shoes'
     }),
     new Product({
        imagePath: 'images/product/product-05.jpg',
        imagePath2: 'images/product/product-05-02.jpg',
        title: 'Product5',
         description: 'Product5 Description',
         price: 15,
         category: 'Shirts'
     }),
     new Product({
        imagePath: 'images/product/product-06.jpg',
        imagePath2: 'images/product/product-06-02.jpg',
        title: 'Product6',
         description: 'Product6 Description',
         price: 16,
         category: 'Hoodies'
     }),
     new Product({
        imagePath: 'images/product/product-07.jpg',
        imagePath2: 'images/product/product-07-02.jpg',
        title: 'Product7',
         description: 'Product7 Description',
         price: 17,
         category: 'Hoodies'
     }),
     new Product({
        imagePath: 'images/product/product-08.jpg',
        imagePath2: 'images/product/product-08-02.jpg',
        title: 'Product8',
         description: 'Product8 Description',
         price: 18,
         category: 'Hoodies'
     })
 ];
 var done = 0;
 for (var i = 0; i < products.length; i++) {
     products[i].save(function (err, result) {
         done++;
         if (done === products.length - 1) {
             exit();

         }
     });

 }

 function exit() {
     mongoose.disconnect();
 }