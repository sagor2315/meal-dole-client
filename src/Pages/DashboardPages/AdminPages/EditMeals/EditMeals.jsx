import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const EditMeals = () => {
  const data = useLoaderData();
  console.log(data);

  const {
    _id,
    mealTitle,
    adminName,
    adminEmail,
    mealImage,
    // likes,
    // reviews,
    mealType,
    Ingredients,
    price,
    ratings,
    postingDate,
    description,
  } = data;

  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();

  const handleUpdateMeals = handleSubmit((data) => {
    Swal.fire({
      title: "Do you want to update it?",
      text: "You can't bring it back!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0F2139",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.put(`/addMeals/${_id}`, data).then((res) => {
          const data = res.data;

          if (data.modifiedCount > 0) {
            Swal.fire({
              title: "Updated!",
              text: `${mealTitle} has been updated.`,
              icon: "success",
            });
          }
          reset();
          console.log(data);
        });
      }
    });

    console.log(data);
  });

  return (
    <div>
      <h1 className="text-[#0F2139] text-center md:text-4xl text-3xl font-semibold md:pb-10 py-3">
        Add Meals
      </h1>

      <div>
        <Card color="transparent" shadow={false}>
          <form className="mt-8 mb-2 lg:w-8/12 md:w-9/12 w-10/12 mx-auto">
            <div className="mb-1 flex flex-col gap-6">
              <div className="flex gap-3 lg:flex-row md:flex-wrap flex-wrap">
                <div className="flex-1">
                  <Typography variant="h6" color="blue-gray" className="my-3">
                    Admin Name
                  </Typography>
                  <Input
                    {...register("adminName")}
                    name="adminName"
                    defaultValue={adminName}
                    type="text"
                    size="lg"
                    placeholder="Admin Name"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <div className="flex-1">
                  <Typography variant="h6" color="blue-gray" className="my-3">
                    Admin Email
                  </Typography>
                  <Input
                    {...register("adminEmail")}
                    name="adminEmail"
                    defaultValue={adminEmail}
                    type="text"
                    size="lg"
                    placeholder="Admin Email"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
              </div>

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Meal Title
              </Typography>
              <Input
                {...register("mealTitle")}
                name="mealTitle"
                defaultValue={mealTitle}
                size="lg"
                placeholder="Meal title"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Meal Type
              </Typography>
              <Input
                {...register("mealType")}
                name="mealType"
                defaultValue={mealType}
                size="lg"
                placeholder="(breakfast/Lunch/Dinner"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Meal Image
              </Typography>
              <Input
                {...register("mealImage")}
                name="mealImage"
                defaultValue={mealImage}
                type="text"
                size="lg"
                placeholder="Meal Image"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Ingredients
              </Typography>
              <Input
                {...register("Ingredients")}
                name="Ingredients"
                defaultValue={Ingredients}
                type="text"
                size="lg"
                placeholder="Meal Image"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />

              <div className="flex gap-3 lg:flex-row md:flex-wrap flex-wrap">
                <div className="flex-1">
                  <Typography variant="h6" color="blue-gray" className="my-3">
                    Price
                  </Typography>
                  <Input
                    {...register("price")}
                    name="price"
                    defaultValue={price}
                    type="text"
                    size="lg"
                    placeholder="Price"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <div className="flex-1">
                  <Typography variant="h6" color="blue-gray" className="my-3">
                    Ratings
                  </Typography>
                  <Input
                    {...register("ratings")}
                    name="ratings"
                    defaultValue={ratings}
                    type="text"
                    size="lg"
                    placeholder="Ratings"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>

                <div className="flex-1">
                  <Typography variant="h6" color="blue-gray" className="my-3">
                    Likes
                  </Typography>
                  <Input
                    {...register("likes")}
                    name="likes"
                    type="text"
                    size="lg"
                    placeholder="Likes"
                    defaultValue={0}
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <div className="flex-1">
                  <Typography variant="h6" color="blue-gray" className="my-3">
                    Posting Date
                  </Typography>
                  <Input
                    {...register("postingDate")}
                    name="postingDate"
                    defaultValue={postingDate}
                    type="date"
                    size="lg"
                    placeholder="Posting Date"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
              </div>

              <div className="flex-1">
                <Typography variant="h6" color="blue-gray" className="my-3">
                  Reviews
                </Typography>
                <Textarea
                  {...register("reviews")}
                  name="reviews"
                  type="text"
                  size="lg"
                  placeholder="Reviews"
                  defaultValue={0}
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>

              <div className="flex-1">
                <Typography variant="h6" color="blue-gray" className="my-3">
                  Descriptions
                </Typography>
                <Textarea
                  {...register("description")}
                  name="description"
                  defaultValue={description}
                  type="text"
                  size="lg"
                  placeholder="Description"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
            </div>
          </form>
          <div className="flex md:flex-row flex-col pb-3 justify-center gap-5 lg:w-8/12 md:w-9/12 w-10/12 mx-auto">
            <Button onClick={handleUpdateMeals} className="mt-6 w-full">
              Update Meal
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default EditMeals;
