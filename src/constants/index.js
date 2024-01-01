const slidesInformation = [
  {
    id: 0,
    backgroundUrl:
      "https://firebasestorage.googleapis.com/v0/b/wristmall-6f3a3.appspot.com/o/gifs%2Fslide%20bg%2001.mp4?alt=media&token=f47e3743-e490-4a41-94c6-bed6857d6cd9",
    subTitle: "A Dramatic Change In",
    title: "Your Style",
  },
  {
    id: 1,
    backgroundUrl:
      "https://firebasestorage.googleapis.com/v0/b/wristmall-6f3a3.appspot.com/o/gifs%2Fslide%20bg%2002.mp4?alt=media&token=6a801302-7d1d-4f21-bc0f-979404c73ff6",
    subTitle: "All Our Products Are ",
    title: "Unique...",
  },
];

const categoriesInformation = {
  backgorungUrl:
    "https://firebasestorage.googleapis.com/v0/b/wristmall-6f3a3.appspot.com/o/background%20images%2Fcategories%20bg.jpg?alt=media&token=c1a1e59a-4c7c-4a8e-8c9e-161e6f0db620",
  listOfcategories: [
    {
      categoryTitle: "New",
      bgUrl:
        "https://firebasestorage.googleapis.com/v0/b/wristmall-6f3a3.appspot.com/o/background%20images%2Fcategory%20slide%20bg%2001.jpg?alt=media&token=7a797997-4123-40ad-9865-fbe77003c2f6",
    },
    {
      categoryTitle: "Limited",
      bgUrl:
        "https://firebasestorage.googleapis.com/v0/b/wristmall-6f3a3.appspot.com/o/background%20images%2Fcategory%20slide%20bg%2002.jpg?alt=media&token=8820bbbe-ad68-438c-b3b8-c5808efbc012",
    },
    {
      categoryTitle: "Divers",
      bgUrl:
        "https://firebasestorage.googleapis.com/v0/b/wristmall-6f3a3.appspot.com/o/background%20images%2Fcategory%20slide%20bg%2003.jpg?alt=media&token=011c8c45-3529-4cf7-9638-47f09dd319de",
    },
    {
      categoryTitle: "Case Material",
      bgUrl:
        "https://firebasestorage.googleapis.com/v0/b/wristmall-6f3a3.appspot.com/o/background%20images%2Fcategory%20slide%20bg%2004.jpg?alt=media&token=bdd1991c-6abb-4855-b15c-b6aa5a9a4a9c",
    },
    {
      categoryTitle: "Band Material",
      bgUrl:
        "https://firebasestorage.googleapis.com/v0/b/wristmall-6f3a3.appspot.com/o/background%20images%2Fcategory%20slide%20bg%2005.jpg?alt=media&token=824853e3-b3c7-4887-bc58-5f19e21da464",
    },
    {
      categoryTitle: "Movement",
      bgUrl:
        "https://firebasestorage.googleapis.com/v0/b/wristmall-6f3a3.appspot.com/o/background%20images%2Fcategory%20slide%20bg%2006.jpg?alt=media&token=b799fca2-739e-4e1a-9f42-c6c59ac20ac0",
    },
  ],
};

const stampToTime = (stamp) => {
  const date = new Date(stamp * 1000);

  return date.toLocaleDateString("en-US");
};

const shopHeroSectionInfo = [
  {
    title: "Timelessly Chic Watches 🕒",
    desc: "Explore our exquisite collection of timepieces that marry timeless elegance with modern sophistication. From classic leather straps to sleek metal bands, our watches are designed to elevate your style and keep you punctual in the most fashionable way possible.",
    bgUrl:
      "https://firebasestorage.googleapis.com/v0/b/wristmall-6f3a3.appspot.com/o/background%20images%2Fshop%20hero%20slide%2001.jpg?alt=media&token=6846f178-7573-467e-aaa0-36ed7512dd5f",
  },
  {
    title: "Precision in Every Second ⌚️",
    desc: "Discover a world of precision and style with our curated selection of watches. Whether you're after a statement piece for formal occasions or a reliable everyday companion, our watches combine impeccable craftsmanship with cutting-edge design to ensure you always make a stylish statement, on time, every time.",
    bgUrl:
      "https://firebasestorage.googleapis.com/v0/b/wristmall-6f3a3.appspot.com/o/background%20images%2Fshop%20hero%20slide%2002.jpg?alt=media&token=7b70d7fb-947d-492a-9c00-2d9d623de04c",
  },
  {
    title: "Adventure Awaits: Explore Our Watch World 🌍",
    desc: "Embark on a journey of exploration and style with our diverse range of watches suited for every adventurer. With features like water resistance, sturdy construction, and rugged yet fashionable designs, our watches are built to accompany you on all your escapades without compromising on style.",
    bgUrl:
      "https://firebasestorage.googleapis.com/v0/b/wristmall-6f3a3.appspot.com/o/background%20images%2Fshop%20hero%20slide%2003.jpg?alt=media&token=8a0a964c-e429-44df-a979-364bf7d59707",
  },
  {
    title: "Timeless Treasures: Uncover Your Perfect Watch ⏱️",
    desc: "Delve into our treasure trove of timeless watches and find the perfect piece to complement your individual style. Our carefully curated collection offers a variety of designs, from vintage-inspired classics to sleek, modern marvels, ensuring there's a perfect timepiece waiting to adorn your wrist.",
    bgUrl:
      "https://firebasestorage.googleapis.com/v0/b/wristmall-6f3a3.appspot.com/o/background%20images%2Fshop%20hero%20slide%2004.jpg?alt=media&token=6d24e40e-a2b0-4ab4-b2c1-2484ba9c25b0",
  },
];

const supportedProductFilters = {
  categories: categoriesInformation.listOfcategories.map(
    (c) => c.categoryTitle
  ),
};

const routesInfo = [
  { title: "Home", path: "/WristMall/" },
  { title: "Shop", path: "/WristMall/Shop" },
  { title: "Blogs", path: "/WristMall/Blogs" },
  { title: "َAbout Me", path: "/WristMall/AboutMe" },
];

export {
  slidesInformation,
  categoriesInformation,
  stampToTime,
  shopHeroSectionInfo,
  supportedProductFilters,
  routesInfo,
};
