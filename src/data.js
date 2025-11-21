/**
 * * ====================================================================
 * 1. PRODUCT DATA
 * The image paths below are relative to your 'public' folder (e.g., /images/Pomegranate-Main.jpg).
 * These are the actual paths intended for use in the application.
 * ====================================================================
 */
export const PRODUCTS = [
  {
    name: "Pomegranate",
    slug: "pomegranate",
    type: "fruit",
    details: {
      product: "pomegranate",
      variety: "sweet, type Bear Sualibra 12",
      size: "T",
      season: "November - May",
      origin: "Turkey",
    },
    images: {
      // Used for Home Mosaic and Category Page Card
      grid: "/images/Pomegranate-Main.jpg",
      // Used for Product Detail Page (Large Image)
      main: "/images/Pomegranate-Main.jpg",
      // Used for Product Detail Thumbnails (Small Images)
      thumbnails: [
        "/images/Pomegranate-1.jpg",
        "/images/Pomegranate-2.jpg",
        "/images/Pomegranate-3.jpg",
      ],
    },
  },
  {
    name: "Cucumber",
    slug: "cucumber",
    type: "vegetable",
    details: {
      product: "cucumber",
      variety: "smooth, spiny",
      size: "8-16 cm",
      season: "all year",
      origin: "Turkey",
    },
    images: {
      grid: "/images/Cucumber-Main.jpg",
      main: "/images/Cucumber-Main.jpg",
      thumbnails: [
        "/images/Cucumber-1.png",
        "/images/Cucumber-2.jpg",
        "/images/Cucumber-3.jpg",
      ],
    },
  },
  {
    name: "Tomatoe",
    slug: "tomatoe",
    type: "vegetable",
    details: {
      product: "tomatoe",
      variety: "pink, vine",
      size: "50-80 mm",
      season: "all year",
      origin: "Turkey",
    },
    images: {
      grid: "/images/Tomato-Main.jpg",
      main: "/images/Tomato-Main.jpg",
      thumbnails: [
        "/images/Tomato-1.jpg",
        "/images/Tomato-2.jpg",
        "/images/Tomato-3.png",
      ],
    },
  },
  {
    name: "Lemon",
    slug: "lemon",
    type: "fruit",
    details: {
      product: "lemon",
      variety: "meyer, inter",
      size: "54-70 mm",
      season: "August - April",
      origin: "Turkey",
    },
    images: {
      grid: "/images/Lemon-Main.jpg",
      main: "/images/Lemon-Main.jpg",
      thumbnails: [
        "/images/Lemon-1.jpg",
        "/images/Lemon-2.jpg",
        "/images/Lemon-3.jpg",
      ],
    },
  },
  {
    name: "Squash",
    slug: "squash",
    type: "vegetable",
    details: {
      product: "squash",
      variety: "T",
      size: "T",
      season: "T",
      origin: "Turkey",
    },
    images: {
      grid: "/images/Squash-Main.jpg",
      main: "/images/Squash-Main.jpg",
      thumbnails: [
        "/images/Squash-1.jpg",
        "/images/Squash-2.jpg",
        "/images/Squash-3.jpg",
      ],
    },
  },
  {
    name: "Mandarin",
    slug: "mandarin",
    type: "fruit",
    details: {
      product: "mandarin",
      variety: "murcott",
      size: "54-70 mm",
      season: "November - May",
      origin: "Turkey",
    },
    images: {
      grid: "/images/Mandarine-Main.jpg",
      main: "/images/Mandarine-Main.jpg",
      thumbnails: [
        "/images/Mandarine-1.jpg",
        "/images/Mandarine-2.png",
        "/images/Mandarine-3.jpg",
      ],
    },
  },
  {
    name: "Zucchini",
    slug: "zucchini",
    type: "vegetable",
    details: {
      product: "zucchini",
      variety: "california red, california yellow, kapia chi red, chi green",
      size: "150-300 gr / length",
      season: "November - June",
      origin: "Turkey",
    },
    images: {
      grid: "/images/Zucchini-Main.jpg",
      main: "/images/Zucchini-Main.jpg",
      thumbnails: [
        "/images/Zucchini-1.jpg",
        "/images/Zucchini-2.jpg",
        "/images/Zucchini-3.jpg",
      ],
    },
  },
  {
    name: "Pepper",
    slug: "pepper",
    type: "vegetable",
    details: {
      product: "pepper",
      variety: "T",
      size: "T",
      season: "T",
      origin: "Turkey",
    },
    images: {
      grid: "/images/Pepper-Main.jpg",
      main: "/images/Pepper-Main.jpg",
      thumbnails: [
        "/images/Pepper-1.jpg",
        "/images/Pepper-2.jpg",
        "/images/Pepper-3.jpg",
      ],
    },
  },
  // You can add more products here if needed
];

/**
 * * ====================================================================
 * 2. CORPORATE PAGE DATA
 * The image paths below are relative to your 'public' folder.
 * Example: '/images/corporate/aboutus.jpg' should be placed in public/images/corporate/
 * ====================================================================
 */
export const CORPORATE_PAGES = {
  "about-us": {
    title: "About us",
    // Used for Home Corporate Quick Links Card and CorporatePage large image
    Homeimage: "/images/Group-Team.jpg",
    image: "/images/Group-Team.jpg",
    content: `At Pokrovske Tarim, we take pride in cultivating the finest produce through dedication, innovation and care for nature. Our team works daily to bring healthy, fresh, and flavorful fruits and vegetables straight from the field to your table. We believe in quality at every stage, from seed selection to modern storage and delivery, ensuring freshness and premium taste that meets international standards. Our commitment extends beyond quality to responsible and sustainable farming practices.`,
  },
  "quality-policy": {
    title: "Quality policy",
    Homeimage: "/images/Premium-export.jpg",
    image: "/images/Premium-export.jpg",
    content: `Quality is the foundation of everything we do. From careful selection of seeds to modern storage and delivery, every step is managed to guarantee freshness, safety, and premium taste that meet most international standards. Our policy mandates strict adherence to global food safety certifications and continuous monitoring of our produce. We are dedicated to providing products that are not only delicious but also meet the highest standards of purity and health.`,
  },
  "vision-mission": {
    title: "Vision mission",
    Homeimage: "/images/Misson-1.png",
    image: "/images/Mission-Vision.jpg",
    content: `Our mission is to grow a sustainable future through responsible farming and strong partnerships. We aim to be a leading global supplier known for quality, transparency, and respect for both people and the planet. Our vision is a world where everyone has access to the highest quality fresh produce grown with integrity and care. We strive to innovate farming technologies to minimize our environmental footprint while maximizing nutritional value.`,
  },
  sustainability: {
    title: "Sustainability",
    Homeimage: "/images/Life.jpg",
    image: "/images/Life.jpg",
    content: `We believe in harmony between business and nature. By using eco-friendly technologies, reducing waste, and supporting local communities, our work contributes to a greener and healthier tomorrow. We employ water-saving irrigation techniques, natural pest control methods, and ensure our packaging is recyclable. Sustainability is not just a practice for us; it's a core value that guides every decision we make in the field and beyond.`,
  },
};

/**
 * * ====================================================================
 * 3. HELPER FUNCTIONS
 * ====================================================================
 */

/**
 * Retrieves all products filtered by type ('fruit' or 'vegetable').
 * @param {string} type - The product type slug.
 */
export const getProductsByType = (type) => {
  return PRODUCTS.filter((product) => product.type === type);
};

/**
 * Retrieves a single product by its slug.
 * @param {string} slug - The product slug.
 */
export const getProductBySlug = (slug) => {
  return PRODUCTS.find((product) => product.slug === slug);
};

/**
 * Retrieves a single corporate page by its slug.
 * @param {string} slug - The page slug.
 */
export const getCorporatePage = (slug) => {
  return CORPORATE_PAGES[slug];
};
