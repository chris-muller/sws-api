import { DataTypes } from 'sequelize'

export default (sequelize) => {
  sequelize.define(
    'company',
    {
      id: {
        unique: true,
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      name: { type: DataTypes.STRING, allowNull: false },
      ticker_symbol: { type: DataTypes.STRING },
      exchange_symbol: { type: DataTypes.STRING },
      unique_symbol: { type: DataTypes.STRING },
      date_generated: { type: DataTypes.DATE },
      security_name: { type: DataTypes.STRING },
      exchange_country_iso: { type: DataTypes.STRING },
      listing_currency_iso: { type: DataTypes.STRING },
      canonical_url: { type: DataTypes.STRING },
      unique_symbol_slug: { type: DataTypes.STRING },
      score_id: { type: DataTypes.INTEGER },
    },
    {
      timestamps: false,
      tableName: 'swsCompany',
    },
  )
}
