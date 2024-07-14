import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import useUsersAll from "../../../../Hooks/useUsersAll/useUsersAll";
import { RiAdminFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
// import useAxiosPublic from "../../../../Hooks/useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const ManageUsers = () => {
  const TABLE_HEAD = [
    "",
    "Name",
    "Email",
    "Status",
    "Action",
    "Subscription Status",
  ];

  const [usersAll, refetch] = useUsersAll();
  // const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const handleUserDelete = (id) => {
    axiosSecure.delete(`/usersData/${id}`).then((res) => {
      const user = res.data;
      refetch();
      if (user.deletedCount) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "user deleted successfully",
          showCancelButton: false,
          timer: 1500,
        });
      }
      console.log(user);
    });
  };

  const handleMakeAdmin = (id) => {
    axiosSecure.patch(`/usersData/admin/${id}`).then((res) => {
      const data = res.data;
      if (data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "user modified successfully",
          showCancelButton: false,
          timer: 1500,
        });
      }
      console.log(data);
    });
  };

  return (
    <div>
      <Card className="h-full w-11/12 mx-auto">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="text-center">
            <h1 className="text-xl text-[#0F2139] font-semibold">
              User Management Table{" "}
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
              {usersAll.map(({ name, email, photoUrl, _id, role }, index) => {
                const isLast = index === usersAll.length - 1;
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
                          src={photoUrl}
                          // alt={name}
                          size="md"
                          className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                        />
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {name}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {email}
                      </Typography>
                    </td>

                    <td className={classes}>
                      {role === "Admin" ? (
                        <Tooltip content="Admin">
                          <IconButton
                            onClick={() => handleMakeAdmin(_id)}
                            variant="text"
                          >
                            <RiAdminFill className="text-xl" />
                          </IconButton>
                        </Tooltip>
                      ) : (
                        <Tooltip content="Not Admin">
                          <IconButton
                            onClick={() => handleMakeAdmin(_id)}
                            variant="text"
                          >
                            <FaUser className="text-xl" />
                          </IconButton>
                        </Tooltip>
                      )}
                    </td>

                    <td className={classes}>
                      <Tooltip content="Make Admin">
                        <IconButton
                          onClick={() => handleUserDelete(_id)}
                          variant="text"
                        >
                          <MdCancel className="text-xl" />
                        </IconButton>
                      </Tooltip>
                    </td>

                    <td className={classes}>
                      <Typography variant="h6">No Subscription</Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>

        {/* <CardFooter className="flex items-center justify-between w-10/12 border mx-auto border-blue-gray-50"></CardFooter> */}
      </Card>
    </div>
  );
};

export default ManageUsers;
