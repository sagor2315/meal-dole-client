import { BsCheckLg } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const MembershipCard = ({ type, data }) => {
  console.log(type);
  console.log("The new data is here: ", data);

  const CheckIcon = () => {
    return <BsCheckLg />;
  };
  const CrossIcon = () => {
    return <RxCross2 />;
  };

  return (
    <div>
      <Card
        key={type}
        color="gray"
        variant="gradient"
        className="w-full bg-[#181818] from-0% to-0% shadow-none lg:p-8 md:p-2 p-5"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
        >
          <Typography
            variant="small"
            color="white"
            className={`font-bold text-2xl uppercase ${
              data.packageName === "Gold" ? "text-yellow-500" : ""
            }`}
          >
            {data.packageName}
          </Typography>
          <Typography
            variant="h1"
            color="white"
            className="mt-6 flex justify-center gap-1 text-7xl font-normal"
          >
            <span className="mt-2 text-4xl">$</span>
            {data.packageName === "Silver"
              ? 59
              : "" || data.packageName === "Gold"
              ? 79
              : "" || data.packageName === "Platinum"
              ? 99
              : ""}
            <span className="self-end text-4xl">/mo</span>
          </Typography>
        </CardHeader>
        <CardBody className="p-0">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">
                {data.packageName === "Silver"
                  ? "Breakfast (3 Variation / mo)"
                  : "" || data.packageName === "Gold"
                  ? "Breakfast (6 Variation / mo)"
                  : "" || data.packageName === "Platinum"
                  ? "Breakfast (10 Variation / mo)"
                  : ""}
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">
                {data.packageName === "Silver"
                  ? "Lunch (3 Variation / mo)"
                  : "" || data.packageName === "Gold"
                  ? "Lunch (6 Variation / mo)"
                  : "" || data.packageName === "Platinum"
                  ? "Lunch (10 Variation / mo)"
                  : ""}
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">
                {data.packageName === "Silver"
                  ? "Dinner (3 Variation / mo)"
                  : "" || data.packageName === "Gold"
                  ? "Dinner (6 Variation / mo)"
                  : "" || data.packageName === "Platinum"
                  ? "Dinner (10 Variation / mo)"
                  : ""}
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                {data.packageName === "Silver" ? <CrossIcon /> : <CheckIcon />}
              </span>
              <Typography className="font-normal">
                1 Glass Milk in Sleep Time / Day
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                {data.packageName === "Platinum" ? (
                  <CheckIcon />
                ) : (
                  <CrossIcon />
                )}
              </span>
              <Typography className="font-normal">Fest Meal / Week</Typography>
            </li>
          </ul>
        </CardBody>
        <CardFooter className="mt-12 p-0">
          <Link to={`/checkOut/${data.packageName}`}>
            <Button
              size="lg"
              color="white"
              className="hover:scale-[1.02] focus:scale-[1.02] bg-[#212121] text-white shadow-none hover:shadow active:scale-100"
              ripple={false}
              fullWidth={true}
            >
              Upgrade Now
            </Button>
          </Link>
        </CardFooter>
        {/* <h1>card</h1> */}
      </Card>
    </div>
  );
};

MembershipCard.propTypes = {
  type: PropTypes.string,
  data: PropTypes.object,
};

export default MembershipCard;
