'use strict';

module.exports = (sequelize, DataTypes) => {
  const BL = sequelize.define(
    'BL', // Nome do modelo
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      numero: {
        type: DataTypes.STRING, // Pode ser ajustado para STRING(n) se precisar de limite específico
        allowNull: false,
      },
      consignee: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      navio: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'bl', // Nome exato da tabela no banco de dados
      timestamps: true, // Habilita `createdAt` e `updatedAt` automaticamente
    }
  );

  // Associações podem ser definidas aqui, se necessário
  BL.associate = function (models) {
    // Defina associações aqui, se houver
    // Exemplo: BL.hasMany(models.Exemplo, { foreignKey: 'idBL' });
  };

  return BL;
};
