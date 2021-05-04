import { DataTypes } from 'sequelize'

export default (sequelize) => {
  const companyScore = sequelize.define(
    'companyScore',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      company_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      date_generated: { type: DataTypes.DATE, allowNull: false },
      dividend: { type: DataTypes.INTEGER, allowNull: false },
      future: { type: DataTypes.INTEGER, allowNull: false },
      health: { type: DataTypes.INTEGER, allowNull: false },
      management: { type: DataTypes.INTEGER, allowNull: false },
      past: { type: DataTypes.INTEGER, allowNull: false },
      value: { type: DataTypes.INTEGER, allowNull: false },
      misc: { type: DataTypes.INTEGER, allowNull: false },
      total: { type: DataTypes.INTEGER, allowNull: false },
      sentence: { type: DataTypes.STRING },
    },
    {
      timestamps: false,
      tableName: 'swsCompanyScore',
    },
  )

  companyScore.associate = (models) => {
    this.hasOne(models.company, {
      foreignKey: 'company_id',
      sourceKey: 'id',
    })
  }

  return companyScore
}
