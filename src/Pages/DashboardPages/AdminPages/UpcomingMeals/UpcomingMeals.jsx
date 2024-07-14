import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { MdOutlinePublishedWithChanges } from "react-icons/md";

import useUpcomingMeals from "../../../../Hooks/Upcomingmeals/useUpcomingMeals";
// import { Link } from "react-router-dom";
// import { MdCancel, MdOutlineUpdate } from "react-icons/md";
// import { GrView } from "react-icons/gr";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";
import useAddMeals from "../../../../Hooks/useAddMeals";

const UpcomingMeals = () => {
  const [upcomingMeals] = useUpcomingMeals();
  const [allMeals] = useAddMeals();
  const TABLE_HEAD = ["", "Meal Title", "Likes", "Reviews", "Publish"];
  const axiosPublic = useAxiosPublic();

  const handlePublish = (
    id,
    adminName,
    adminEmail,
    mealTitle,
    mealType,
    mealImage,
    Ingredients,
    price,
    ratings,
    likes,
    postingDate,
    reviews,
    description
  ) => {
    const alreadyPublished = allMeals?.find(
      (data) => data?.upcomingMealId === id
    );

    const mealData = {
      upcomingMealId: id,
      adminName,
      adminEmail,
      mealTitle,
      mealType,
      mealImage,
      Ingredients,
      price,
      ratings,
      likes: 0,
      postingDate,
      reviews: 0,
      description,
    };

    if (likes < 10) {
      return Swal.fire({
        position: "top-end",
        icon: "error",
        title: `Need At least 10 likes to publish in meal section`,
        showCancelButton: false,
        timer: 1500,
      });
    } else if (alreadyPublished?.upcomingMealId) {
      return Swal.fire({
        position: "top-end",
        icon: "error",
        title: `You have already published this meal!`,
        showCancelButton: false,
        timer: 1500,
      });
    }
    axiosPublic.post(`/addMeals`, mealData).then((res) => {
      const data = res.data;
      if (data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Meal has been added in Upcoming Meals`,
          showCancelButton: false,
          timer: 1500,
        });
      }
      console.log(data);
    });
    console.log(id);
  };

  return (
    <div>
      <Card className="h-screen w-11/12 mx-auto">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="text-center">
            <h1 className="text-xl text-[#0F2139] font-semibold">
              All Upcoming Meals{" "}
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
              {upcomingMeals.map(
                (
                  {
                    adminName,
                    adminEmail,
                    mealTitle,
                    mealType,
                    mealImage,
                    Ingredients,
                    price,
                    ratings,
                    likes,
                    postingDate,
                    reviews,
                    description,
                    _id,
                  },
                  index
                ) => {
                  const isLast = index === upcomingMeals.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={_id}>
                      <td>
                        <Typography>{(index += 1)}</Typography>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar
                            src={mealImage}
                            // alt={name}
                            size="md"
                            className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                          />
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {mealTitle}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {likes}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {reviews}
                        </Typography>
                      </td>

                      <td className={classes}>
                        {likes >= 10 ? (
                          <Tooltip content="Ready To Publish in Meals Page">
                            <IconButton
                              onClick={() =>
                                handlePublish(
                                  _id,
                                  adminName,
                                  adminEmail,
                                  mealTitle,
                                  mealType,
                                  mealImage,
                                  Ingredients,
                                  price,
                                  ratings,
                                  likes,
                                  postingDate,
                                  reviews,
                                  description
                                )
                              }
                              variant="text"
                            >
                              <MdOutlinePublishedWithChanges className="text-xl" />
                            </IconButton>
                          </Tooltip>
                        ) : (
                          <Tooltip content="For Publish Need At Least 10 Likes">
                            <IconButton variant="text">
                              <MdOutlinePublishedWithChanges className="text-xl" />
                            </IconButton>
                          </Tooltip>
                        )}
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>

        {/* <CardFooter className="flex items-center justify-between w-10/12 border mx-auto border-blue-gray-50"></CardFooter> */}
      </Card>
    </div>
  );
};

export default UpcomingMeals;
