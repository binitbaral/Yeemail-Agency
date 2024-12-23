import React, { useState } from "react";
import Logo from "../../assets/1.png";
import { motion } from "framer-motion";
import { slideBottom } from "../../utility/animation";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavbarLinks = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Services", link: "#services" },
  { id: 3, title: "Our Strategy", link: "#strategy" },
  { id: 4, title: "Benefits", link: "#testimonials" },
  { id: 5, title: "Contact Us", link: "#contact" },
];

const logoVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); 

  const handleSmoothScroll = (event, target) => {
    event.preventDefault();

    if (target === "/") {
      window.location.reload();
    } else {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }

    setMenuOpen(false); 
  };

  const handleBookAudit = () => {
    window.location.href = "https://cal.com/yeemail-agency/15min";
  };

  return (
    <motion.nav
      variants={slideBottom(0.2)}
      initial="initial"
      animate="animate"
      className="container mx-auto flex justify-between items-center shadow-lg"
      style={{
        background: "linear-gradient(90deg, rgba(85, 85, 85, 1) 0%, rgba(84, 84, 84, 1) 100%)",
        padding: "15px 30px",
        borderRadius: "20px",
        width: "100%",
        position: "relative",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
        marginTop: "20px",
      }}
    >
      {/* Logo section with animation */}
      <motion.div
        variants={logoVariants}
        className="flex items-center justify-center cursor-pointer"
        whileHover={{ scale: 1.1 }}
      >
        <img
          src={Logo}
          alt="Hustle Logo"
          className="w-[90px] md:w-[100px] lg:w-[110px] transition-transform duration-300"
        />
      </motion.div>

      {/* Hamburger icon */}
      <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <AiOutlineClose size={30} color="#fff" />
        ) : (
          <AiOutlineMenu size={30} color="#fff" />
        )}
      </div>

      {/* Links and Button section */}
      <div className={`md:flex ${menuOpen ? "flex" : "hidden"} flex-col md:flex-row items-center md:gap-6 w-full justify-center text-center`}>
        <ul className="flex flex-col md:flex-row gap-4 md:gap-6 w-full justify-center">
          {NavbarLinks.map((link) => (
            <li key={link.id} className="relative group">
              <motion.a
                className="uppercase text-xs lg:text-sm font-semibold tracking-wide transition duration-300 ease-in-out"
                href={link.link}
                onClick={(e) => handleSmoothScroll(e, link.link)}
                style={{ color: "#fff" }}
                whileHover={{ color: "#FF8C00", scale: 1.05 }}
              >
                {link.title}
              </motion.a>
              <span className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-[#FF8C00] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Button section */}
        <motion.div
          className="md:ml-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.button
            className="px-4 py-2 rounded-full shadow-md transition duration-300 ease-in-out"
            style={{
              background: "#C65D0D",
              color: "#fff",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
              whiteSpace: "nowrap",  // Ensures "Book an Audit" stays in a single line
            }}
            whileHover={{ background: "#3e3e3e", color: "#fff" }}
            onClick={handleBookAudit}
          >
            Book A Free Audit
          </motion.button>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
