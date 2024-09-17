import { useState } from "react";
import Input from "./Input";

const Formulaire = () => {

  const [formData, setFormData] = useState({
        civility: '',
        name: '',
        lastname: '',
        email: '',
        birthdate: '',
        cp: '',
        ville: '',
      });

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

  const [showModal, setShowModal] = useState(false);

  function submitForm(event) {
    event.preventDefault();
    setShowModal(true); 
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="civility">Civilité</label>
          <input
            type="radio"
            name="civility"
            value="Homme"
            onChange={handleChange}
          />H
          <input
            type="radio"
            name="civility"
            value="Femme"
            onChange={handleChange}
          />F
          <input
            type="radio"
            name="civility"
            value="Autre"
            onChange={handleChange}
          />Autre
        </div>
        <Input
            label="Prénom"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
        />
        <Input
            label="Nom"
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
        />
        <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
        />
        <Input
            label="Date de naissance"
            type="date"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
        />
        <Input
            label="Code postal"
            type="text"
            name="cp"
            value={formData.cp}
            onChange={handleChange}
        />
        <Input
            label="Ville"
            type="text"
            name="ville"
            value={formData.ville}
            onChange={handleChange}
        />
        <button type="submit">Envoyé le formulaire</button>
      </form>
      {showModal && (
        <div className="modal">
            <h2>Informations Saisies</h2>
            <p><strong>Civilité :</strong> {formData.civility}</p>
            <p><strong>Prénom :</strong> {formData.name}</p>
            <p><strong>Nom :</strong> {formData.lastname}</p>
            <p><strong>Email :</strong> {formData.email}</p>
            <p><strong>Date de naissance :</strong> {formData.birthdate}</p>
            <p><strong>Code postal :</strong> {formData.cp}</p>
            <p><strong>Ville :</strong> {formData.ville}</p>
            <button onClick={closeModal}>Fermer</button>
        </div>
      )}
    </>
  );
};

export default Formulaire;
