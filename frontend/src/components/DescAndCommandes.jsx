import PropTypes from "prop-types";
import DescBot from "./DescBot";
import CommandesBot from "./CommandesBot";

export default function descAndCommandes({ desc, commandes }) {
  return (
    <div className="descAndCommandes">
      <DescBot desc={desc} type="discord" />
      <CommandesBot desc={commandes.desc} commandes={commandes.commandes} />
    </div>
  );
}

descAndCommandes.propTypes = {
  desc: PropTypes.string.isRequired,
  commandes: PropTypes.shape({
    desc: PropTypes.string.isRequired,
    commandes: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
