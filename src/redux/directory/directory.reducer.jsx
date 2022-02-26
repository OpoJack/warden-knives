const INITIAL_STATE = {
  sections: [
    {
      title: "ashi",
      // imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      imageUrl:
        "/images/knife-img/ashi/240stainlessgyuto/Ashi-Ginga-Stainless-Gyuto-240mm-Knife_1200x.jpeg", // local file in public/images/
      id: 1,
      linkUrl: "shop/ashi",
    },
    {
      title: "konosuke",
      // imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      imageUrl:
        "/images/knife-img/konosuke/210hd2wagyuto/konosuke-hd2-210mm-wa-gyuto-34.jpeg", // local file in public/images/
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "mazaki",
      // imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      imageUrl:
        "/images/knife-img/mazaki/210kasumigyuto/Mazaki-White2-Kasumi-Gyuto-210mm-Knife-Mazaki-chef-culinary-japanese-knife-knives_1200x.jpeg", // local file in public/images/
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "takeda",
      // imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      imageUrl:
        "/images/knife-img/takeda/165NasNakiri/Takeda-NAS-Nakiri-165mm-Knife_1200x.jpeg", // local file in public/images/
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "watanabe",
      // imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      imageUrl:
        "images/knife-img/watanabe/180mmProNakiri/180mm-Pro-Nakiri_files/nakkiri180_big1.jpg", // local file in public/images/
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
