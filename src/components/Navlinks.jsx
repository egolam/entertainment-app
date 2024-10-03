import Link from "next/link";

const Navlinks = ({ href, icon }) => {
  return (
    <li className="w-full">
      <Link
        href={href}
        className="text-2xl text-greyish-blue hover:text-primary-red transition-colors duration-100 w-full flex justify-center py-6"
      >
        {icon}
      </Link>
    </li>
  );
};

export default Navlinks;
