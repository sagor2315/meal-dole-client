import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  MdOutlineFreeBreakfast,
  MdOutlineLunchDining,
  MdDinnerDining,
} from "react-icons/md";
import { GiHotMeal } from "react-icons/gi";

import "react-tabs/style/react-tabs.css";
import MealsCategoryCard from "./MealsCategoryCard/MealsCategoryCard";
import useAddMeals from "../../../Hooks/useAddMeals";

const MealsByCategory = () => {
  //   const categories = ["All Meals", "Breakfast", "Lunch", "Dinner"];
  //   const InitialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(0);

  const [allMeals] = useAddMeals();
  console.log(allMeals);

  const breakfast = allMeals.filter(
    (data) => data.mealType.toLowerCase() === "breakfast"
  );
  const lunch = allMeals.filter(
    (data) => data.mealType.toLowerCase() === "lunch"
  );
  const dinner = allMeals.filter(
    (data) => data.mealType.toLowerCase() === "dinner"
  );

  console.log("This breakfast", breakfast);
  console.log("This lunch", lunch);
  console.log("This dinner", dinner);

  return (
    <div className="lg:pt-16 md:pt-12 py-7 md:pb-10 lg:px-8 md:px-5 px-3 max-w-screen-2xl mx-auto">
      <h1 className="text-white text-center md:text-4xl text-3xl font-semibold md:pb-5 pb-3">
        Meals By Category
      </h1>

      <Tabs
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        selectedTabClassName="text-yellow-500 font-medium border-[5px] border-black"
      >
        <TabList className="flex justify-center">
          <div className="text-white md:text-3xl text-xl">
            <Tab>
              <span className="flex items-center gap-2">
                <GiHotMeal className="md:text-3xl text-xl" /> All Meals
              </span>
            </Tab>
            <Tab>
              <span className="flex items-center gap-2">
                <MdOutlineFreeBreakfast className="md:text-3xl text-xl" />{" "}
                Breakfast
              </span>
            </Tab>
            <Tab>
              <span className="flex items-center gap-2">
                <MdOutlineLunchDining className="md:text-3xl text-xl" /> Launch
              </span>
            </Tab>
            <Tab>
              {" "}
              <span className="flex items-center gap-2">
                <MdDinnerDining className="md:text-3xl text-xl" /> Dinner
              </span>
            </Tab>
          </div>
        </TabList>

        <TabPanel>
          <p className="text-white">All Meals</p>
          <MealsCategoryCard data={allMeals} />
        </TabPanel>

        <TabPanel>
          {" "}
          <p className="text-white">Breakfast</p>
          <MealsCategoryCard data={breakfast} />
        </TabPanel>

        <TabPanel>
          <p className="text-white">Lunch</p>
          <MealsCategoryCard data={lunch} />
        </TabPanel>

        <TabPanel>
          <p className="text-white">Dinner</p>
          <MealsCategoryCard data={dinner} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default MealsByCategory;
