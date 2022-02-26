const SHOP_DATA = {
  services: {
    id: 1,
    title: "Sharpening Services",
    routeName: "sharpening",
    items: [
      {
        id: 1,
        name: "Knife sharpening",
        imageUrl:
          "https://s3.amazonaws.com/images.gearjunkie.com/uploads/2017/10/peter-nowlan-knife-sharpening.jpg",
        price: 15,
        description:
          "General price for all types of knives. All sharpening is performed on whetstones.",
      },
      {
        id: 2,
        name: "Knife thinning",
        imageUrl:
          "https://s3.amazonaws.com/images.gearjunkie.com/uploads/2017/10/peter-nowlan-knife-sharpening.jpg",
        price: 45,
        description:
          "Thinning involves width reduction of the bevel behind the main edge to improve the cutting performance of the main edge.",
      },
    ],
  },
  products: {
    id: 2,
    routeName: "products",
    knives: {},
    accessories: {},
    merch: {
      clothing: [
        {
          id: 5000,
          name: "T-shirt",
          imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
          price: 16,
        },
        {
          id: 5001,
          name: "Warden Knives Hat",
          imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
          price: 16,
        },
      ],
    },
    items: [
      {
        id: 10,
        name: "Adidas NMD",
        imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
        price: 220,
      },
      {
        id: 11,
        name: "Adidas Yeezy",
        imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
        price: 280,
      },
      {
        id: 12,
        name: "Black Converse",
        imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
        price: 110,
      },
      {
        id: 13,
        name: "Nike White AirForce",
        imageUrl: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
        price: 160,
      },
      {
        id: 14,
        name: "Nike Red High Tops",
        imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
        price: 160,
      },
      {
        id: 15,
        name: "Nike Brown High Tops",
        imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
        price: 160,
      },
      {
        id: 16,
        name: "Air Jordan Limited",
        imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
        price: 190,
      },
      {
        id: 17,
        name: "Timberlands",
        imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
        price: 200,
      },
    ],
  },
};

export default SHOP_DATA;
