import ScrollToTopButton from "../../Components/ScrollRelatedStyles/ScrollToTopButton";
import Banner from "./Banner/Banner";
import MealsByCategory from "./MealsByCategory/MealsByCategory";
import MemberShip from "./MemberShip/MemberShip";
import PopularMealsGallery from "./PopularMealsGallery/PopularMealsGallery";

const HomePage = () => {
  return (
    <div className="bg-primaryColor">
      <Banner />
      <MealsByCategory />
      <PopularMealsGallery />
      <MemberShip />
      <ScrollToTopButton />
    </div>
  );
};

export default HomePage;
