const mongoose = require('mongoose');
const Product = require('./models/Product'); // Adjust the path as necessary

const products = [
  // Headwear
  { name: "Baseball Cap", price: 1299, description: "URBAN MONKEY Men and Women Unisex Corduroy Be Happy Off White Baseball Caps", imageUrl: "https://m.media-amazon.com/images/I/31bv8cDsBRL._SX679_.jpg", category: "Headwear", subcategory: "Caps" },
  { name: "Sun Hat", price: 664, description: "FabSeasons Sun Beach Hat/Caps for Women & Girls, for Sun Protection", imageUrl: "https://m.media-amazon.com/images/I/71zeSDm0CbL._SY879_.jpg", category: "Headwear", subcategory: "Hats" },
  { name: "Fitness Headband", price: 299, description: "Boldfit Polyester Blend Head Band for Man Sports Head Bandana for Men & Women Gym Hair Band", imageUrl: "https://m.media-amazon.com/images/I/91MDsp3gyCL._SX679_.jpg", category: "Headwear", subcategory: "Headbands" },

  // Eyewear
  { name: "Stylish Sunglasses", price: 8739, description: "POLICE Eyewear | Blue Lens | Gold Frame | Full Rim Hexagon Shape Branded Latest and Stylish Sunglasses", imageUrl: "https://m.media-amazon.com/images/I/41r7UqSP6tL._SX679_.jpg", category: "Eyewear", subcategory: "Sunglasses" },
  { name: "Prescription Glasses", price: 499, description: "LENSKART BLU | Zero Power Blue Cut Computer Glasses | Anti Glare, Lightweight & Blocks Harmful Rays", imageUrl: "https://images.free3d.com/imgd/l10/5d54036726be8bb8538b4567/1107-frame-glasses.png", category: "Eyewear", subcategory: "Prescription Glasses" },
  { name: "Aviator Sunglasses", price: 3150, description: "Vintage Aviator Sunglasses for Men & Women | Gradient Lenses | 400% UV Protection", imageUrl: "https://images.free3d.com/imgd/l57530-glasses-aviator-56471.jpg", category: "Eyewear", subcategory: "Aviators" },

  // Jewellery
  { name: "Gold Necklace", price: 11900, description: "Swarovski Infinity Necklace, Infinity And Heart, White, Mixed Metal Finish For Womens", imageUrl: "https://m.media-amazon.com/images/I/71Ppuph2B3L._SY625_.jpg", category: "Jewellery", subcategory: "Necklaces" },
  { name: "Diamond Earrings", price: 1299, description: "LeCalla American Diamond and 925 Sterling Silver Turkish Tear-Drop and Dangle Small Earrings for Women", imageUrl: "https://m.media-amazon.com/images/I/61DXfCz447L._SY625_.jpg", category: "Jewellery", subcategory: "Earrings" },
  { name: "Silver Bracelet", price: 1819, description: "Clara Made With Swiss Zirconia 925 Sterling Silver Grazia Solitaire Bracelet Gift For Women", imageUrl: "https://m.media-amazon.com/images/I/51VxkJ51nAL._SY625_.jpg", category: "Jewellery", subcategory: "Bracelets" },
  { name: "Gold Ring", price: 599, description: "Moneekar Jewels Eternal Love Women's 18K Rose Gold and Silver Plated CZ Crystal Engagement Ring", imageUrl: "https://m.media-amazon.com/images/I/71K6Ky5iDRL._SY625_.jpg", category: "Jewellery", subcategory: "Rings" },
  { name: "Anklet with Charms", price: 450, description: "Mehrunnisa Fashion Crystals Ghungroo Charms Gold Tone Single Anklet for Girls", imageUrl: "https://m.media-amazon.com/images/I/51WBnG0uJgL._SX625_.jpg", category: "Jewellery", subcategory: "Anklets" },

  // Watches
  { name: "Analog Watch", price: 10000, description: "Tommy Hilfiger Quartz Analog Pink Dial Ceramic Strap Watch for Women", imageUrl: "https://m.media-amazon.com/images/I/61IxLAF8tTL._SY879_.jpg", category: "Watches", subcategory: "Analog Watches" },
  { name: "Digital Watch", price: 1525, description: "Casio Vintage A158WA-1DF Black Digital Dial Silver Stainless Steel Band", imageUrl: "https://m.media-amazon.com/images/I/61ybeKQto8L._SY879_.jpg", category: "Watches", subcategory: "Digital Watches" },
  { name: "Smartwatch", price: 1299, description: "Noise Twist Go Round dial Smartwatch with BT Calling, 1.39\" Display", imageUrl: "https://m.media-amazon.com/images/I/41g06cAmgkL._SX300_SY300_QL70_FMwebp_.jpg", category: "Watches", subcategory: "Smartwatches" },

  // Bags and Clutches
  { name: "Leather Handbag", price: 4999, description: "MOKOBARA The Reign Handbag Vegan Leather Top Handle Stylish Women Shoulder Bag", imageUrl: "https://m.media-amazon.com/images/I/71CJUGNe7vL._SY695_.jpg", category: "Bags and Clutches", subcategory: "Handbags" },
  { name: "Canvas Tote Bag", price: 1995, description: "DailyObjects Field Tote Bag | Canvas Tote Shoulder Bag Fits upto 14\" Laptop", imageUrl: "https://m.media-amazon.com/images/I/814vUC1k46L._SY695_.jpg", category: "Bags and Clutches", subcategory: "Tote Bags" },
  { name: "Evening Clutch", price: 879, description: "INOVERA (LABEL) Women Evening Hand Clutch | Ladies Party Wedding Purse with Chain Strap", imageUrl: "https://m.media-amazon.com/images/I/61F-SyaDVpL._SY695_.jpg", category: "Bags and Clutches", subcategory: "Clutches" },
  { name: "Backpack for Travel", price: 4195, description: "Urban Jungle by Safari Roam Briefpack 22 Liters Water Resistant", imageUrl: "https://m.media-amazon.com/images/I/61PXNboVCpL._SX679_.jpg", category: "Bags and Clutches", subcategory: "Backpacks" },
  { name: "Leather Wallet", price: 399, description: "HORNBULL Denial Navy Leather Wallet for Men | Leather Mens Wallet with RFID Blocking", imageUrl: "https://m.media-amazon.com/images/I/81zszsf9IWL._SX679_.jpg", category: "Bags and Clutches", subcategory: "Wallets" },

  // Footwear
  { name: "Running Sneakers", price: 709, description: "ASIAN Women's BLOSSOM-09 Sports Running Shoes with Ultra Max Cushion Technology", imageUrl: "https://m.media-amazon.com/images/I/71HRfiReRdL._SY695_.jpg", category: "Footwear", subcategory: "Sneakers" },
  { name: "Casual Sandals", price: 845, description: "HEALTH FIT Extra Soft Ortho Care Sandals Orthopaedic & Diabetic Daily Use Women's Sandal", imageUrl: "https://m.media-amazon.com/images/I/51FoSVOH9CL._SY695_.jpg", category: "Footwear", subcategory: "Sandals" },
  { name: "High Heels", price: 459, description: "Shoetopia Stylish Tie-up Heeled Sandals Women & Girls", imageUrl: "https://m.media-amazon.com/images/I/517KRBLNlsL._SY695_.jpg", category: "Footwear", subcategory: "Heels" },
  { name: "Leather Loafers", price: 2429, description: "egoss Lady Boss X Premium Genuine Leather Loafer Casual Shoes for Women", imageUrl: "https://m.media-amazon.com/images/I/61eUkqKnR2L._SY695_.jpg", category: "Footwear", subcategory: "Loafers" },
  { name: "Winter Boots", price: 1759, description: "FAUSTO Women's Flared Heel High Ankle Suede Leather Classic Winter Chelsea Boots", imageUrl: "https://m.media-amazon.com/images/I/51WjVo+iwtL._SY695_.jpg", category: "Footwear", subcategory: "Boots" },
  { name: "Flat Sandals", price: 1499, description: "tresmode VELENCIA Women's Flats Sandals Stylish Black - Ladies Dress Footwear", imageUrl: "https://m.media-amazon.com/images/I/41J4bcRFUML._SY695_.jpg", category: "Footwear", subcategory: "Flats" },
];

mongoose.connect('mongodb://localhost:27017/lookify', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('MongoDB connected');
    await Product.deleteMany(); // Clear existing products
    await Product.insertMany(products); // Add new products
    console.log('Products added');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error(err);
    mongoose.connection.close();
  });
