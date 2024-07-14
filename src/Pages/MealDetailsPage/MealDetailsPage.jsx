import {
  /* Navigate */
  useLoaderData,
  /* useLocation */
  useNavigate,
} from "react-router-dom";
import moment from "moment";
import { Rating } from "@smastrom/react-rating";
import { AiFillLike } from "react-icons/ai";
import { /* Avatar, */ Button, Textarea } from "@material-tailwind/react";
import useAuthentication from "../../Hooks/useAuthentication";
import Swal from "sweetalert2";
import usePayments from "../../Hooks/usePayments/usePayments";
import useLikes from "../../Hooks/useLikes/useLikes";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
import { useEffect, useState } from "react";
import AddReviews from "../../Components/AddReviews/AddReviews";
import useAddReviews from "../../Hooks/useAddReviews/useAddReviews";
import { useForm } from "react-hook-form";

moment().format();

const MealDetailsPage = () => {
  const { users } = useAuthentication();
  const navigate = useNavigate();
  // const location = useLocation();
  const [paymentsData] = usePayments();
  const [likesAll, refetch] = useLikes();

  const [alreadyLiked, setAlreadyLiked] = useState(false);

  const axiosPublic = useAxiosPublic();
  const [reviewsData, refetchData] = useAddReviews();

  const isThisUserAnyPackageHolder = paymentsData.find(
    (data) => data?.email === users?.email
  );
  // console.log(isThisUserAnyPackageHolder?.transactionId);

  const {
    _id,
    mealTitle,
    adminName,
    adminEmail,
    mealImage,
    likes,
    reviews,
    mealType,
    Ingredients,
    price,
    ratings,
    postingDate,
    description,
  } = useLoaderData();

  const likeCounter = likesAll?.find((like) => like?._id === _id);
  console.log(likeCounter);

  const reviewsCounter = reviewsData.find((review) => review?._id === _id);
  console.log(reviewsCounter);

  const handleMealRequest = () => {
    if (!users) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You are not logged in!",
        footer: "Please login for meal request",
      });
      navigate("/login");
    } else if (isThisUserAnyPackageHolder?.transactionId) {
      const userName = users?.displayName;
      const userEmail = users?.email;
      const requestStatus = "Pending";
      const mealData =
        //       // _id,
        {
          mealTitle,
          adminName,
          adminEmail,
          mealImage,
          likes,
          reviews,
          mealType,
          Ingredients,
          price,
          ratings,
          postingDate,
          description,
          userName,
          userEmail,
          requestStatus,
        };

      axiosPublic.post("/mealRequest", mealData).then((res) => {
        const data = res.data;
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your requested meal has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        console.log(data);
      });
      console.log(mealData);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You are not holding any packages!",
        footer: "Please hold a package first",
      });
    }
  };

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setAlreadyLiked(true);
    }, 100);

    return clearTimeout(timeOutId);
  }, []);

  const handleLikeCOunt = (id) => {
    if (likeCounter?.email === users?.email) {
      return setAlreadyLiked(true);
    } else if (!users) {
      return Swal.fire({
        position: "top-end",
        icon: "success",
        title: "To like this meal, you need to login first!",
        showConfirmButton: false,
        timer: 2000,
      });
    }
    const dataLike = { id, likes: 0, email: users?.email };
    axiosPublic.post("/likeButton", dataLike).then((res) => {
      const data = res.data;
      refetch();
      console.log(data);
    });
    console.log(id);
    console.log(likes);
    console.log(dataLike);
  };

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    if (!users) {
      return;
    }

    const reviewText = data.addReview;
    const userName = users?.displayName;
    const userPhoto = users?.photoURL;
    const userEmail = users?.email;
    const likesCount = likeCounter?.likes;

    const reviewData = {
      ...data,
      _id,
      reviewText,
      userName,
      userEmail,
      userPhoto,
      likesCount,
      mealTitle,
      reviews: 0,
      reviewsInComment: reviews,
    };

    console.log(reviewData);
    console.log(data);
    axiosPublic.post("/addReviewData", reviewData).then((res) => {
      const data = res.data;
      refetchData();
      reset();
      console.log(data);
    });
    console.log(reviewData);
  };

  // const handleReview = (e) => {
  //   e.preventDefault();
  //   const reviewText = e.target.addReview.value;
  //   const userName = users?.displayName;
  //   const userPhoto = users?.photoURL;
  //   const userEmail = users?.email;
  //   const likesCount = likeCounter?.likes;

  //   const reviewData = {
  //     reviewText,
  //     _id,
  //     reviews: 0,
  //     reviewsInComment: reviews,
  //     userName,
  //     userPhoto,
  //     userEmail,
  //     likesCount,
  //     mealTitle,
  //   };
  //   axiosPublic.post("/addReviewData", reviewData).then((res) => {
  //     const data = res.data;
  //     refetchData();
  //     console.log(data);
  //   });
  //   console.log(reviewData);
  // };

  return (
    <div className="lg:pt-16 md:pt-12 py-7 md:pb-10 lg:px-8 md:px-5 px-3 max-w-screen-2xl mx-auto">
      <div className="pb-10 font-fontSans">
        <h1 className="text-primaryColor lg:text-4xl md:text-2xl text-xl font-semibold capitalize">
          {mealTitle}
        </h1>
        <div>
          <div className="pt-2">
            <h1 className="text-lg">Posted By: {adminName}</h1>
            <h1 className="text-lg">
              Posting Time: {moment(postingDate).format("LLL")}
            </h1>
          </div>

          <div className="pt-2">
            <h1 className="text-lg">User Rating: {ratings}</h1>
            <Rating style={{ maxWidth: 140 }} value={ratings} readOnly />
          </div>
        </div>
      </div>

      <div className="flex gap-5 md:flex-row flex-col border h-full">
        <div className="flex-1 h-[450px]">
          <img className="w-full h-full" src={mealImage} alt="" />
        </div>

        <div className="pt-5 flex-1">
          <h1 className="text-[#0F2139] text-2xl pb-2 font-semibold font-fontSans">
            Ingredients:{" "}
          </h1>
          <div className="flex flex-col gap-y-2 ml-4">
            {Ingredients?.split(",").map((ingredient, idx) => (
              <ul className="" key={idx}>
                <li className="list-disc font-fontSans">{ingredient}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-[#0F2139] text-2xl py-2 font-semibold font-fontSans">
          {" "}
          Description:
        </h1>
        <p className="font-fontSans text-base font-normal">{description}</p>
      </div>

      <div className="flex justify-center my-10 ">
        <Button onClick={handleMealRequest} className="bg-[#0F2139]">
          Meal Request
        </Button>
      </div>

      <div className="h-[2px] bg-gray-300 mt-5 mb-2"></div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <Button
            onClick={() => handleLikeCOunt(_id, likes)}
            variant="text"
            className="border border-gray-300"
          >
            <AiFillLike
              className={`text-3xl ${
                likeCounter?.email === users?.email
                  ? "text-[#0F2139]"
                  : "text-gray-500"
              }`}
            />
          </Button>
          <h1 className="text-[#0F2139] text-xl font-semibold">
            {likeCounter?.likes ? likeCounter?.likes : 0}
          </h1>
          <div
            className={`transition-opacity ${
              alreadyLiked ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            <p className="text-xs font-light text-black">you already liked</p>
          </div>
        </div>

        <div>
          <h1 className="text-[#0F2139] text-xl font-semibold font-fontSans">
            Reviews Count ({reviewsCounter?.reviews})
          </h1>
        </div>
      </div>

      <div className="h-[2px] bg-gray-300 mt-2 mb-5"></div>

      <div>
        <h1 className="text-[#0F2139] text-xl font-semibold font-fontSans pb-2">
          Add A Review
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Textarea
            {...register("addReview")}
            placeholder="Write here"
            name="addReview"
          ></Textarea>
          <Button
            className={`${users ? "bg-[#0F2139]" : ""} mt-2`}
            type="submit"
            disabled={!users}
          >
            Submit Review
          </Button>
        </form>
      </div>

      <AddReviews reviews={reviews} id={_id} />
    </div>
  );
};

export default MealDetailsPage;
