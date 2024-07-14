import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../Pages/HomePage/HomePage";
import Meals from "../Pages/Meals/Meals";
import UpcomingMeal from "../Pages/UpcomingMeal/UpcomingMeal";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DrawerWithNavigation from "../Layout/Dashboard/Dashboard";
import MyProfile from "../Pages/DashboardPages/MyProfile/MyProfile";
import RequestedMeals from "../Pages/DashboardPages/RequestedMeals/RequestedMeals";
import MyReviews from "../Pages/DashboardPages/MyReviews/MyReviews";

import AdminProfile from "../Pages/DashboardPages/AdminPages/AdminProfile/AdminProfile";
import ManageUsers from "../Pages/DashboardPages/AdminPages/ManageUsers/ManageUsers";
import AddMeals from "../Pages/DashboardPages/AdminPages/AddMeals/AddMeals";
import AllReviews from "../Pages/DashboardPages/AdminPages/AllReviews/AllReviews";
import ServeMeals from "../Pages/DashboardPages/AdminPages/ServeMeals/ServeMeals";
import UpcomingMeals from "../Pages/DashboardPages/AdminPages/UpcomingMeals/UpcomingMeals";
import AllMeals from "../Pages/DashboardPages/AdminPages/AllMeals/AllMeals";
import MealDetailsPage from "../Pages/MealDetailsPage/MealDetailsPage";
import EditMeals from "../Pages/DashboardPages/AdminPages/EditMeals/EditMeals";
import PrivateRoute from "../ProtectedRoutes/PrivateRoute";
import AdminRoute from "../ProtectedRoutes/AdminRoute";
import CheckOut from "../Pages/CheckOut/CheckOut";
import ReviewTextEdit from "../Pages/DashboardPages/ReviewTextEdit/ReviewTextEdit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/meals",
        element: <Meals />,
      },
      {
        path: "/upcomingMeal",
        element: <UpcomingMeal />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/mealDetails/:id",
        element: <MealDetailsPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addMeals/${params.id}`),
      },
      {
        path: "/checkOut/:packageName",
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/paymentPackages/${params.packageName}`),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DrawerWithNavigation />
      </PrivateRoute>
    ),
    children: [
      // For Users
      {
        path: "myProfile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
        // loader: () =>
        //   fetch(`http://localhost:5000/payments/jamrul15133@gmail.com`),
      },
      {
        path: "requestedMeals",
        element: (
          <PrivateRoute>
            <RequestedMeals />
          </PrivateRoute>
        ),
      },
      {
        path: "myReviews",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
      {
        path: "editReviewText/:id",
        element: (
          <PrivateRoute>
            <ReviewTextEdit />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addReviewData/${params.id}`),
      },

      // For Admin

      {
        path: "adminProfile",
        element: (
          <AdminRoute>
            <AdminProfile />
          </AdminRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "addMeals",
        element: (
          <AdminRoute>
            <AddMeals />
          </AdminRoute>
        ),
      },
      {
        path: "editMeal/:id",
        element: (
          <AdminRoute>
            <EditMeals />
          </AdminRoute>
        ),
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/addMeals/${params.id}`);
        },
      },
      {
        path: "allMeals",
        element: (
          <AdminRoute>
            <AllMeals />
          </AdminRoute>
        ),
      },
      {
        path: "allReviews",
        element: (
          <AdminRoute>
            <AllReviews />
          </AdminRoute>
        ),
      },
      {
        path: "serveMeals",
        element: (
          <AdminRoute>
            <ServeMeals />
          </AdminRoute>
        ),
      },
      {
        path: "upcomingMeals",
        element: (
          <AdminRoute>
            <UpcomingMeals />
          </AdminRoute>
        ),
        // loader: ({ params }) => fetch(`http://localhost:5000/upcomingLikeCounter/${params.id}`),
      },
    ],
  },
]);

export default router;
