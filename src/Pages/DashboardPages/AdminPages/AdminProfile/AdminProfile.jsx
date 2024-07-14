import { useEffect, useState } from "react";
import useAddMeals from "../../../../Hooks/useAddMeals";
import useAuthentication from "../../../../Hooks/useAuthentication";

const AdminProfile = () => {
  const { users } = useAuthentication();
  const [numAddedMeals, setNumAddedMeals] = useState([]);
  const [allMeals] = useAddMeals();

  useEffect(() => {
    const mealsAdded = allMeals?.filter(
      (data) => data?.adminEmail === users?.email
    );
    setNumAddedMeals(mealsAdded);
    console.log(mealsAdded);
  }, []);
  console.log(numAddedMeals);

  return (
    <div className="bg-[#0F0D21] h-screen lg:pt-28 md:pt-16 pt-8 flex justify-center px-2">
      <div>
        <div className="flex justify-center items-center h-32 w-32 mx-auto border-2 border-white rounded-full mb-6">
          <img
            className="rounded-full border-2"
            referrerPolicy="no-referrer"
            src={users?.photoURL}
            alt=""
          />
        </div>
        <h1 className=" text-white text-2xl font-semibold text-center">
          Admin Name: {users?.displayName}
        </h1>
        <h1 className="text-white font-semibold py-2 text-center">
          Admin Email: {users?.email}
        </h1>
        <h1 className="text-white font-semibold text-center">
          Number of meals added: {numAddedMeals?.length}
        </h1>
      </div>
    </div>
  );
};

export default AdminProfile;
