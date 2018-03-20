var keystone = require('keystone');
var Types = keystone.Field.Types;

var Product = new keystone.List('Product', {
  map: {name: 'title'},
  singular:'Product',
  plural: 'Products',
  autokey: {path: 'slug', from: 'title', unqiue: true}
});

Product.add({
  title: {type: String, required: true},
  price: {type: Number},
  qty: {type: Number},
  description: {type: Types.Html, wysiwyg: true, height: 300},
  brief: {type: Types.Html},
  image: {type: Types.CloudinaryImage},
  publishedDate: {type: Date, default: Date.now},
});

Product.register();
