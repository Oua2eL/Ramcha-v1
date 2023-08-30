import React, { useState } from "react";
import "./Card.css";
import { BiUserCheck } from "react-icons/bi";
import { RxCountdownTimer } from "react-icons/rx";
import { RiTeamLine } from "react-icons/ri";
import { BsEmojiSmile } from "react-icons/bs";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Card = () => {
  const [counterStart, setCounterStart] = useState(false);

  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterStart(true)}
        onExit={() => setCounterStart(false)}
      >
        <div className="card_container">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="card_stats">
                  <div className="card-icon">
                    <div className="icon-stat">
                      <BiUserCheck />
                    </div>
                    <div className="card_counter">
                      {counterStart && (
                        <CountUp start={0} end={99} duration={2} delay={0} />
                      )}{" "}
                      %
                    </div>
                    <div className="card_text">Fidélisation Des Clients</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="card_stats">
                  <div className="card-icon">
                    <div className="icon-stat">
                      <RxCountdownTimer />
                    </div>
                    <div className="card_counter">
                      {counterStart && (
                        <CountUp start={0} end={7} duration={2} delay={0} />
                      )}
                    </div>
                    <div className="card_text">Années De Service</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="card_stats">
                  <div className="card-icon">
                    <div className="icon-stat">
                      <RiTeamLine />
                    </div>
                    <div className="card_counter">
                      {counterStart && (
                        <CountUp start={0} end={30} duration={2} delay={0} />
                      )}
                    </div>
                    <div className="card_text">Équipe De Professionnels</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="card_stats">
                  <div className="card-icon">
                    <div className="icon-stat">
                      <BsEmojiSmile />
                    </div>
                    <div className="card_counter">
                      {counterStart && (
                        <CountUp start={0} end={221} duration={2} delay={0} />
                      )}
                    </div>
                    <div className="card_text">Clients Satisfaits</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
};

export default Card;
