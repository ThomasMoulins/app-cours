const FormatedDate = ({ date }) => {
  const dateObj = new Date(date);

  const formattedDate = dateObj.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });

  return <>{formattedDate}</>;
};

export default FormatedDate;
