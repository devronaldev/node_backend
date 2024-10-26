'use strict';

module.exports = (sequelize, DataTypes) => {
  const Exemplo = sequelize.define(
    'Exemplo',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      numero: {
        type: DataTypes.STRING(11),
        allowNull: false,
      },
      tipo: {
        type: DataTypes.ENUM('1', '2'),
        allowNull: false,
      },
      tamanho: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      idBL: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'bl',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    },
    {
      tableName: 'exemplo',
      timestamps: true,
    }
  );

  Exemplo.associate = function (models) {
    Exemplo.belongsTo(models.BL, { foreignKey: 'idBL' });
  };

  return Exemplo;
};
