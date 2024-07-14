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
import useAddMeals from "../../../../Hooks/useAddMeals";
import useUpcomingMeals from "../../../../Hooks/Upcomingmeals/useUpcomingMeals";

const AddMeals = () => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();
  const [, refetch] = useAddMeals();
  // const [, refetch] = useUpcomingMeals();

  const handleAddMeals = handleSubmit((data) => {
    const mealInputData = { ...data, likes: 0, reviews: 0 };
    axiosPublic.post("/addMeals", mealInputData).then((res) => {
      const data = res.data;
      refetch();
      reset();
      if (data.insertedId) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `The meal has been added`,
          showCancelButton: false,
          timer: 1500,
        });
      }

      console.log(data);
    });
    console.log(mealInputData);
  });

  const handleUpcomingMeal = handleSubmit((data) => {
    const mealInputDataUp = { ...data, likes: 0, reviews: 0 };
    axiosPublic.post("/upcomingMeal", mealInputDataUp).then((res) => {
      const data = res.data;
      refetch();
      if (data.insertedId) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Meal has been added in Upcoming Meals`,
          showCancelButton: false,
          timer: 1500,
        });
        // refetch();
      }

      console.log(data);
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
          {/* <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details to register.
          </Typography> */}
          <form
            // onSubmit={handleSubmit(onSubmit)}
            className="mt-8 mb-2 lg:w-8/12 md:w-9/12 w-10/12 mx-auto"
          >
            <div className="mb-1 flex flex-col gap-6">
              <div className="flex gap-3 lg:flex-row md:flex-wrap flex-wrap">
                <div className="flex-1">
                  <Typography variant="h6" color="blue-gray" className="my-3">
                    Admin Name
                  </Typography>
                  <Input
                    {...register("adminName")}
                    name="adminName"
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
                    // {...register("likes")}
                    // name="likes"
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
                  // {...register("reviews")}
                  // name="reviews"
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

            {/* <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <a href="#" className="font-medium text-gray-900">
                Sign In
              </a>
            </Typography> */}
          </form>
          <div className="flex md:flex-row flex-col pb-3 justify-center gap-5 lg:w-8/12 md:w-9/12 w-10/12 mx-auto">
            <Button onClick={handleAddMeals} className="mt-6 w-full">
              Add Meal
            </Button>

            <Button onClick={handleUpcomingMeal} className="md:mt-6 w-full">
              Upcoming Meal
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AddMeals;
