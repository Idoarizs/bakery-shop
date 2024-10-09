// Assets
import { images } from "../assets";

// Icons
import { ImSpoonKnife } from "react-icons/im";
import { FaTruck, FaUtensils } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export const constants = {
  catalog: [
    {
      id: 1,
      image: images.product.icroissant,
      title: "Vanilla Croissant",
      price: "$38",
      productDetailId: 101,
    },
    {
      id: 2,
      image: images.product.ibread,
      title: "Soft Bread",
      price: "$23",
      productDetailId: 102,
    },
    {
      id: 3,
      image: images.product.icupcake,
      title: "Cream Cupcake",
      price: "$10",
      productDetailId: 103,
    },
    {
      id: 4,
      image: images.product.imaple,
      title: "Sweet Maple",
      price: "$8",
      productDetailId: 104,
    },
    {
      id: 5,
      image: images.product.ipilteza,
      title: "Crunchy Pilteza",
      price: "$23",
      productDetailId: 105,
    },
    {
      id: 6,
      image: images.product.ibrownies,
      title: "Chocolate Brownies",
      price: "$23",
      productDetailId: 106,
    },
    {
      id: 7,
      image: images.product.itoast,
      title: "Butter Toast",
      price: "$15",
      productDetailId: 107,
    },
    {
      id: 8,
      image: images.product.idanish,
      title: "Strawberry Danish",
      price: "$15",
      productDetailId: 108,
    },
  ],
  productDetails: [
    {
      id: 101,
      description:
        "Indulge in the ultimate pastry experience with our Vanilla Croissant—an exquisite blend of delicate, buttery layers that crumble with every bite. Encased within is a rich, smooth vanilla cream that adds a perfect balance of sweetness. Made from the finest ingredients, including real butter and premium vanilla, each croissant is baked to golden perfection, offering a satisfying crunch on the outside and a soft, melt-in-your-mouth texture inside. Whether enjoyed with coffee or on its own, our Vanilla Croissant is a moment of pure indulgence that you won’t want to miss.",
      ingredients: ["Flour", "Butter", "Vanilla Cream", "Sugar", "Yeast"],
      category: "Pastry",
      stock: 20,
      rating: 4.8,
    },
    {
      id: 102,
      description:
        "Discover the simple pleasures of home-baked goodness with our Soft Bread. This loaf is the perfect companion for your everyday meals, whether you're making sandwiches, toast, or enjoying it warm with butter. The tender crumb and delicate crust make it ideal for a wide range of uses, from breakfast to dinner. Made with high-quality ingredients like fresh milk and creamy butter, it promises a soft, fluffy texture and a wholesome, comforting flavor. Perfectly suited for those who appreciate the comforting embrace of traditional, homemade bread.",
      ingredients: ["Flour", "Yeast", "Milk", "Butter", "Sugar"],
      category: "Bread",
      stock: 15,
      rating: 4.5,
    },
    {
      id: 103,
      description:
        "Our Cream Cupcake is the epitome of dessert perfection. Each cupcake is soft, moist, and made from the finest ingredients, ensuring that every bite is rich and flavorful. The luscious cream topping is velvety smooth and lightly sweetened, making it a delightful contrast to the fluffy cake base. Whether you're celebrating a special occasion or simply treating yourself, these cupcakes are sure to please. With a melt-in-your-mouth texture, they offer a luxurious dessert experience that’s impossible to resist.",
      ingredients: ["Flour", "Butter", "Sugar", "Eggs", "Frosting"],
      category: "Dessert",
      stock: 50,
      rating: 4.9,
    },
    {
      id: 104,
      description:
        "Our Sweet Maple Syrup is nature's gift in its purest form, offering a deep, rich flavor that's both sweet and complex. Harvested from the finest maple trees, this syrup is a versatile addition to any kitchen. Drizzle it over your favorite breakfast foods like pancakes, waffles, or French toast, or use it to enhance desserts, sauces, and even savory dishes. The smooth, golden syrup adds a burst of natural sweetness, making it a pantry essential for anyone who enjoys the comforting taste of maple.",
      ingredients: ["Maple Syrup", "Sugar"],
      category: "Pastry",
      stock: 10,
      rating: 4.7,
    },
    {
      id: 105,
      description:
        "Crunchy Pilteza is a snack that’s as satisfying as it is savory. Made from a unique blend of shredded wheat and premium cheese, these bites are baked to a perfect golden crisp, offering a delightful crunch with every bite. Seasoned with a blend of spices, each bite bursts with flavor, making them the perfect snack for any time of day. Whether you're enjoying them on the go or pairing them with your favorite dips, Crunchy Pilteza is sure to become your go-to savory snack.",
      ingredients: ["Wheat", "Cheese", "Spices"],
      category: "Snack",
      stock: 30,
      rating: 4.6,
    },
    {
      id: 106,
      description:
        "Our Chocolate Brownies are crafted for chocolate lovers who crave intense, fudgy richness. Made with high-quality dark chocolate, these brownies are dense and gooey on the inside, with a slightly crisp top. Each bite reveals layers of deep, chocolatey flavor with a subtle hint of coffee to enhance the cocoa's natural bitterness. These decadent treats are perfect for any occasion, whether you're sharing them with friends or indulging in a quiet moment of chocolate bliss.",
      ingredients: ["Chocolate", "Butter", "Sugar", "Eggs", "Flour"],
      category: "Dessert",
      stock: 40,
      rating: 4.9,
    },
    {
      id: 107,
      description:
        "Butter Toast is the ultimate comfort food, combining the simplicity of fresh bread with the indulgence of creamy, melted butter. Toasted to golden perfection, each slice is crispy on the outside and soft on the inside. The rich butter spreads evenly, seeping into the warm bread, creating a perfect harmony of flavors and textures. It's the ideal snack for any time of day, whether you enjoy it plain or topped with your favorite jam.",
      ingredients: ["Bread", "Butter"],
      category: "Snack",
      stock: 25,
      rating: 4.4,
    },
    {
      id: 108,
      description:
        "Our Strawberry Danish is a delightful pastry that combines the buttery flakiness of traditional Danish dough with the sweetness of fresh strawberry jam. The result is a perfectly balanced treat that’s light, airy, and bursting with flavor. Each bite brings together the rich, buttery layers of the pastry with the fruity, sweet jam, creating a mouthwatering experience. Whether enjoyed as a breakfast treat or a mid-day snack, this Strawberry Danish is sure to brighten your day.",
      ingredients: ["Flour", "Butter", "Strawberry Jam", "Sugar"],
      category: "Pastry",
      stock: 20,
      rating: 4.7,
    },
  ],
  testimonial: [
    {
      id: "1",
      picture: "https://randomuser.me/api/portraits/men/42.jpg",
      name: "John Doe",
      review:
        "The chocolate brownies were absolutely delicious! The texture was perfect, and the rich flavor made it an unforgettable treat.",
    },
    {
      id: "2",
      picture: "https://randomuser.me/api/portraits/women/43.jpg", // Placeholder image
      name: "Emily Smith",
      review:
        "I tried the butter toast, and it exceeded my expectations! The crispy outside and buttery goodness inside made it a perfect snack.",
    },
    {
      id: "3",
      picture: "https://randomuser.me/api/portraits/women/32.jpg", // Placeholder image
      name: "Michael Brown",
      review:
        "The strawberry Danish was a wonderful treat for my morning coffee. The jam filling was sweet and the pastry flaky—perfectly balanced!",
    },
    {
      id: "4",
      picture: "https://randomuser.me/api/portraits/men/22.jpg", // Placeholder image
      name: "Samantha Lee",
      review:
        "I absolutely loved the Crunchy Pilteza! The savory flavor and crispy texture made it a go-to snack for me. Highly recommend!",
    },
  ],
  services: [
    {
      id: "1",
      icon: <ImSpoonKnife />,
      title: "Order Your Food",
      description:
        "Most restaurant marketing is targeted at getting new diners ones.",
    },
    {
      id: "2",
      icon: <FaTruck />,
      title: "Delivery & Pickup",
      description:
        "Most restaurant marketing is targeted at getting new diners ones.",
    },
    {
      id: "3",
      icon: <FaUtensils />,
      title: "Delicious Recipe",
      description:
        "Most restaurant marketing is targeted at getting new diners ones.",
    },
  ],
  customerService: [
    {
      id: "1",
      icon: <IoIosArrowForward />,
      title: "Customer Support",
      description:
        "Our support team is available around the clock to address any concerns or queries you may have.",
    },
    {
      id: "2",
      icon: <IoIosArrowForward />,
      title: "Feedback and Suggestions",
      description:
        "We value your feedback and are continuously working to improve Snappy. Your input is crucial in shaping the future of Snappy.",
    },
    {
      id: "3",
      icon: <IoIosArrowForward />,
      title: "Media Inquiries",
      description:
        "For media-related questions or press inquiries, please contact us at media@snappyapp.com.",
    },
  ],
};
