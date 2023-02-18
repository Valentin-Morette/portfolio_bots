import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import epicgame from "../../assets/img/epicgame.png";

export default function BotTwitterEpicGames() {
  return (
    <div className="global">
      <h1>EpicGames</h1>
      <img src={epicgame} alt="epicgame" className="imgTuto" />
      <div className="descAndCommandes">
        <div className="blocDCTwitter">
          <h3 className="descriptionsBots firstDesc">Description</h3>
          <p className="descriptions">
            Ce bot a pour but de tenir à jour les fans de jeux vidéo sur les
            dernières offres gratuites sur l'Epic Games Store. Chaque jeudi à
            17h, le bot publie un tweet contenant un lien direct vers le nouveau
            jeu gratuit disponible sur la plateforme. Les utilisateurs peuvent
            ainsi accéder facilement au jeu et profiter de cette offre limitée
            dans le temps. Grâce à ce bot, les fans de jeux vidéo peuvent être
            sûrs de ne pas manquer les dernières offres de l'Epic Games Store et
            découvrir de nouveaux jeux gratuitement.
          </p>
        </div>
      </div>
      <h3 className="titleInstal">Twitter associé</h3>
      <div className="iconsInstall">
        <a
          href="https://twitter.com/BiiiiipBooop"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} className="icons" />
        </a>
      </div>
    </div>
  );
}
