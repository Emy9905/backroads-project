import img1 from "../images/tour-1.jpeg";
import img2 from "../images/tour-2.jpeg";
import img3 from "../images/tour-3.jpeg";
import img4 from "../images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "Home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const teste = [
  {
    id: 1,
    title: "Saving Money",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: "fas fa-wallet fa-fw",
  },
  {
    id: 2,
    title: "Endless Hiking",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: "fas fa-tree fa-fw",
  },
  {
    id: 3,
    title: "Amazing content",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: "fas fa-socks fa-fw",
  },
];

export const tourLinks = [
  {
    id: 1,
    title: "Tibet Adventure",
    date: "August 26th, 2020",
    photo: img1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "China",
    duration: "6 Days",
    price: "from £2100",
  },
  {
    id: 2,
    title: "Best Of Java",
    date: "October 1th, 2020",
    photo: img2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "Indonesia",
    duration: "11 Days",
    price: "From £1400",
  },
  {
    id: 3,
    title: "Explore Hong Kong",
    date: "September 15th, 2020",
    photo: img3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "Hong Kong",
    duration: "8 Days",
    price: "From £5000",
  },
  {
    id: 4,
    title: "Kenya Highlights",
    date: "December 5th, 2019",
    photo: img4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "Kenya",
    duration: "20 Days",
    price: "From £3300",
  },
];
