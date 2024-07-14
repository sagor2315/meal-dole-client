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
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAllMealRequest from "../../../../Hooks/useMealsRequest/useAllMealRequest";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic/useAxiosPublic";
import { IoMdSave } from "react-icons/io";
import { useForm } from "react-hook-form";
import { useCallback, useEffect, useState } from "react";

const TABLE_HEAD = ["Meal Title", "Email", "Name", "Status", "Action"];

const ServeMeals = () => {
  const [mealRequestAll, refetch] = useAllMealRequest();
  const axiosPublic = useAxiosPublic();

  const alreadyDelivered = mealRequestAll.find(
    (data) => data?.requestStatus === "delivered"
  );

  const handleSaveMeal = (id) => {
    if (alreadyDelivered?.delivered) {
      return Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Meal has already delivered",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    axiosPublic.patch(`/mealRequestAll/${id}`).then((res) => {
      const data = res.data;
      refetch();
      console.log(data);
    });
    console.log(id);
  };

  return (
    <Card className="h-full w-11/12 mx-auto">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="text-center">
          <h1 className="text-xl text-[#0F2139] font-semibold">
            Serve The Meals{" "}
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
            {mealRequestAll.map(
              (
                {
                  _id,
                  mealTitle,
                  mealImage,
                  userName,
                  userEmail,
                  requestStatus,
                },
                index
              ) => {
                const isLast = index === mealRequestAll.length - 1;
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
                        {userEmail}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {userName}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="w-max">{requestStatus}</div>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Deliver Meal">
                        <IconButton
                          onClick={() => handleSaveMeal(_id)}
                          variant="text"
                        >
                          <IoMdSave className="text-xl" />
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

export default ServeMeals;
