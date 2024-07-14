import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { MdCancel, MdOutlineUpdate } from "react-icons/md";
import useAddMeals from "../../../../Hooks/useAddMeals";
import { GrView } from "react-icons/gr";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";

const TABLE_HEAD = [
  "",
  "Meal Title",
  "Likes",
  "Reviews",
  "Name",
  "Email",
  "Update",
  "Delete",
  "View",
];

const AllMeals = () => {
  const [allMeals, refetch] = useAddMeals();
  const axiosPublic = useAxiosPublic();

  const handleDelete = (id, title) => {
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
        axiosPublic.delete(`/addMeals/${id}`).then((res) => {
          const data = res.data;
          refetch();
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: `${title} has been deleted.`,
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
          <h1 className="text-xl text-[#0F2139] font-semibold">All Meals </h1>
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
            {allMeals.map(
              (
                {
                  mealTitle,
                  adminName,
                  adminEmail,
                  mealImage,
                  likes,
                  reviews,
                  _id,
                },
                index
              ) => {
                const isLast = index === allMeals.length - 1;
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
                      <div className="w-max">
                        {/* <Chip
                          size="sm"
                          variant="ghost"
                          value={likes}
                          color={
                            likes === 0
                              ? "green"
                              : likes === "0"
                              ? "amber"
                              : "red"
                          }
                        /> */}
                        {adminName}
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography>{adminEmail}</Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Update Meal">
                        <Link to={`/dashboard/editMeal/${_id}`}>
                          <IconButton variant="text">
                            <MdOutlineUpdate className="text-xl" />
                          </IconButton>
                        </Link>
                      </Tooltip>
                    </td>

                    <td className={classes}>
                      <Tooltip content="Delete Meal">
                        <IconButton
                          onClick={() => handleDelete(_id, mealTitle)}
                          variant="text"
                        >
                          <MdCancel className="text-xl" />
                        </IconButton>
                      </Tooltip>
                    </td>

                    <td className={classes}>
                      <Tooltip content="View Details">
                        <Link to={`/mealDetails/${_id}`}>
                          <IconButton variant="text">
                            <GrView className="text-xl" />
                          </IconButton>
                        </Link>
                      </Tooltip>
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
  );
};

export default AllMeals;
