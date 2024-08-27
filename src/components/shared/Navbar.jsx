"use client";

import img from "../../../public/Logo_1 (1).png";
import Image from "next/image";
import { IoIosSearch, IoMdMenu, IoMdClose } from "react-icons/io";
import variable from "../../Styles/Navbar.module.scss";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [showNavigation, setShowNavigation] = useState(false);
  const handleNav = () => {
    setShowNavigation(!showNavigation);
  };
  return (
    <div className="sticky top-0 z-30">
      <nav className={variable.nav}>
        <Image src={img} width={150} height={150} alt="Logo image" />

        <ul className={showNavigation ? variable.showNav : ""}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/service">Service</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className={variable.navActions}>
          <p>
            <IoIosSearch size={24} color="black" />
          </p>
          <button>Appointment</button>
        </div>

        <IoIosMenu
          size={30}
          color="black"
          className={variable.menuicon}
          onClick={handleNav}
        ></IoIosMenu>
      </nav>
    </div>
  );
};

export default Navbar;
