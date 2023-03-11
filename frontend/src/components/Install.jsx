import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faGithub,
  faChrome,
} from "@fortawesome/free-brands-svg-icons";

export default function Install({ linkGithub, linkDiscord, linkChrome }) {
  return (
    <>
      <h3 className="titleInstal">Installation</h3>
      <div className="iconsInstall">
        {linkDiscord && (
          <a href={linkDiscord} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faDiscord} className="icons" />
          </a>
        )}
        {linkChrome && (
          <a href={linkChrome} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faChrome} className="icons" />
          </a>
        )}
        {linkGithub && (
          <a href={linkGithub} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} className="icons" />
          </a>
        )}
      </div>
    </>
  );
}

Install.propTypes = {
  linkGithub: PropTypes.string.isRequired,
  linkDiscord: PropTypes.string.isRequired,
  linkChrome: PropTypes.string.isRequired,
};
