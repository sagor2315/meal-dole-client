import { Button /* Checkbox */ } from "@material-tailwind/react";
import MealCAtegorySingleCard from "../HomePage/MealsByCategory/MealsCategoryCard/MealCAtegorySingleCard";
import { useForm } from "react-hook-form";
import { useCallback, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Meals = () => {
  const [title, setTitle] = useState("");
  const [allMeals, setAllMeals] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  // useEffect(() => {
  //   // fetch(`http://localhost:5000/addMeals?title=${title}`)
  //   //   .then((res) => res.json())
  //   //   .then((data) => setAllMeals(data));
  //   fetchData();
  // }, []);

  const fetchData = useCallback(() => {
    fetch(`http://localhost:5000/addMeals?title=${title}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setAllMeals((prevMeals) => [...prevMeals, ...data]);
        setHasMore(data.length > 0);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [title]);

  useEffect(() => {
    fetchData();
  }, [title, fetchData]);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setTitle(data.inputText);
    console.log(data.inputText);
  };
  // console.log(typeof title);

  return (
    <div className="bg-primaryColor">
      <div className="lg:pt-14 md:pt-12 py-7 md:pb-10 lg:px-8 md:px-5 px-3 max-w-screen-2xl mx-auto">
        <div className="lg:w-7/12 md:w-10/12 w-11/12 mx-auto lg:py-10 md:py-7 py-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-center md:gap-2 gap-1 "
          >
            <div className="lg:w-9/12 md:w-9/12 w-full">
              <input
                {...register("inputText")}
                type="text"
                name="inputText"
                className="w-full md:py-5 py-[9px] rounded-full md:pl-5 pl-3 text-white bg-[#181818]"
                placeholder="Search your meal"
              />
            </div>
            <div className="lg:w-1/5 md:w-1/4">
              <Button
                type="submit"
                className="md:py-[19px] py-[9px] w-full md:rounded-full rounded-full capitalize md:text-lg text-base font-bold bg-[#42B87E]"
              >
                Find
              </Button>
            </div>
          </form>
        </div>

        {/* <div className="flex lg:flex-row flex-col items-center justify-between gap-5">
          <div className="flex md:flex-row flex-col justify-center items-center">
            <div className="text-white">Filter By Category:</div>
            <div className="flex items-center ">
              <Checkbox color="red" defaultChecked />{" "}
              <h1 className="text-white">Breakfast</h1>
            </div>
            <div className="flex items-center ">
              <Checkbox color="green" defaultChecked />
              <h1 className="text-white">Lunch</h1>
            </div>
            <div className="flex items-center ">
              <Checkbox color="amber" defaultChecked />
              <h1 className="text-white">Dinner</h1>
            </div>
          </div>

          <div className="flex md:flex-row flex-col justify-center items-center">
            <div className="text-white">Filter By Price:</div>

            <div className="flex items-center ">
              <Checkbox color="red" defaultChecked />
              <h1 className="text-white">$39</h1>
            </div>
            <div className="flex items-center ">
              <Checkbox color="amber" defaultChecked />
              <h1 className="text-white">$59</h1>
            </div>
            <div className="flex items-center ">
              <Checkbox color="green" defaultChecked />
              <h1 className="text-white">$79</h1>
            </div>
          </div>
        </div> */}

        {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {allMeals.map((meal, idx) => (
            <div key={idx}>
              <MealCAtegorySingleCard meal={meal} />
            </div>
          ))}
        </div> */}

        <InfiniteScroll
          dataLength={allMeals.length}
          next={fetchData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {allMeals.map((meal, idx) => (
              <div key={idx}>
                <MealCAtegorySingleCard meal={meal} />
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Meals;
