 var Product = require('../models/product');
 var mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost:27017/shopping', {
     useNewUrlParser: true
 });

 var products = [
     new Product({
         imagePath: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Baby.gnu-800x800.png',
         title: 'Product1',
         description: 'Product1 Description',
         price: 10
     }),
     new Product({
         imagePath: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Baby.gnu-800x800.png',
         title: 'Product2',
         description: 'Product2 Description',
         price: 11
     }),
     new Product({
         imagePath: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Baby.gnu-800x800.png',
         title: 'Product3',
         description: 'Product3 Description',
         price: 13
     }),
     new Product({
         imagePath: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Baby.gnu-800x800.png',
         title: 'Product4',
         description: 'Product4 Description',
         price: 14
     }),
     new Product({
         imagePath: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Baby.gnu-800x800.png',
         title: 'Product5',
         description: 'Product5 Description',
         price: 15
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