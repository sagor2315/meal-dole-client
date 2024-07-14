import { Button, Textarea } from "@material-tailwind/react";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";
import useReviewsGetData from "../../../Hooks/useReviewsData/useReviewsGetData";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ReviewTextEdit = () => {
  const [, refetch] = useReviewsGetData();

  const {
    _id,
    reviewText,
    userName,
    userEmail,
    userPhoto,
    likesCount,
    mealTitle,
    reviews,
  } = useLoaderData();

  // console.log({
  //   _id,
  //   reviewText,
  //   userName,
  //   userEmail,
  //   userPhoto,
  //   likesCount,
  //   mealTitle,
  //   reviews,
  // });
  const axiosPublic = useAxiosPublic();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const allReviewData = {
      ...data,
      _id,
      userName,
      userEmail,
      userPhoto,
      likesCount,
      mealTitle,
      reviews,
    };
    axiosPublic.put(`/addReviewData/${_id}`, allReviewData).then((res) => {
      const data = res.data;
      refetch();
      // reset();
      if (data.modifiedCount > 0) {
        Swal.fire({
          title: "Updated!",
          text: `Review has been updated.`,
          icon: "success",
        });
      }
      console.log(data);
    });
    console.log(allReviewData);
    // console.log(data);
  };

  // const handleUpdateReview = (e) => {
  //   e.preventDefault();
  //   const reviewText = e.target.editReview.value;
  //   const allReviewData = {
  //     _id,
  //     reviewText,
  //     userName,
  //     userEmail,
  //     userPhoto,
  //     likesCount,
  //     mealTitle,
  //     reviews,
  //   };
  //   axiosPublic.put(`/addReviewData/${_id}`, allReviewData).then((res) => {
  //     const data = res.data;
  //     refetch();
  //     console.log(data);
  //   });
  //   console.log(allReviewData);
  // };

  return (
    <div className="h-screen w-11/12 mx-auto mt-20">
      <div>
        <h1 className="text-[#0F2139] text-xl font-semibold font-fontSans pb-2">
          Update Your Review
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Textarea
            {...register("reviewText")}
            placeholder="Write here"
            defaultValue={reviewText}
            name="reviewText"
          ></Textarea>
          <Button
            // onClick={() =>
            //   handleUpdateReview(
            //     data?._id,
            //     data?.reviewText,
            //     data?.userName,
            //     data?.userEmail,
            //     data?.userPhoto,
            //     data?.likesCount,
            //     data?.mealTitle,
            //     data?.reviews
            //   )
            // }
            // onClick={handleUpdateReview}
            className="bg-[#0F2139] mt-2"
            type="submit"
          >
            Update Review
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ReviewTextEdit;

// id,
// reviewText,
// userName,
// userEmail,
// userPhoto,
// likesCount,
// mealTitle,
// reviews

// import { useState } from "react";
// import { Button, Textarea } from "@material-tailwind/react";
// import { useLoaderData } from "react-router-dom";
// import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";

// const ReviewTextEdit = () => {
//   const data = useLoaderData();
//   const axiosPublic = useAxiosPublic();
//   const [updatedReviewText, setUpdatedReviewText] = useState(data?.reviewText);

//   const handleUpdateReview = () => {
//     const allReviewData = {
//       id: data?._id,
//       reviewText: updatedReviewText,
//       userName: data?.userName,
//       userEmail: data?.userEmail,
//       userPhoto: data?.userPhoto,
//       likesCount: data?.likesCount,
//       mealTitle: data?.mealTitle,
//       reviews: data?.reviews,
//     };

//     axiosPublic
//       .put(`/addReviewData/${data?._id}`, allReviewData)
//       .then((res) => {
//         const data = res.data;
//         // refetch();
//         console.log(data);
//       })
//       .catch((error) => {
//         console.error("Update error:", error);
//       });
//     console.log(allReviewData);
//   };

//   return (
//     <div className="h-screen w-11/12 mx-auto mt-20">
//       <div>
//         <h1 className="text-[#0F2139] text-xl font-semibold font-fontSans pb-2">
//           Update Your Review
//         </h1>
//         <div>
//           <Textarea
//             placeholder="Write here"
//             value={updatedReviewText}
//             onChange={(e) => setUpdatedReviewText(e.target.value)}
//             name="editReview"
//           ></Textarea>
//           <Button
//             onClick={handleUpdateReview}
//             className="bg-[#0F2139] mt-2"
//             type="submit"
//           >
//             Update Review
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReviewTextEdit;
