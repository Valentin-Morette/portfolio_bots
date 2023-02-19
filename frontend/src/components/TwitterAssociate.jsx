import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function TwitterAssociate({ linkTwitter }) {
  return (
    <>
      <h3 className="titleInstal">Twitter Associé</h3>
      <div className="iconsInstall">
        <a href={linkTwitter} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="icons" />
        </a>
      </div>
    </>
  );
}

TwitterAssociate.propTypes = {
  linkTwitter: PropTypes.string.isRequired,
};
