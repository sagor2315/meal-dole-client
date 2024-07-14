import useUpcomingMeals from "../../Hooks/Upcomingmeals/useUpcomingMeals";
import MealCAtegorySingleCard from "../HomePage/MealsByCategory/MealsCategoryCard/MealCAtegorySingleCard";

const UpcomingMeal = () => {
  const [upcomingMeals] = useUpcomingMeals();

  return (
    <div className="bg-primaryColor">
      <div className="lg:pt-14 md:pt-12 py-7 md:pb-10 lg:px-8 md:px-5 px-3 max-w-screen-2xl mx-auto">
        <h1 className="text-center font-semibold text-4xl text-white">
          All Upcoming Meals
        </h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {upcomingMeals.map((meal, idx) => (
            <div key={idx}>
              <MealCAtegorySingleCard
                meal={meal}
                upcomingMeals={upcomingMeals}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingMeal;
