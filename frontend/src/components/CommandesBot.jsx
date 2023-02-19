import PropTypes from "prop-types";

export default function CommandesBot({ desc, commandes }) {
  return (
    <div className="blocDC">
      <h3 className="descriptionsBots">Commandes</h3>
      <p className="descriptions">{desc}</p>
      <ul className="listeCommandes">
        {commandes.map((commande) => (
          <li key={commande}>- {commande}</li>
        ))}
      </ul>
    </div>
  );
}

CommandesBot.propTypes = {
  desc: PropTypes.string.isRequired,
  commandes: PropTypes.arrayOf(PropTypes.string).isRequired,
};
