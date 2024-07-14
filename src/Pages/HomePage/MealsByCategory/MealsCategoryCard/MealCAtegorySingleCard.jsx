import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import PropTypes from "prop-types";
import { AiFillLike } from "react-icons/ai";
import { Link } from "react-router-dom";
import useAuthentication from "../../../../Hooks/useAuthentication";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic/useAxiosPublic";
// import useUpcomingMeals from "../../../../Hooks/Upcomingmeals/useUpcomingMeals";
import useUpcomingMealLikeCounter from "../../../../Hooks/useUpcomingMealLikeCounter/useUpcomingMealLikeCounter";
import { useState } from "react";

const MealCAtegorySingleCard = ({ meal, upcomingMeals }) => {
  const [upcomingLikeCounter, refetch] = useUpcomingMealLikeCounter();
  const { users } = useAuthentication();
  const axiosPublic = useAxiosPublic();
  const [alert, setAlert] = useState(false);

  const alreadyLiked = upcomingLikeCounter?.find(
    (data) => data?._id === meal?._id
  );
  // console.log(alreadyLiked);
  // console.log(alreadyLiked?.userWhoLiked);
  // console.log(users?.email);
  // console.log(alreadyLiked?.userWhoLiked === users?.email);

  const handUpComingLike = (id, title, image, upMealLikes) => {
    if (!users) {
      return Swal.fire({
        position: "top-end",
        icon: "success",
        title: "You have to login first to like this!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (alreadyLiked?.userWhoLiked === users?.email) {
      return setAlert(!alert);
    }

    const userWhoLiked = users?.email;
    const likeData = {
      id,
      title,
      image,
      upcomingLike: 0,
      upMealLikes,
      userWhoLiked,
    };
    axiosPublic.post("/upcomingLikeCounter", likeData).then((res) => {
      const data = res.data;
      refetch();
      console.log(data);
    });
  };

  return (
    <div>
      <Card className="mt-8 bg-[#181818] flex flex-col">
        <CardHeader floated={false} className="h-80">
          <img className="h-full" src={meal?.mealImage} alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center flex flex-col">
          <Typography
            variant="h4"
            as="div"
            color="blue-gray"
            className="my-2 text-white capitalize min-h-20"
          >
            {meal?.mealTitle}
          </Typography>
          <Typography
            color="blue-gray"
            className="font-bold text-xl"
            textGradient
          >
            Price: ${meal?.price}
          </Typography>
          <Typography
            color="blue-gray"
            className="font-bold flex justify-center pt-5"
            textGradient
          >
            <Rating style={{ maxWidth: 180 }} value={meal?.ratings} readOnly />
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center flex-grow gap-7 pt-2">
          {upcomingMeals ? (
            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center gap-5">
                <Button
                  onClick={() =>
                    handUpComingLike(
                      meal?._id,
                      meal?.mealTitle,
                      meal?.mealImage,
                      meal?.likes
                    )
                  }
                  variant="text"
                  className=""
                >
                  <AiFillLike
                    // className="text-3xl text-white"
                    className={`text-3xl ${
                      alreadyLiked?.userWhoLiked === users?.email
                        ? "text-yellow-500"
                        : "text-gray-500"
                    }`}
                  />
                </Button>

                <div>
                  <h1 className="text-white text-xl font-semibold">
                    {/* {meal?.likes} */}
                    {alreadyLiked?.upcomingLike}
                  </h1>
                </div>
              </div>
              <div
                className={`transition-transform ${
                  alert
                    ? "opacity-100 duration-500"
                    : "opacity-0 hidden duration-700"
                }`}
              >
                <p className="text-xs font-light text-white">
                  You already liked this meal!
                </p>
              </div>
            </div>
          ) : (
            <Tooltip content="View More Detail">
              <Link to={`/mealDetails/${meal?._id}`}>
                <Button>Details</Button>
              </Link>
            </Tooltip>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

MealCAtegorySingleCard.propTypes = {
  meal: PropTypes.object,
  upcomingMeals: PropTypes.array,
};

export default MealCAtegorySingleCard;
