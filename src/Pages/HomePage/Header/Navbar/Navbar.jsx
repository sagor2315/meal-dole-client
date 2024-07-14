import React, { useEffect, useState } from "react";
import logo from "../../../../assets/siteLogo.png";
import { IoIosNotifications } from "react-icons/io";

import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  NewspaperIcon,
  RectangleGroupIcon,
  TagIcon,
} from "@heroicons/react/24/solid";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuthentication from "../../../../Hooks/useAuthentication";

const navListMenuItems = [
  {
    title: "",
    // description: "Read insightful articles, tips, and expert opinions.",
    icon: NewspaperIcon,
  },
  {
    title: "Dashboard",
    // description: "Find the perfect solution for your needs.",
    icon: RectangleGroupIcon,
  },
  {
    title: "",
    // description: "Explore limited-time deals and bundles",
    icon: TagIcon,
  },
];

const NavListMenu = () => {
  const navigate = useNavigate();
  const { LogOutUser, users } = useAuthentication();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const img =
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80";
  const handleLogOut = () => {
    LogOutUser()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderItems = navListMenuItems.map(({ icon, title }, key) => (
    <div key={key}>
      <MenuItem className="flex items-center gap-3 rounded-lg">
        <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
          {" "}
          {React.createElement(icon, {
            strokeWidth: 2,
            className: "h-6 text-gray-900 w-6",
          })}
        </div>
        <div>
          <div
            // variant="h6"
            // as="div"
            // color="blue-gray"
            className="flex items-center text-sm font-bold"
          >
            {key === 2 ? (
              <Button onClick={handleLogOut}>Logout</Button>
            ) : key === 0 ? (
              users?.displayName
            ) : (
              <Link to="/dashboard">{title}</Link>
            )}
          </div>
        </div>
      </MenuItem>
    </div>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        {users ? (
          <MenuHandler>
            <Typography as="div" variant="small" className="font-medium">
              <ListItem
                className="flex items-center gap-2 py-0 font-medium text-gray-900"
                selected={isMenuOpen || isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              >
                <Avatar
                  variant="circular"
                  size="md"
                  alt="tania andrew"
                  className=""
                  referrerPolicy="no-referrer"
                  src={users?.photoURL || img}
                />
              </ListItem>
            </Typography>
          </MenuHandler>
        ) : (
          ""
        )}

        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-1 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
};

const NavList = () => {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 ">
      <Typography
        variant="small"
        color="blue-gray"
        className="font-medium text-base"
      >
        <NavLink
          tp="/"
          className="flex items-center gap-2 py-2 pr-4 text-white"
        >
          Home
        </NavLink>
      </Typography>

      <Typography
        variant="small"
        color="blue-gray"
        className="font-medium text-base"
      >
        <NavLink
          to="/meals"
          className="flex items-center gap-2 py-2 pr-4 text-white"
        >
          Meals
        </NavLink>
      </Typography>

      <Typography
        variant="small"
        color="blue-gray"
        className="font-medium text-base"
      >
        <NavLink
          to="/upcomingMeal"
          className="flex items-center gap-2 py-2 pr-4 text-white"
        >
          Upcoming Meals
        </NavLink>
      </Typography>

      <Typography
        variant="small"
        as="div"
        color="blue-gray"
        className="font-medium text-base"
      >
        <div className="flex relative items-center gap-2 py-2 pr-0.5 text-white">
          <IoIosNotifications className="text-white text-xl relative" />

          <h1 className="text-sm absolute text-yellow-500 top-0 lg:right-0 font-fontSans">
            0
          </h1>
        </div>
      </Typography>
    </List>
  );
};

const NavbarWithMegaMenu = () => {
  const { users } = useAuthentication();
  const [openNav, setOpenNav] = React.useState(false);

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar
      color="transparent"
      className={`mx-auto px-4 py-2  ${
        isVisible
          ? "bg-[#181818] z-40 top-0 fixed shadow-black shadow transition-transform duration-500"
          : "bg-primaryColor transition-transform duration-500"
      } w-full`}
      fullWidth
    >
      <div className="flex items-center justify-between text-white">
        <Typography variant="h1" className="mr-4 cursor-pointer py-1.5 lg:ml-2">
          <span className="flex items-center gap-2">
            <img className="md:w-10 md:h-10 w-7 h-7" src={logo} alt="" />
            <h1 className="md:text-2xl text-xl font-bold">
              Meal<span className="text-yellow-500">Dole</span>
            </h1>
          </span>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <NavListMenu />
          {users ? (
            ""
          ) : (
            <Link to="/login">
              <Button size="sm" className="px-8 py-4 bg-[#C17FD1]">
                Join Us
              </Button>
            </Link>
          )}
        </div>
        <IconButton
          variant="text"
          color="white"
          as="div"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex flex-col w-full flex-nowrap items-center gap-2 lg:hidden">
          <NavListMenu />
          <Link to="/login">
            <Button variant="gradient" size="sm">
              Join Us
            </Button>
          </Link>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default NavbarWithMegaMenu;
