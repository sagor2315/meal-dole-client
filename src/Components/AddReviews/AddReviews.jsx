import { Avatar } from "@material-tailwind/react";
// import useAuthentication from "../../Hooks/useAuthentication";
import PropTypes from "prop-types";
import useAddReviews from "../../Hooks/useAddReviews/useAddReviews";

const AddReviews = ({ reviews, id }) => {
  const [reviewsData] = useAddReviews();
  console.log(reviewsData);

  const reviewCounter = reviewsData?.filter((review) => review?._id === id);
  console.log(reviewCounter);
  // console.log(reviewCounter?.ReviewComments);

  console.log(reviews, id);

  // const { users } = useAuthentication();
  return (
    <div>
      <div className={`my-7 ${reviewCounter?.length > 0 ? "" : "hidden"}`}>
        {reviewCounter?.map((data) => (
          <div key={data._id} className="mb-7">
            {/* <div className="flex items-center gap-3">
              <Avatar
                src={users?.photoURL}
                // alt={name}
                size="md"
                className="border border-gray-700 bg-blue-gray-50/50 object-contain p-1"
              />
              <h1>{users?.displayName}</h1>
            </div> */}

            <div className="ml-5 mt-2">
              <div>
                {data?.ReviewComments?.map((data) => (
                  <div key={data._id} className="py-3">
                    <div className="flex items-center gap-3">
                      <Avatar
                        src={data?.userPhoto}
                        // alt={name}
                        size="md"
                        className="border border-gray-700 bg-blue-gray-50/50 object-contain p-1"
                      />
                      <h1>{data?.userName}</h1>
                    </div>
                    <p className="py-1">{data?.reviewText}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

AddReviews.propTypes = {
  reviews: PropTypes.string,
  id: PropTypes.string,
};

export default AddReviews;
