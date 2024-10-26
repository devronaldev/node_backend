'use strict';

const { Container } = require('../models');

class ContainerController {
  // Criar um novo Container
  static async create(req, res) {
    try {
      const container = await Container.create(req.body);
      return res.status(201).json(container);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Listar todos os Containers
  static async findAll(req, res) {
    try {
      const containers = await Container.findAll();
      return res.status(200).json(containers);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Encontrar um Container por ID
  static async findOne(req, res) {
    try {
      const container = await Container.findByPk(req.params.id);
      if (!container) {
        return res.status(404).json({ message: 'Container not found' });
      }
      return res.status(200).json(container);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Atualizar um Container
  static async update(req, res) {
    try {
      const [updated] = await Container.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated) {
        return res.status(404).json({ message: 'Container not found' });
      }
      return res.status(200).json({ message: 'Container updated successfully' });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Deletar um Container
  static async delete(req, res) {
    try {
      const deleted = await Container.destroy({
        where: { id: req.params.id },
      });
      if (!deleted) {
        return res.status(404).json({ message: 'Container not found' });
      }
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ContainerController;
