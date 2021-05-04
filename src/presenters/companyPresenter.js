import companyPriceClosesPresenter from './companyPriceClosesPresenter'
import companyScorePresenter from './companyScorePresenter'
/*
  Presenter is used to ensure API responses for the same
  data type are always consistent and provide a standardised
  location to apply any transformations to the data before
  returning a response
*/

export default (company) => {
  console.log(`company`, JSON.stringify(company, null, 5))
  const {
    id,
    name,
    ticker_symbol: tickerSymbol,
    exchange_symbol: exchangeSymbol,
    unique_symbol: uniqueSymbol,
    date_generated: dateGenerated,
    security_name: securityName,
    exchange_country_iso: exchangeCountryIiso,
    listing_currency_iso: listingCurrencyIiso,
    canonical_url: canonicalUrl,
    unique_symbol_slug: uniqueSymbolSlug,
    score_id: scoreId,
    companyPriceCloses,
    companyScore,
  } = company

  const presented = {
    id,
    name,
    tickerSymbol,
    exchangeSymbol,
    uniqueSymbol,
    dateGenerated,
    securityName,
    exchangeCountryIiso,
    listingCurrencyIiso,
    canonicalUrl,
    uniqueSymbolSlug,
    scoreId,
  }

  if (companyPriceCloses) {
    presented.closingPrices = companyPriceCloses.map((price) =>
      companyPriceClosesPresenter(price, { skipId: true }),
    )
  }

  if (companyScore) {
    presented.score = companyScorePresenter(companyScore, { skipId: true })
  }

  return presented
}
