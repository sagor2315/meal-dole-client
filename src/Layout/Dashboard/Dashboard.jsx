import React from "react";
import logo from "../../assets/siteLogo.png";
import {
  Drawer,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import { GiAlliedStar, GiHotMeal, GiMeal } from "react-icons/gi";
import { NavLink, Outlet } from "react-router-dom";
import {
  MdDensitySmall,
  MdHome,
  MdManageAccounts,
  MdOutlineReviews,
  MdUpcoming,
} from "react-icons/md";
import { FaBowlFood } from "react-icons/fa6";

import { RxCross2 } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { GrUserAdmin } from "react-icons/gr";
import { IoAddCircleSharp } from "react-icons/io5";
import useAdmin from "../../Hooks/useAdmin/useAdmin";
import useMealsRequest from "../../Hooks/useMealsRequest/useMealsRequest";

const DrawerWithNavigation = () => {
  const [mealRequest] = useMealsRequest();
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const [isAdmin] = useAdmin();

  return (
    <div className="flex md:flex-row flex-col">
      <div className="">
        <React.Fragment>
          <List className="min-w-20 md:h-full bg-[#0F2139] text-white md:flex-col flex-row md:flex-nowrap flex-wrap">
            <ListItem onClick={openDrawer} className="flex justify-center">
              <ListItemPrefix>
                <button>
                  <MdDensitySmall />
                </button>
              </ListItemPrefix>
            </ListItem>

            {isAdmin ? (
              <div className="md:block hidden ">
                {/* For Admin */}
                <div className="text-white h-screen">
                  <NavLink to="/dashboard/adminProfile">
                    <ListItem>
                      <ListItemPrefix>
                        <GrUserAdmin className="text-xl font-bold" />
                      </ListItemPrefix>
                    </ListItem>
                  </NavLink>

                  <NavLink to="/dashboard/manageUsers">
                    <ListItem>
                      <ListItemPrefix>
                        <MdManageAccounts className="text-2xl font-bold" />
                      </ListItemPrefix>
                    </ListItem>
                  </NavLink>

                  <NavLink to="/dashboard/addMeals">
                    <ListItem>
                      <ListItemPrefix>
                        <IoAddCircleSharp className="text-xl font-bold" />
                      </ListItemPrefix>
                    </ListItem>
                  </NavLink>

                  <NavLink to="/dashboard/allMeals">
                    <ListItem>
                      <ListItemPrefix>
                        <GiHotMeal className="text-xl font-bold" />
                      </ListItemPrefix>
                    </ListItem>
                  </NavLink>

                  <NavLink to="/dashboard/allReviews">
                    <ListItem>
                      <ListItemPrefix>
                        <GiAlliedStar className="text-xl font-bold" />
                      </ListItemPrefix>
                    </ListItem>
                  </NavLink>

                  <NavLink to="/dashboard/serveMeals">
                    <ListItem>
                      <ListItemPrefix>
                        <FaBowlFood className="text-xl font-bold" />
                      </ListItemPrefix>
                    </ListItem>
                  </NavLink>

                  <NavLink to="/dashboard/upcomingMeals">
                    <ListItem>
                      <ListItemPrefix>
                        <MdUpcoming className="text-xl font-bold" />
                      </ListItemPrefix>
                    </ListItem>
                  </NavLink>
                </div>

                <div className="h-[1px] bg-black my-1"></div>

                <NavLink to="/">
                  <ListItem className="text-white">
                    <ListItemPrefix>
                      <MdHome className="text-xl font-bold text-white" />
                    </ListItemPrefix>
                  </ListItem>
                </NavLink>
              </div>
            ) : (
              <div className="text-white h-screen md:block hidden">
                <div className="text-white">
                  <NavLink to="/dashboard/myProfile">
                    <ListItem>
                      <ListItemPrefix>
                        <CgProfile className="text-xl font-bold" />
                      </ListItemPrefix>
                    </ListItem>
                  </NavLink>

                  <NavLink to="/dashboard/requestedMeals">
                    <ListItem>
                      <ListItemPrefix>
                        <GiMeal className="text-xl font-bold" />
                      </ListItemPrefix>
                      <ListItemSuffix></ListItemSuffix>
                    </ListItem>
                  </NavLink>

                  <NavLink to="/dashboard/myReviews">
                    <ListItem>
                      <ListItemPrefix>
                        <MdOutlineReviews className="text-xl font-bold" />
                      </ListItemPrefix>
                    </ListItem>
                  </NavLink>
                </div>

                <div className="h-[1px] bg-black my-1"></div>

                <NavLink to="/">
                  <ListItem>
                    <ListItemPrefix>
                      <MdHome className="text-xl font-bold " />
                    </ListItemPrefix>
                  </ListItem>
                </NavLink>
              </div>
            )}

            {/* <div className="md:block hidden">
              <ListItem className="flex justify-center">
                <ListItemPrefix className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </ListItemPrefix>
              </ListItem>
              <ListItem className="flex justify-center">
                <ListItemPrefix>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                </ListItemPrefix>
              </ListItem>
              <ListItem className="flex justify-center">
                <ListItemPrefix>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z"
                      clipRule="evenodd"
                    />
                  </svg>
                </ListItemPrefix>
              </ListItem>
              <ListItem className="flex justify-center">
                <ListItemPrefix>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </ListItemPrefix>
              </ListItem>
              <ListItem className="flex justify-center">
                <ListItemPrefix>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </ListItemPrefix>
              </ListItem>
            </div> */}
          </List>

          <Drawer
            open={open}
            onClose={closeDrawer}
            className="overflow-y-scroll bg-[#0F2139] "
          >
            <div className="mb-2 flex items-center justify-between p-4">
              <Typography variant="h5" color="blue-gray">
                <span className="flex items-center gap-2">
                  <img className="md:w-10 md:h-10 w-7 h-7" src={logo} alt="" />
                  <h1 className="md:text-2xl text-xl font-bold text-white">
                    Meal<span className="text-yellow-500">Dole</span>
                  </h1>
                </span>
              </Typography>
              <IconButton
                variant="text"
                color="blue-gray"
                onClick={closeDrawer}
              >
                <RxCross2 className="text-xl font-bold" />
              </IconButton>
            </div>
            {isAdmin ? (
              <List>
                {/* For Admin */}
                <List className="text-white">
                  <NavLink to="/dashboard/adminProfile">
                    <ListItem>
                      <ListItemPrefix>
                        <GrUserAdmin className="text-xl font-bold" />
                      </ListItemPrefix>
                      Admin Profile
                    </ListItem>
                  </NavLink>

                  <NavLink to="/dashboard/manageUsers">
                    <ListItem>
                      <ListItemPrefix>
                        <MdManageAccounts className="text-2xl font-bold" />
                      </ListItemPrefix>
                      Manage Users
                    </ListItem>
                  </NavLink>

                  <NavLink to="/dashboard/addMeals">
                    <ListItem>
                      <ListItemPrefix>
                        <IoAddCircleSharp className="text-xl font-bold" />
                      </ListItemPrefix>
                      Add Meal
                    </ListItem>
                  </NavLink>

                  <NavLink to="/dashboard/allMeals">
                    <ListItem>
                      <ListItemPrefix>
                        <GiHotMeal className="text-xl font-bold" />
                      </ListItemPrefix>
                      All Meals
                    </ListItem>
                  </NavLink>

                  <NavLink to="/dashboard/allReviews">
                    <ListItem>
                      <ListItemPrefix>
                        <GiAlliedStar className="text-xl font-bold" />
                      </ListItemPrefix>
                      All Reviews
                    </ListItem>
                  </NavLink>

                  <NavLink to="/dashboard/serveMeals">
                    <ListItem>
                      <ListItemPrefix>
                        <FaBowlFood className="text-xl font-bold" />
                      </ListItemPrefix>
                      Serve Meals
                    </ListItem>
                  </NavLink>

                  <NavLink to="/dashboard/upcomingMeals">
                    <ListItem>
                      <ListItemPrefix>
                        <MdUpcoming className="text-xl font-bold" />
                      </ListItemPrefix>
                      Upcoming Meals
                    </ListItem>
                  </NavLink>
                </List>

                <div className="h-[1px] bg-black my-1"></div>

                <NavLink to="/">
                  <ListItem className="text-white">
                    <ListItemPrefix>
                      <MdHome className="text-xl font-bold text-white" />
                    </ListItemPrefix>
                    Home
                  </ListItem>
                </NavLink>
              </List>
            ) : (
              <List className="text-white">
                <List className="text-white">
                  <NavLink to="/dashboard/myProfile">
                    <ListItem>
                      <ListItemPrefix>
                        <CgProfile className="text-xl font-bold" />
                      </ListItemPrefix>
                      My Profile
                    </ListItem>
                  </NavLink>

                  <NavLink to="/dashboard/requestedMeals">
                    <ListItem>
                      <ListItemPrefix>
                        <GiMeal className="text-xl font-bold" />
                      </ListItemPrefix>
                      Requested Meals
                      <ListItemSuffix>
                        <Chip
                          value={mealRequest.length}
                          size="sm"
                          color="green"
                          className="rounded-full"
                        />
                      </ListItemSuffix>
                    </ListItem>
                  </NavLink>

                  <NavLink to="/dashboard/myReviews">
                    <ListItem>
                      <ListItemPrefix>
                        <MdOutlineReviews className="text-xl font-bold" />
                      </ListItemPrefix>
                      My Reviews
                    </ListItem>
                  </NavLink>
                </List>

                <div className="h-[1px] bg-black my-1"></div>

                <NavLink to="/">
                  <ListItem>
                    <ListItemPrefix>
                      <MdHome className="text-xl font-bold " />
                    </ListItemPrefix>
                    Home
                  </ListItem>
                </NavLink>
              </List>
            )}
          </Drawer>
        </React.Fragment>
      </div>

      <div className="flex-1 flex-grow">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DrawerWithNavigation;
