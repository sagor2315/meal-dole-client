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

import { Link } from "react-router-dom";
// import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";
import useReviewsAllGetData from "../../../../Hooks/useReviewsData/useReviewsAllGetData";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic/useAxiosPublic";
import { useState } from "react";
import AddReviews from "../../../../Components/AddReviews/AddReviews";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

const TABLE_HEAD = ["Meal Title", "Likes", "Reviews", "Delete", "View"];

const AllReviews = () => {
  const [reviewDataAll, setReviewDataAll] = useState();
  const [ReviewsAllGetData] = useReviewsAllGetData();
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get("/addReviewData").then((res) => {
      const data = res.data;
      setReviewDataAll(data);
    });
  }, []);

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
        axiosPublic.delete(`/addReviewData/all/${id}`).then((res) => {
          const data = res.data;
          if (data.deletedCount > 0) {
            const remaining = reviewDataAll.filter((data) => data._id !== id);
            setReviewDataAll(remaining);
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
    <div>
      <Card className="h-screen w-11/12 mx-auto">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="text-center">
            <h1 className="text-xl text-[#0F2139] font-semibold">
              All reviews{" "}
            </h1>
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
              {reviewDataAll?.map((data, index) => {
                const isLast = index === data?.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={index}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {data?.mealReviewTitle}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {data?.revLikesCount}
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
                      <Tooltip content="Delete Review" className="w-max">
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
                        <Link to={`/mealDetails/${data?._id}`}>
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
      </Card>
    </div>
  );
};

export default AllReviews;
