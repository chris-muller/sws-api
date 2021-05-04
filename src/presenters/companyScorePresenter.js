/*
  Presenter is used to ensure API responses for the same
  data type are always consistent and provide a standardised
  location to apply any transformations to the data before
  returning a response
*/

export default (score, { skipId = false }) => {
  const {
    id,
    company_id: companyId,
    date_generated: dateGenerated,
    dividend,
    future,
    health,
    management,
    past,
    value,
    misc,
    total,
    sentence,
  } = score

  return {
    id: skipId ? undefined : id,
    companyId: skipId ? undefined : companyId,
    dateGenerated,
    dividend,
    future,
    health,
    management,
    past,
    value,
    misc,
    total,
    sentence,
  }
}
