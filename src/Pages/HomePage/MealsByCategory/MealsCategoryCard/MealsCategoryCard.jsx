import PropTypes from "prop-types";
import MealCAtegorySingleCard from "./MealCAtegorySingleCard";

const MealsCategoryCard = ({ data }) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      {data.map((meal) => (
        <MealCAtegorySingleCard
          key={meal._id}
          meal={meal}
        ></MealCAtegorySingleCard>
      ))}
    </div>
  );
};

MealsCategoryCard.propTypes = {
  data: PropTypes.array,
};

export default MealsCategoryCard;
