import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const PopularMealsGallery = () => {
  return (
    <div className="lg:pt-16 md:pt-12 py-7 md:pb-10 lg:px-8 md:px-5 px-3 max-w-screen-2xl mx-auto">
      <SectionTitle Heading={"Popular Meals Gallery"} />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="grid gap-4">
          <div>
            <img
              className="h-[350px] max-w-full rounded-lg object-cover hover:scale-105 hover:transition-transform duration-300 hover:duration-300"
              // src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              src="https://www.allrecipes.com/thmb/0VXMwCY9RVNrNvWcF_9v0iZpNqA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/JF_241160_CreamyCottageCheeseScrambled_4x3_12902-619d00dc88594ea9b8ed884a108db16d.jpg"
              alt="gallery-photo"
            />
          </div>
          <div className="">
            <img
              className="h-[550px] max-w-full rounded-lg object-cover hover:scale-105 hover:transition-transform duration-300 hover:duration-300"
              // src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
              src="https://www.simplyrecipes.com/thmb/1_yqyK8onEVHnK8aRapJ-1V-ezU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2007__11__persimmon-pomegranate-salad-vertical-a-1692-8d4ef135475f441db018627795a2daad.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-[250px] max-w-full rounded-lg object-cover hover:scale-105 hover:transition-transform duration-300 hover:duration-300"
              // src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              src="https://www.thedailymeal.com/img/gallery/youll-never-guess-the-secret-ingredient-in-ihops-omelettes/ihopomelette_yelp.jpg"
              alt="gallery-photo"
            />
          </div>
        </div>

        <div className="grid gap-4">
          <div>
            <img
              className="h-[550px] max-w-full rounded-lg object-cover hover:scale-105 hover:transition-transform duration-300 hover:duration-300"
              // src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              src="https://www.acouplecooks.com/wp-content/uploads/2022/01/Hummus-Bowl-016.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-[250px] max-w-full rounded-lg object-cover hover:scale-105 hover:transition-transform duration-300 hover:duration-300"
              // src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              src="https://weelicious.com/wp-content/uploads/2014/09/09-08-2014-1.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-[350px] max-w-full rounded-lg object-cover hover:scale-105 hover:transition-transform duration-300 hover:duration-300 "
              src="https://simply-delicious-food.com/wp-content/uploads/2018/07/mexican-lunch-bowls-3.jpg"
              // src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="gallery-photo"
            />
          </div>
        </div>

        <div className="grid gap-4">
          <div>
            <img
              className="h-[250px] max-w-full rounded-lg object-cover hover:scale-105 hover:transition-transform duration-300 hover:duration-300"
              src="https://static01.nyt.com/images/2024/01/10/multimedia/10Tanis-01-wkpc/10Tanis-01-wkpc-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
              // src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-[350px] max-w-full rounded-lg object-cover hover:scale-105 hover:transition-transform duration-300 hover:duration-300 "
              src="https://assets.epicurious.com/photos/59a48f237e283157d14a5a6a/master/pass/How-to-Throw-a-Grocery-Store-Dinner-Party-hero-with-hands-15082017.jpg"
              // src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-[550px] max-w-full rounded-lg object-cover hover:scale-105 hover:transition-transform duration-300 hover:duration-300"
              // src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              src="https://hips.hearstapps.com/hmg-prod/images/easy-dinner-ideas-lasagna-soup-64529c039668f.jpg?crop=1.00xw:0.834xh;0,0.0965xh&resize=980:*"
              alt="gallery-photo"
            />
          </div>
        </div>

        <div className="grid gap-4">
          <div>
            <img
              className="h-[550px] max-w-full rounded-lg object-cover hover:scale-105 hover:transition-transform duration-300 hover:duration-300"
              // src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              src="https://i0.wp.com/kristineskitchenblog.com/wp-content/uploads/2023/04/homemade-burrito-bowl-13.jpg?fit=1400%2C2100&ssl=1"
            />
          </div>
          <div>
            <img
              className="h-[615px] max-w-full rounded-lg object-cover hover:scale-105 hover:transition-transform duration-300 hover:duration-300 "
              src="https://www.mommyhatescooking.com/wp-content/uploads/2021/06/Lunch-Boxes-Final-2-600x900.jpg"
              // src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
              alt="gallery-photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopularMealsGallery;
