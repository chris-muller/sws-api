const { Sequelize, DataTypes } = require('sequelize')

export default (sequelize) => {
  sequelize.define(
    'companyPriceClose',
    {
      date: { type: DataTypes.DATEONLY, allowNull: false, primaryKey: true },
      company_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      price: { type: DataTypes.FLOAT, allowNull: false },
      date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    },
    {
      timestamps: false,
      tableName: 'swsCompanyPriceClose',
    },
  )
}
