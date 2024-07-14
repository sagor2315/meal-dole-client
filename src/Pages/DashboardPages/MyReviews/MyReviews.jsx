import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import { BiSolidEditAlt } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa6";

import { RiDeleteBin5Fill } from "react-icons/ri";
import useReviewsGetData from "../../../Hooks/useReviewsData/useReviewsGetData";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";
// import useAuthentication from "../../../Hooks/useAuthentication";

const TABLE_HEAD = ["Meal Title", "Likes", "Reviews", "Edit", "Delete", "View"];

const MyReviews = () => {
  // const { users } = useAuthentication();
  const axiosPublic = useAxiosPublic();
  const [reviewsDataAll, refetch] = useReviewsGetData();
  console.log(reviewsDataAll[0]?.reviews);

  const handleDeleteReview = (id) => {
    Swal.fire({
      title: "Do you want to delete it?",
      text: "You can't bring it back!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0F2139",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/addReviewData/${id}`).then((res) => {
          const data = res.data;
          refetch();
          if (data.matchedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: `Review has been deleted.`,
              icon: "success",
            });
          }
          console.log(data);
        });
      }
    });
  };

  return (
    <Card className="h-screen w-11/12 mx-auto">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="text-center">
          <h1 className="text-xl text-[#0F2139] font-semibold">My reviews </h1>
        </div>
      </CardHeader>
      <CardBody className="overflow-x-scroll px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-[#0F2139] p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="leading-none text-lg font-semibold text-white"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {reviewsDataAll[0]?.ReviewComments?.map((data, index) => {
              const isLast = index === data?.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={index}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar
                        src={data?.userPhoto}
                        alt={data?.mealTitle}
                        size="md"
                        className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                      />
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {data?.mealTitle}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {data?.likesCount}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {data?.reviews}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Tooltip content="Edit User" className="w-max">
                      <Link to={`/dashboard/editReviewText/${data?._id}`}>
                        <Button
                          // onClick={() => handleEditReview(data?._id)}
                          variant="filled"
                          className="py-2 px-3 bg-[#0F2139]"
                        >
                          <BiSolidEditAlt className="text-2xl" />
                        </Button>
                      </Link>
                    </Tooltip>
                  </td>
                  <td className={classes}>
                    <Tooltip content="Delete User" className="w-max">
                      <Button
                        onClick={() => handleDeleteReview(data?._id)}
                        variant="filled"
                        className="py-2 px-3 bg-[#0F2139]"
                      >
                        <RiDeleteBin5Fill className="text-2xl" />
                      </Button>
                    </Tooltip>
                  </td>
                  <td className={classes}>
                    <Tooltip content="View This Meal" className="w-max">
                      <Link to={`/mealDetails/${reviewsDataAll[0]?._id}`}>
                        <Button
                          variant="filled"
                          className="py-2 px-3 bg-[#0F2139]"
                        >
                          <FaRegEye className="text-2xl" />
                        </Button>
                      </Link>
                    </Tooltip>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
      {/* <CardFooter className="flex items-center justify-between w-10/12 border mx-auto border-blue-gray-50">
        <Button variant="outlined" size="sm" className="capitalize px-1 py-0.5">
          Previous
        </Button>
        <div className="flex items-center gap-1">
          <IconButton
            variant="outlined"
            size="sm"
            className="px-1 py-0.5 text-xs p-0.5 "
          >
            1
          </IconButton>
          <IconButton variant="text" size="sm" className="p-0.5 text-xs">
            2
          </IconButton>
          <IconButton variant="text" size="sm" className="px-1 py-0.5 text-xs">
            ...
          </IconButton>
          <IconButton variant="text" size="sm" className="p-0.5 text-xs">
            10
          </IconButton>
        </div>
        <Button variant="outlined" size="sm" className="capitalize px-1 py-0.5">
          Next
        </Button>
      </CardFooter> */}
    </Card>
  );
};

export default MyReviews;
