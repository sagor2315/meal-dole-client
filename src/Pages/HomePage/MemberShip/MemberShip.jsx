import MembershipCard from "../../../Components/MembershipCard/MembershipCard";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import usePackages from "../../../Hooks/usePackages/usePackages";
// import MembershipCard from "../../../Components/MembershipCard/MembershipCard";

const MemberShip = () => {
  // const MembershipCategory = ["Silver", "Gold", "Platinum"];

  const [memPackages] = usePackages();
  console.log(memPackages);

  // const Silver = memPackages.find(
  //   (data) => data.packageName.toLowerCase() === "Silver"
  // );
  // const Gold = memPackages.filter(
  //   (data) => data.packageName.toLowerCase() === "Gold"
  // );
  // const Platinum = memPackages.filter(
  //   (data) => data.packageName.toLowerCase() === "Platinum"
  // );
  // console.log(Silver);

  return (
    <div className="lg:pt-16 md:pt-12 py-7 md:pb-10 lg:px-8 md:px-5 px-3 max-w-screen-2xl mx-auto">
      <SectionTitle Heading={"Upgrade Your Membership"} />

      <div className="grid md:grid-cols-3  grid-cols-1 lg:gap-10 md:gap-3 gap-5">
        {memPackages.map((data, idx) => (
          <MembershipCard key={idx} data={data} />
        ))}

        {/* <MembershipCard type={"Silver"} />
        <MembershipCard type={"Gold"} />
        <MembershipCard type={"Platinum"} /> */}
      </div>
    </div>
  );
};

export default MemberShip;

{
  /* <Card
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
              className="font-bold text-2xl uppercase"
            >
              Silver
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="mt-6 flex justify-center gap-1 text-7xl font-normal"
            >
              <span className="mt-2 text-4xl">$</span>39{" "}
              <span className="self-end text-4xl">/mo</span>
            </Typography>
          </CardHeader>
          <CardBody className="p-0">
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">Breakfast</Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CrossIcon />
                </span>
                <Typography className="font-normal">Lunch</Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">Dinner</Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                  1 Glass Milk in Sleep Time / Day
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                  Fest Meal / Week
                </Typography>
              </li>
            </ul>
          </CardBody>
          <CardFooter className="mt-12 p-0">
            <Button
              size="lg"
              color="white"
              className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 bg-[#212121] text-white shadow-none hover:shadow"
              ripple={false}
              fullWidth={true}
            >
              Upgrade Now
            </Button>
          </CardFooter>
        </Card>
        <Card
          color="gray"
          variant="gradient"
          className="w-full bg-[#181818] from-0% to-0% shadow-none lg:p-8 md:p-2 p-5"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 mb-8  rounded-none border-b border-white/10 pb-8 text-center"
          >
            <Typography
              variant="small"
              color="white"
              className=" uppercase text-2xl font-bold text-yellow-500"
            >
              Gold
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="mt-6 flex justify-center gap-1 text-7xl font-normal"
            >
              <span className="mt-2 text-4xl">$</span>59{" "}
              <span className="self-end text-4xl">/mo</span>
            </Typography>
          </CardHeader>
          <CardBody className="p-0">
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">5 team members</Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">200+ components</Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                  40+ built-in pages
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                  1 year free updates
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                  Life time technical support
                </Typography>
              </li>
            </ul>
          </CardBody>
          <CardFooter className="mt-12 p-0">
            <Button
              size="lg"
              color="white"
              className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 bg-[#212121] text-white shadow-none hover:shadow"
              ripple={false}
              fullWidth={true}
            >
              Upgrade Now
            </Button>
          </CardFooter>
        </Card> */
}
