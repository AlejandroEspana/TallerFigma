export type Category = "Biryani" | "Pizza" | "Burger" | "Sandwich";

export interface FoodItem {
  id: string;
  name: string;
  category: Category;
  rating: number;
  reviews: number;
  distance: number;
  deliveryTime: number; // in mins
  price: number;
  calories: number;
  diameter: number; // in cm
  description: string;
  image: string;
  popular: boolean;
}

export const CATEGORIES: { name: Category; image: string }[] = [
  { name: "Biryani", image: "/Img1.png" },
  { name: "Pizza", image: "/Img2.png" },
  { name: "Burger", image: "/Img3.png" },
  { name: "Sandwich", image: "/Img4.png" },
];

export const FOODS: FoodItem[] = [
  {
    id: "f1",
    name: "Hyderabadi Biryani",
    category: "Biryani",
    rating: 4.8,
    reviews: 1050,
    distance: 2.5,
    deliveryTime: 20,
    price: 7.50,
    calories: 450,
    diameter: 15.05,
    description: "Hyderabadi biryani is a culinary masterpiece that tantalizes the senses with its aromatic spices, tender meat, and fragrant basmati rice. Originating from the vibrant city of the Hyaderabad in india, this iconic dish is a favorite among food lovers.",
    image: "/Img1.png",
    popular: true,
  },
  {
    id: "f2",
    name: "Bombay Biryani",
    category: "Biryani",
    rating: 4.5,
    reviews: 1320,
    distance: 3.5,
    deliveryTime: 25,
    price: 8.50,
    calories: 380,
    diameter: 15.05,
    description: "Bombay biryani is a culinary masterpiece that tantalizes the senses with its aromatic spices, tender panner, mater and fragrant basmati rice. Originating from the vibrant city of the Hyaderabad in india, this iconic dish is a must try.",
    image: "/Img5.png",
    popular: true,
  },
  {
    id: "f3",
    name: "onion capsicum pizza",
    category: "Pizza",
    rating: 4.9,
    reviews: 1550,
    distance: 2.5,
    deliveryTime: 20,
    price: 10.50,
    calories: 480,
    diameter: 18.05,
    description: "Onion capsicum pizza is a culinary masterpiece that tantalizes the senses with its aromatic spices, tender onion and capsicum and fragrant pizza base. Originating from the vibrant city of the Hyaderabad in india, this is iconic dish.",
    image: "/Img2.png",
    popular: true,
  },
  {
    id: "f4",
    name: "Panner pizza",
    category: "Pizza",
    rating: 4.2,
    reviews: 1130,
    distance: 3.5,
    deliveryTime: 25,
    price: 9.50,
    calories: 460,
    diameter: 12.05,
    description: "Panner and mater pizza is a culinary masterpiece that tantalizes the senses with its aromatic spices, tender panner, mater and fragrant pizza base.",
    image: "/Img5.png",
    popular: true,
  },
  {
    id: "f5",
    name: "Veg Burger",
    category: "Burger",
    rating: 4.2,
    reviews: 1130,
    distance: 2.5,
    deliveryTime: 20,
    price: 12.50,
    calories: 560,
    diameter: 6.05,
    description: "Veg burger is a culinary masterpiece that tantalizes the senses with its aromatic spices, tender aalu tiki and tomato, other and fragrant burger base.",
    image: "/Img3.png",
    popular: true,
  },
  {
    id: "f6",
    name: "Paneer Burger",
    category: "Burger",
    rating: 4.6,
    reviews: 1230,
    distance: 3.5,
    deliveryTime: 25,
    price: 8.50,
    calories: 460,
    diameter: 4.00,
    description: "Panner burger is a culinary masterpiece that tantalizes the senses with its aromatic spices, tender panner, aalu tiki and tomato, other and fragrant burger base.",
    image: "/Img5.png",
    popular: true,
  },
  {
    id: "f7",
    name: "Veg Sandwhic",
    category: "Sandwich",
    rating: 4.6,
    reviews: 1230,
    distance: 2.5,
    deliveryTime: 20,
    price: 7.50,
    calories: 460,
    diameter: 4.00,
    description: "Veg sandwhic is a culinary masterpiece that tantalizes the senses with its aromatic spices, tender panner, aalu and tomato, other and fragrant burger base.",
    image: "/Img4.png",
    popular: true,
  },
  {
    id: "f8",
    name: "Potato Sandwhic",
    category: "Sandwich",
    rating: 4.6,
    reviews: 1230,
    distance: 3.5,
    deliveryTime: 25,
    price: 6.50,
    calories: 400,
    diameter: 4.00,
    description: "Potato sandwhic is a culinary masterpiece.",
    image: "/Img4.png",
    popular: true,
  }
];
