const ConvertDate = (date) => {
  const frenchFormattedDate = date.toLocaleDateString('fr-FR');
  return frenchFormattedDate;
}

export default ConvertDate;
