import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { PiNumberOneBold } from 'react-icons/pi';
import { PiNumberTwoBold } from 'react-icons/pi';
import { PiNumberThreeBold } from 'react-icons/pi';
import { PiNumberFourBold } from 'react-icons/pi';
import { PiNumberFiveBold } from 'react-icons/pi';
import './Avantage.css';




const Avantage = () => {
  return (
    <>
    <section id="Avantage">
      <div className="container">
      <h2 style={{ "text-align": "center", "marginTop": "5rem" }}>Avantage </h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "linear-gradient(69deg, #8686C1 0%, #2B378B 100%)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid linear-gradient(69deg, #8686C1 0%, #2B378B 100%)" }}
          style={{borderRadius: "200px"}}
          iconStyle={{ background: "linear-gradient(239deg, #2B378B 0%, #8686C1 100%)", color: "#fff" }}
          icon={<PiNumberOneBold />}
        >
          <h3 className="vertical-timeline-element-title">Accès Instantané à des Professionnels Qualifiés</h3>
          <p>
          En quelques clics sur vos appareils mobiles, vous pouvez rapidement vous connecter avec des professionnels compétents et fiables de votre région.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "linear-gradient(69deg, #8686C1 0%, #2B378B 100%)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid linear-gradient(69deg, #8686C1 0%, #2B378B 100%)" }}
          iconStyle={{ background: "linear-gradient(239deg, #2B378B 0%, #8686C1 100%)", color: "#fff" }}
          icon={<PiNumberTwoBold />}
        >
          <h3 className="vertical-timeline-element-title">Interface accueillante</h3>
      
          <p>
          La plateforme conviviale de Ramcha facilite la navigation et l'accès aux services pour les clients.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "linear-gradient(69deg, #8686C1 0%, #2B378B 100%)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid linear-gradient(69deg, #8686C1 0%, #2B378B 100%)" }}
          iconStyle={{ background: "linear-gradient(239deg, #2B378B 0%, #8686C1 100%)", color: "#fff" }}
          icon={<PiNumberThreeBold />}
        >
          <h3 className="vertical-timeline-element-title">Large variété de services </h3>
         
          <p>Ramcha propose une sélection diversifiée de services, répondant aux divers besoins domestiques, des petites réparations aux rénovations majeures.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "linear-gradient(69deg, #8686C1 0%, #2B378B 100%)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid linear-gradient(69deg, #8686C1 0%, #2B378B 100%)" }}
          iconStyle={{ background: "linear-gradient(239deg, #2B378B 0%, #8686C1 100%)", color: "#fff" }}
          icon={<PiNumberFourBold />}
        >
          <h3 className="vertical-timeline-element-title">Rapidité</h3>
       
          <p>Les clients peuvent rapidement trouver et se connecter avec des professionnels qualifiés à proximité, économisant du temps dans la recherche et l'attente de prestataires de services.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "linear-gradient(69deg, #8686C1 0%, #2B378B 100%)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid linear-gradient(69deg, #8686C1 0%, #2B378B 100%)" }}
          iconStyle={{ background: "linear-gradient(239deg, #2B378B 0%, #8686C1 100%)", color: "#fff" }}
          icon={<PiNumberFiveBold />}
          >
          <h3 className="vertical-timeline-element-title">
          Disponibilité 24h/24 et 7j/7 
          </h3>
          
          <p>Ramcha est disponible en permanence, permettant aux clients d'accéder aux services à tout moment. </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
      </section>

    </>
  );
};

export default Avantage;
