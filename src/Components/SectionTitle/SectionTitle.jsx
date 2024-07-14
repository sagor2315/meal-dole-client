import PropTypes from "prop-types";

const SectionTitle = ({ Heading }) => {
  return (
    <div>
      <h1 className="text-white text-center md:text-4xl text-3xl font-semibold md:pb-10 pb-3">
        {Heading}
      </h1>
    </div>
  );
};

SectionTitle.propTypes = {
  Heading: PropTypes.string,
};

export default SectionTitle;
