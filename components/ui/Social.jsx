import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaInstagram />, path: 'https://instagram.com' },
  { icon: <FaLinkedinIn />, path: 'https://linkedin.com' },
  { icon: <FaYoutube />, path: 'https://youtube.com' },
  { icon: <FaTwitter />, path: 'https://twitter.com' },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
