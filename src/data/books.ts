interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  coverUrl: string;
  price: string;
  pdfLink: string;
  category: string;
}

export const books: Book[] = [
  {
    id: 1,
    title: "Hide and Seeek",
    author: "Karan Kaul",
    description: "How does your night go from a game of Hide and Seek....",
    coverUrl: "https://res.cloudinary.com/dw5ow19cc/image/upload/v1735221945/special/h3gqwn6zyxrrwi2lfioc.png",
    price: "₹499",
    pdfLink: "https://drive.google.com/uc?export=download&id=16DBfgFH9qhKiJyV0YhLKfZnldoACTuW_",
    category: "Mystery"
  },
  {
    id: 2,
    title: "Hide and Seek 2",
    author: "Karan Kaul",
    description: "Two years ago I lost everything. I thought I could start a new life...",
    coverUrl: "https://res.cloudinary.com/dw5ow19cc/image/upload/v1735221945/special/kuz3qvfr8vznozmksble.png",
    price: "₹599",
    pdfLink: "https://drive.google.com/uc?export=download&id=1nvOIQhP_AO960BFlDE5j-zPRv5WycxQU",
    category: "Mystery"
  },
  // Add more books for each category...
  {
    id: 3,
    title: "Hide and Seek 3",
    author: "Karan Kaul",
    description: "Tori and her friends use an ouija board...",
    coverUrl: "https://res.cloudinary.com/dw5ow19cc/image/upload/v1735221945/special/pgty37tsudgxjv9lnrbw.png",
    price: "₹699",
    pdfLink: "https://drive.google.com/uc?export=download&id=16KrXuin0tlKm4GXOZHTVNFxDnHYRcqMG",
    category: "Mystery"
  }
];