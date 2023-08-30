import React from "react";
import "./Service.css";
import jardinageImg from '../../Assets/Service/JARDINAGE.png';
import LivreurImg from '../../Assets/Service/Livreur.png';
import ElectricitéImg from '../../Assets/Service/Electricité.png';
import PeintureImg from '../../Assets/Service/Peinture.png';
import CoutureImg from '../../Assets/Service/Couture.png';
import ElectromenagerImg from '../../Assets/Service/Electromenager.png';
import ServiceAutoImg from '../../Assets/Service/Service auto.png';
import MenuisierImg from '../../Assets/Service/Menuisier.png';
import SurvaillanceImg from '../../Assets/Service/Survaillance.png';
import PlomberieImg from '../../Assets/Service/Plomberie.png';
import ChauffageImg from '../../Assets/Service/Chauffage.png';
import ServeureImg from '../../Assets/Service/Serveure.png';
import ClimatisationImg from '../../Assets/Service/Climatisation.png';
import PorteetserrureImg from '../../Assets/Service/Porte et serrure.png';
import TraiteurImg from '../../Assets/Service/Traiteur.png';
import ForgeronImg from '../../Assets/Service/Forgeron.png';
import MaçonImg from '../../Assets/Service/Maçon.png'


const Card = (props) => (
  <div className="card">
    <img src={props.imgUrl} alt={props.alt || "Image"} />
    <div className="card-content">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  </div>
);

const CardContainer = (props) => (
  <div className="cards-container">
    {props.cards.map((card) => (
      <Card title={card.title} content={card.content} imgUrl={card.imgUrl} />
    ))}
  </div>
);
class Service extends React.Component {
  componentDidMount() {
    this.startAutoSlide();
  }

  componentWillUnmount() {
    this.stopAutoSlide();
  }

  startAutoSlide = () => {
    this.intervalId = setInterval(this.handleScrollRight, 2000);
  };

  stopAutoSlide = () => {
    clearInterval(this.intervalId);
  };

  handleScrollLeft = () => {
    const container = document.querySelector(".cards-container");
    container.scrollLeft -= 500;
  };

  handleScrollRight = () => {
    const container = document.querySelector(".cards-container");
    container.scrollLeft += 500;
  };

  render() {
    const cardsData = [
      { id: 1, content: "Jardinage", imgUrl: jardinageImg },
      { id: 2, content: "Livreur", imgUrl: LivreurImg },
      { id: 3, content: "Electricité", imgUrl: ElectricitéImg  },
      { id: 4, content: "Traiteur", imgUrl: TraiteurImg },
      {
        id: 5,
        content: "Peinture",
        imgUrl: PeintureImg,
      },
      { id: 6, content: "Couture", imgUrl: CoutureImg },
      { id: 7, content: "Forgeron", imgUrl: ForgeronImg },
      {
        id: 8,
        content: "Electromenager",
        imgUrl: ElectromenagerImg
      },
      { id: 9, content: "Maçon", imgUrl: MaçonImg },
      {
        id: 10,
        content: "Service auto",
        imgUrl: ServiceAutoImg,
      },
      {
        id: 11,
        content: "Menuisier",
        imgUrl: MenuisierImg,
      },
      {
        id: 12,
        content: "Survaillance",
        imgUrl: SurvaillanceImg,
      },
      {
        id: 13,
        content: "Plomberie",
        imgUrl: PlomberieImg,
      },
      {
        id: 14,
        content: "Chauffage",
        imgUrl: ChauffageImg,
      },
      {
        id: 15,
        content: "Serveure",
        imgUrl: ServeureImg,
      },
      {
        id: 16,
        content: "Climatisation",
        imgUrl: ClimatisationImg,
      },
      {
        id: 17,
        content: "Porte et serrure",
        imgUrl: PorteetserrureImg,
      },
    ];

    return (
      <>
      <section id="Service">
        <div className="container">
          <h2 style={{ "text-align": "center", "marginTop" : "5rem" }}>Découvrir Nos Services</h2>
          <CardContainer cards={cardsData} />
        </div>
        </section>
      </>
    );
  }
}

export default Service;
