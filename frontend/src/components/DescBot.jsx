import PropTypes from "prop-types";

export default function DescBot({ desc, type }) {
  return (
    <div className={`blocDC${type === "twitter" ? "Twitter" : ""}`}>
      <h3 className="descriptionsBots firstDesc">Description</h3>
      <p className="descriptions">{desc}</p>
    </div>
  );
}

DescBot.propTypes = {
  desc: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
