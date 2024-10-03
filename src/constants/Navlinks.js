import { AiFillAppstore } from "react-icons/ai";
import { RiFilmFill } from "react-icons/ri";
import { PiTelevisionFill } from "react-icons/pi";
import { FaBookmark } from "react-icons/fa";

export const navLinks = [
  {
    id: 0,
    href: "/",
    name: "Trending",
    icon: <AiFillAppstore />,
  },
  {
    id: 1,
    href: "/movies",
    name: "Movies",
    icon: <RiFilmFill />,
  },
  {
    id: 2,
    href: "/tv-series",
    name: "TV Series",
    icon: <PiTelevisionFill />,
  },
  {
    id: 3,
    href: "/bookmarks",
    name: "Bookmarks",
    icon: <FaBookmark />,
  },
];
