import React, { useRef } from "react";
import { LuVerified } from "react-icons/lu";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current["name"].value;
    const email = form.current["email"].value;
    const message = form.current["message"].value;

    emailjs
      .sendForm(
        "service_c853xkf",
        "template_67kv4hk",
        form.current,
        "B3EpBB3odD8guq2H6"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message Sent");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Error sending message");
        }
      );
  };

  return (
    <>
      <h2 style={{ "text-align": "center", "marginBottom": "5rem" }}>CONTACTEZ-NOUS</h2>
      <section id="Contact">
        <section className="contactbox">
          <div className="contactbox_options-container">
            <div className="contactbox_options-text">
              <div className="contactbox_options-unregistered">
                <h3 className="contactbox_unregistered-title">
                  Besoin De Savoir Quelque Chose ?
                </h3>
                <p className="contactbox_unregistered-text">
                  <LuVerified /> Prenez Le Temps De Comprendre Vos Besoins
                </p>
                <p className="contactbox_unregistered-text">
                  <LuVerified /> Vous Guider À Travers Notre Processus De Mise
                  En Relation Avec Un Personnel Qualifié Et Expérimenté
                </p>
                <p className="contactbox_unregistered-text">
                  <LuVerified /> Discutez Des Options De Tarification Et
                  Aidez-Vous À Trouver La Bonne Solution Pour Votre Budget
                </p>
                <p className="contactbox_unregistered-text">
                  <LuVerified /> Fournir Des Conseils Sur La Façon De Démarrer
                  Et Répondre À Toutes Les Questions Que Vous Pourriez Avoir
                </p>
              </div>
            </div>
            <div className="contactbox_options-forms" id="contactbox_options-forms">
              <div className="contactbox_forms-login">
                <h3 className="form_title">Contactez-nous</h3>
                <form className="form_form" ref={form} onSubmit={sendEmail}>
                  <fieldset className="form_fieldset">
                    <div className="form_field">
                      <input
                        type="text"
                        placeholder="Votre Nom"
                        name="name"
                        className="form_field-input"
                        required
                        autoFocus
                      />
                    </div>
                    <div className="form_field">
                      <input
                        type="email"
                        placeholder="Votre Email"
                        name="email"
                        className="form_field-input"
                        required
                      />
                    </div>
                    <div className="form_field">
                      <input
                        type="text"
                        placeholder="Votre Message"
                        name="message"
                        className="form_field-input"
                        required
                      />
                    </div>
                  </fieldset>
                  <div className="form_buttons">
                    <input
                      type="submit"
                      value="soumettre"
                      className="form_buttons-action"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Contact;
