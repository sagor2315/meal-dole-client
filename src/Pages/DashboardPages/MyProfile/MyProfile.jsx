import { FaMedal } from "react-icons/fa6";
import useAuthentication from "../../../Hooks/useAuthentication";
import usePayments from "../../../Hooks/usePayments/usePayments";

const MyProfile = () => {
  // const takePackage = false;
  const [paymentsData] = usePayments();
  console.log(paymentsData);

  const { users } = useAuthentication();
  const usersInfo = paymentsData.find((data) => data.email === users?.email);
  console.log(usersInfo);

  return (
    <div className=" bg-[#0F0D21] h-screen lg:pt-28 md:pt-16 pt-8">
      <h1 className="flex justify-center items-start py-2 text-white font-fontSans text-lg mx-3">
        {usersInfo?.packageName[0]
          ? `Congratulations! You have got a ${usersInfo?.packageName[0]} badge for purchase premium package.`
          : `Congratulations! You have got a bronze badge for registration.`}
        <FaMedal
          className={`${
            usersInfo?.packageName[0] === "Silver"
              ? "text-[#C0C0C0]"
              : usersInfo?.packageName[0] === "Gold"
              ? "text-yellow-500"
              : usersInfo?.packageName[0] === "Gold"
              ? "text-[#584F3F]"
              : " text-[#CD7F32]"
          } text-3xl font-bold `}
        />
      </h1>
      <div className="flex flex-col justify-center items-center lg:py-5 md:py-3 py-2 border-2 lg:w-4/12 md:w-6/12 w-10/12 mx-auto">
        <div className="border-[4px] bg-[#0F2139] p-1 w-32 h-32 flex justify-center items-center mb-3 rounded-full">
          <img
            className="rounded-full border-[4px]"
            referrerPolicy="no-referrer"
            src={users?.photoURL}
            alt=""
          />
        </div>
        <h1 className=" text-white text-2xl font-semibold">
          {users?.displayName}
        </h1>

        <h1 className="my-3 text-white">{users?.email}</h1>
        <h1 className=" text-white font-semibold">
          {usersInfo?.packageName[0]
            ? `You are ${usersInfo?.packageName[0]} package holder`
            : "You have no package yet!"}
        </h1>
        <h1 className="mt-5">
          <FaMedal
            className={`${
              usersInfo?.packageName[0] === "Silver"
                ? "text-[#C0C0C0]"
                : usersInfo?.packageName[0] === "Gold"
                ? "text-yellow-500"
                : usersInfo?.packageName[0] === "Gold"
                ? "text-[#584F3F]"
                : " text-[#CD7F32]"
            } md:text-8xl text-6xl font-bold `}
          />
        </h1>
      </div>
    </div>
  );
};

export default MyProfile;
