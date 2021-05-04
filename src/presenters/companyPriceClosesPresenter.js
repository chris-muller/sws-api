/*
  Presenter is used to ensure API responses for the same
  data type are always consistent and provide a standardised
  location to apply any transformations to the data before
  returning a response
*/

export default (closingPrice, { skipId = false }) => {
  const {
    date,
    company_id: companyId,
    price,
    date_created: dateCreated,
  } = closingPrice

  return {
    date,
    companyId: skipId ? undefined : companyId,
    price,
    dateCreated,
  }
}
