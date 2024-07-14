import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { MdCancel } from "react-icons/md";
import useMealsRequest from "../../../Hooks/useMealsRequest/useMealsRequest";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const TABLE_HEAD = ["Meal Title", "Likes", "Reviews", "Status", "Action"];

const RequestedMeals = () => {
  const [mealRequest, refetch] = useMealsRequest();
  const axiosSecure = useAxiosSecure();

  const handleCancelMeal = (id, title) => {
    Swal.fire({
      title: "Do you want to cancel it?",
      text: "You can't bring it back!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0F2139",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/mealRequest/${id}`).then((res) => {
          const data = res.data;
          refetch();
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Canceled!",
              text: `${title} has been canceled.`,
              icon: "success",
            });
          }
          console.log(data);
        });
      }
    });

    console.log(id);
  };

  return (
    <Card className="h-screen w-11/12 mx-auto">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="text-center">
          <h1 className="text-xl text-[#0F2139] font-semibold">
            All Requested Meals{" "}
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
            {mealRequest.map(
              (
                { _id, mealTitle, mealImage, likes, reviews, requestStatus },
                index
              ) => {
                const isLast = index === mealRequest.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={_id}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar
                          src={mealImage}
                          alt={mealTitle}
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
                      <div className="w-max">{requestStatus}</div>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Cancel Meal">
                        <IconButton
                          onClick={() => handleCancelMeal(_id, mealTitle)}
                          variant="text"
                        >
                          <MdCancel className="text-xl" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
};

export default RequestedMeals;
