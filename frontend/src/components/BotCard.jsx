import PropTypes from "prop-types";

export default function BotCard({ img, name }) {
  return (
    <div className="bot_card">
      <img src={img} alt={name} className="bot_img" />
      <h2>{name}</h2>
    </div>
  );
}

BotCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
