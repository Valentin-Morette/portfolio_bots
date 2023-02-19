import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Install({ linkGithub, linkDiscord }) {
  return (
    <>
      <h3 className="titleInstal">Installation</h3>
      <div className="iconsInstall">
        <a href={linkDiscord} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faDiscord} className="icons" />
        </a>
        <a href={linkGithub} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} className="icons" />
        </a>
      </div>
    </>
  );
}

Install.propTypes = {
  linkGithub: PropTypes.string.isRequired,
  linkDiscord: PropTypes.string.isRequired,
};
