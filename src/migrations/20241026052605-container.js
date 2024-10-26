'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('container', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      numero: {
        type: Sequelize.STRING(11), // VARCHAR(11)
        allowNull: false,
      },
      tipo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          isIn: [[1, 2]], // Restrição de valores (Enum)
        },
      },
      tamanho: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      idBL: {
        type: Sequelize.INTEGER,
        references: {
          model: 'bl', // Nome da tabela de referência
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL', // Altere conforme a regra de negócio
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('exemplo');
  },
};

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bl', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      numero: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      consignee: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      navio: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('bl');
  },
};

