const products = [
  {
    name: "Samsung Galaxy S25 Ultra",
    description: "Flagship smartphone with Snapdragon 8 Elite processor, 200MP camera, and 5000mAh battery. Features AI-powered photography and 7 years of software updates.",
    price: 1199,
    originalPrice: 1299,
    category: "Smartphones",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c",
    inStock: true,
    features: [
      "6.9-inch AMOLED display",
      "200MP + 50MP + 50MP + 10MP camera",
      "Snapdragon 8 Elite processor",
      "12GB RAM, 256GB storage",
      "5000mAh battery with fast charging"
    ],
    brand: "Samsung",
    discount: 8
  },
  {
    name: "iPhone 15 Pro Max",
    description: "Apple's most advanced iPhone with A17 Pro chip, titanium design, and pro camera system. Exceptional performance and photography capabilities.",
    price: 1099,
    originalPrice: 1199,
    category: "Smartphones",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1592286927505-4ebdb2e71b8b",
    inStock: true,
    features: [
      "6.7-inch Super Retina XDR display",
      "A17 Pro chip with 6-core CPU",
      "Pro camera system with 5x optical zoom",
      "Titanium design with USB-C",
      "Action button and Dynamic Island"
    ],
    brand: "Apple",
    discount: 8
  },
  {
    name: "OnePlus 13",
    description: "Flagship killer with incredible performance, 120Hz display, and ultra-fast charging. Perfect balance of features and price.",
    price: 699,
    originalPrice: 799,
    category: "Smartphones",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
    inStock: true,
    features: [
      "6.82-inch AMOLED 120Hz display",
      "Snapdragon 8 Gen 3",
      "50MP triple camera system",
      "5400mAh battery with 100W charging",
      "OxygenOS 15"
    ],
    brand: "OnePlus",
    discount: 13
  },
  {
    name: "Google Pixel 9 Pro",
    description: "Google's AI-powered smartphone with exceptional camera and clean Android experience. Best-in-class computational photography.",
    price: 899,
    originalPrice: 999,
    category: "Smartphones",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    inStock: true,
    features: [
      "6.7-inch OLED display",
      "Google Tensor G4 chip",
      "50MP main + 48MP ultrawide + 48MP telephoto",
      "Magic Editor and Best Take",
      "7 years of updates"
    ],
    brand: "Google",
    discount: 10
  },
  {
    name: "Xiaomi 15 Ultra",
    description: "Photography powerhouse with Leica optics and 200MP telephoto. Premium features at competitive pricing.",
    price: 999,
    originalPrice: 1099,
    category: "Smartphones",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1567581935884-3349723552ca",
    inStock: true,
    features: [
      "6.73-inch AMOLED display",
      "Snapdragon 8 Elite",
      "50MP + 50MP + 200MP + 50MP Leica cameras",
      "5410mAh battery",
      "HyperOS 2.0"
    ],
    brand: "Xiaomi",
    discount: 9
  },
  {
    name: "Honor Magic7 Pro",
    description: "Premium flagship with AI features, exceptional battery life, and stunning display. Great value proposition.",
    price: 799,
    originalPrice: 899,
    category: "Smartphones",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f",
    inStock: true,
    features: [
      "6.8-inch OLED 120Hz display",
      "Snapdragon 8 Gen 3",
      "50MP triple camera with AI",
      "5600mAh silicon-carbon battery",
      "100W wired + 80W wireless charging"
    ],
    brand: "Honor",
    discount: 11
  },
  {
    name: "Vivo X200 Pro",
    description: "Camera-centric flagship with Zeiss optics and advanced night photography. Sleek design meets powerful performance.",
    price: 849,
    originalPrice: 949,
    category: "Smartphones",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505",
    inStock: true,
    features: [
      "6.78-inch AMOLED curved display",
      "MediaTek Dimensity 9400",
      "50MP Zeiss triple camera",
      "6000mAh battery",
      "120W FlashCharge"
    ],
    brand: "Vivo",
    discount: 11
  },
  {
    name: "Nothing Phone (3)",
    description: "Unique transparent design with Glyph interface. Clean Android experience with innovative aesthetics.",
    price: 599,
    originalPrice: 649,
    category: "Smartphones",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2",
    inStock: true,
    features: [
      "6.7-inch OLED 120Hz display",
      "Snapdragon 8 Gen 2",
      "50MP dual camera system",
      "Glyph Interface 2.0",
      "4500mAh battery with 45W charging"
    ],
    brand: "Nothing",
    discount: 8
  },

  // LAPTOPS (7 products)
  {
    name: "MacBook Pro 14\" M5",
    description: "Apple's most powerful laptop with M5 chip. Perfect for creative professionals and developers with exceptional battery life.",
    price: 1999,
    originalPrice: 2199,
    category: "Laptops",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    inStock: true,
    features: [
      "14-inch Liquid Retina XDR display",
      "Apple M5 chip",
      "16GB unified memory",
      "512GB SSD storage",
      "Up to 22 hours battery life"
    ],
    brand: "Apple",
    discount: 9
  },
  {
    name: "Dell XPS 15",
    description: "Premium Windows laptop with stunning InfinityEdge display. Powerful performance for professionals and creators.",
    price: 1699,
    originalPrice: 1899,
    category: "Laptops",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45",
    inStock: true,
    features: [
      "15.6-inch 4K OLED touchscreen",
      "Intel Core i7-14th Gen",
      "32GB DDR5 RAM",
      "1TB NVMe SSD",
      "NVIDIA GeForce RTX 4060"
    ],
    brand: "Dell",
    discount: 11
  },
  {
    name: "ASUS ROG Zephyrus G16",
    description: "Gaming laptop that doesn't compromise on portability. High refresh rate display and powerful GPU for gaming on the go.",
    price: 1899,
    originalPrice: 2099,
    category: "Laptops",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302",
    inStock: true,
    features: [
      "16-inch QHD+ 240Hz display",
      "AMD Ryzen 9 7940HS",
      "32GB DDR5 RAM",
      "1TB PCIe 4.0 SSD",
      "NVIDIA GeForce RTX 4070"
    ],
    brand: "ASUS",
    discount: 10
  },
  {
    name: "HP Spectre x360 14",
    description: "Versatile 2-in-1 convertible laptop with stunning design. Touch screen and pen support for creative work.",
    price: 1399,
    originalPrice: 1599,
    category: "Laptops",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
    inStock: true,
    features: [
      "13.5-inch 3K2K OLED touchscreen",
      "Intel Core Ultra 7",
      "16GB LPDDR5 RAM",
      "1TB SSD",
      "HP Rechargeable MPP2.0 Pen included"
    ],
    brand: "HP",
    discount: 13
  },
  {
    name: "Lenovo ThinkPad X1 Carbon Gen 12",
    description: "Business laptop with legendary keyboard and durability. Lightweight design with enterprise-level security.",
    price: 1599,
    originalPrice: 1799,
    category: "Laptops",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    inStock: true,
    features: [
      "14-inch 2.8K OLED display",
      "Intel Core Ultra 7",
      "32GB LPDDR5X RAM",
      "1TB PCIe Gen 4 SSD",
      "MIL-STD-810H certified"
    ],
    brand: "Lenovo",
    discount: 11
  },
  {
    name: "Microsoft Surface Laptop 6",
    description: "Sleek Windows laptop with premium build quality. Perfect integration with Microsoft ecosystem.",
    price: 1299,
    originalPrice: 1449,
    category: "Laptops",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2",
    inStock: true,
    features: [
      "13.5-inch PixelSense touchscreen",
      "Snapdragon X Elite",
      "16GB RAM",
      "512GB SSD",
      "Up to 20 hours battery"
    ],
    brand: "Microsoft",
    discount: 10
  },
  {
    name: "Acer Swift 14 AI",
    description: "Affordable premium laptop with AI features. Great performance and battery life for everyday tasks.",
    price: 899,
    originalPrice: 999,
    category: "Laptops",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef",
    inStock: true,
    features: [
      "14-inch 2.5K IPS display",
      "Intel Core Ultra 7",
      "16GB RAM",
      "512GB SSD",
      "Windows 11 with Copilot"
    ],
    brand: "Acer",
    discount: 10
  },

  // HEADPHONES (6 products)
  {
    name: "Apple AirPods Pro 2",
    description: "Premium wireless earbuds with active noise cancellation and spatial audio. Seamless integration with Apple devices.",
    price: 249,
    originalPrice: 279,
    category: "Headphones",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7",
    inStock: true,
    features: [
      "Active Noise Cancellation",
      "Adaptive Audio and Transparency mode",
      "Spatial Audio with dynamic head tracking",
      "USB-C charging case",
      "Up to 6 hours listening time"
    ],
    brand: "Apple",
    discount: 11
  },
  {
    name: "Sony WH-1000XM6",
    description: "Industry-leading noise cancellation with exceptional sound quality. Premium comfort for long listening sessions.",
    price: 399,
    originalPrice: 449,
    category: "Headphones",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    inStock: true,
    features: [
      "Best-in-class noise cancellation",
      "30mm drivers with LDAC support",
      "40-hour battery life",
      "Multipoint Bluetooth connection",
      "Speak-to-Chat technology"
    ],
    brand: "Sony",
    discount: 11
  },
  {
    name: "Bose QuietComfort Ultra",
    description: "Legendary Bose comfort with immersive audio. Perfect for travelers and audiophiles.",
    price: 429,
    originalPrice: 479,
    category: "Headphones",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1545127398-14699f92334b",
    inStock: true,
    features: [
      "World-class noise cancellation",
      "Spatial Audio with head tracking",
      "24-hour battery life",
      "CustomTune sound calibration",
      "Premium leather finish"
    ],
    brand: "Bose",
    discount: 10
  },
  {
    name: "Samsung Galaxy Buds3 Pro",
    description: "Premium earbuds with intelligent ANC and Galaxy AI features. Excellent sound and ecosystem integration.",
    price: 249,
    originalPrice: 279,
    category: "Headphones",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
    inStock: true,
    features: [
      "Intelligent ANC with Galaxy AI",
      "360 Audio with head tracking",
      "30-hour total battery with case",
      "IPX7 water resistance",
      "Blade Lights design"
    ],
    brand: "Samsung",
    discount: 11
  },
  {
    name: "Sennheiser Momentum 4",
    description: "Audiophile-grade wireless headphones with incredible battery life. Premium build and sound signature.",
    price: 379,
    originalPrice: 429,
    category: "Headphones",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1577174881658-0f30157f5a99",
    inStock: true,
    features: [
      "42mm transducers",
      "60-hour battery life",
      "Adaptive ANC",
      "aptX Adaptive support",
      "Sound Personalization"
    ],
    brand: "Sennheiser",
    discount: 12
  },
  {
    name: "Nothing Ear (3)",
    description: "Transparent design earbuds with excellent sound. Great value with premium features and unique aesthetics.",
    price: 149,
    originalPrice: 169,
    category: "Headphones",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1590658165737-15a047b7d0d8",
    inStock: true,
    features: [
      "11mm drivers with Hi-Res Audio",
      "Advanced ANC up to 45dB",
      "36-hour total battery",
      "LHDC 5.0 codec support",
      "ChatGPT integration"
    ],
    brand: "Nothing",
    discount: 12
  },

  // SMART WATCHES (5 products)
  {
    name: "Apple Watch Series 10",
    description: "Most advanced Apple Watch with larger display and health features. Comprehensive fitness and health tracking.",
    price: 399,
    originalPrice: 449,
    category: "Smart Watches",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a",
    inStock: true,
    features: [
      "46mm Always-On Retina display",
      "Blood oxygen and ECG monitoring",
      "Sleep apnea detection",
      "Up to 18 hours battery",
      "Water resistant 50m"
    ],
    brand: "Apple",
    discount: 11
  },
  {
    name: "Samsung Galaxy Watch 7",
    description: "Comprehensive smartwatch with advanced health tracking. Perfect companion for Galaxy ecosystem.",
    price: 329,
    originalPrice: 369,
    category: "Smart Watches",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    inStock: true,
    features: [
      "1.5-inch Super AMOLED display",
      "BioActive sensor",
      "Advanced sleep coaching",
      "40-hour battery life",
      "5ATM + IP68 + MIL-STD-810H"
    ],
    brand: "Samsung",
    discount: 11
  },
  {
    name: "Google Pixel Watch 3",
    description: "Google's refined smartwatch with Fitbit integration. Clean Wear OS experience with health insights.",
    price: 349,
    originalPrice: 399,
    category: "Smart Watches",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1",
    inStock: true,
    features: [
      "1.4-inch AMOLED display",
      "Fitbit health tracking",
      "AI-powered running coach",
      "24-hour battery with fast charging",
      "5ATM water resistance"
    ],
    brand: "Google",
    discount: 13
  },
  {
    name: "Garmin Fenix 8",
    description: "Premium multisport GPS watch for serious athletes. Military-grade durability with advanced training features.",
    price: 999,
    originalPrice: 1099,
    category: "Smart Watches",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8",
    inStock: true,
    features: [
      "1.4-inch AMOLED display",
      "Built-in LED flashlight",
      "Up to 48 days battery life",
      "Advanced training metrics",
      "100m water rating with diving"
    ],
    brand: "Garmin",
    discount: 9
  },
  {
    name: "Amazfit Balance",
    description: "Affordable smartwatch with premium features. Great battery life and comprehensive health tracking.",
    price: 229,
    originalPrice: 259,
    category: "Smart Watches",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1617043786394-f977fa12eddf",
    inStock: true,
    features: [
      "1.5-inch AMOLED display",
      "Dual-band GPS",
      "14-day battery life",
      "150+ sports modes",
      "Zepp AI wellness coach"
    ],
    brand: "Amazfit",
    discount: 12
  },

  // TABLETS (2 products)
  {
    name: "iPad Pro 13\" M5",
    description: "Most powerful iPad ever with M5 chip. Professional-grade tablet for creative work and productivity.",
    price: 1299,
    originalPrice: 1399,
    category: "Tablets",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
    inStock: true,
    features: [
      "13-inch Ultra Retina XDR display",
      "Apple M5 chip",
      "8GB RAM, 256GB storage",
      "Face ID and Apple Pencil Pro support",
      "All-day battery life"
    ],
    brand: "Apple",
    discount: 7
  },
  {
    name: "Samsung Galaxy Tab S10 Ultra",
    description: "Premium Android tablet with stunning AMOLED display. Desktop-like experience with DeX mode.",
    price: 1199,
    originalPrice: 1299,
    category: "Tablets",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764",
    inStock: true,
    features: [
      "14.6-inch Dynamic AMOLED 2X display",
      "Snapdragon 8 Gen 3",
      "12GB RAM, 256GB storage",
      "S Pen included",
      "DeX mode for desktop experience"
    ],
    brand: "Samsung",
    discount: 8
  },

  // SMART HOME (2 products)
  {
    name: "Amazon Echo Hub",
    description: "Central smart home control panel with Alexa. Manage all your smart devices from one touchscreen display.",
    price: 179,
    originalPrice: 199,
    category: "Smart Home",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827",
    inStock: true,
    features: [
      "8-inch touchscreen display",
      "Built-in Alexa voice control",
      "Works with 200,000+ devices",
      "Smart home automations",
      "Camera hub with live view"
    ],
    brand: "Amazon",
    discount: 10
  },
  {
    name: "Google Nest Hub Max",
    description: "Smart display with Google Assistant. Video calls, smart home control, and entertainment in one device.",
    price: 229,
    originalPrice: 259,
    category: "Smart Home",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1601524909162-ae8725290836",
    inStock: true,
    features: [
      "10-inch HD touchscreen",
      "Nest Cam built-in",
      "Stereo speakers",
      "Google Assistant voice control",
      "YouTube, Netflix, and more"
    ],
    brand: "Google",
    discount: 12
  }
];

module.exports = products;
