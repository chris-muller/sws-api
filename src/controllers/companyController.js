import sequelize from '../db'
import companyPresenter from '../presenters/companyPresenter'
/*
  Unless it's a niche route that is needed I usually follow 
  the below pattern for controller methods:

  index: get list resource
  show: get specific resource
  create: create new resource
  update: update/edit specific resource
  destroy: delete specific resource
*/

const {
  company: companyModel,
  companyPriceClose: companyPriceCloseModel,
  companyScore: companyScoreModel,
} = sequelize.models

export const index = async (req, res) => {
  const priceHistory = req.query.price_history === 'true'

  const options = {
    include: [companyScoreModel],
  }

  if (priceHistory) {
    options.include = [...options.include, companyPriceCloseModel]
  }

  const companies = await companyModel.findAll(options)

  return res.json(companies.map((c) => companyPresenter(c)))
}

export const show = async (req, res) => {}
