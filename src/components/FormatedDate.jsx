const FormatedDate = ({ date }) => {
  // Convertir la chaîne de caractères en objet Date
  const dateObj = new Date(date);

  // Formater la date au format français avec le jour
  const formattedDate = dateObj.toLocaleDateString('fr-FR', {
    //weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });

  return <>{formattedDate}</>;
};

export default FormatedDate;
