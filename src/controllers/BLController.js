'use strict';

const { BL } = require('../models');

class BLController {
  // Criar um novo BL
  static async create(req, res) {
    try {
      const bl = await BL.create(req.body);
      return res.status(201).json(bl);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Listar todos os BLs
  static async findAll(req, res) {
    try {
      const bls = await BL.findAll();
      return res.status(200).json(bls);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Encontrar um BL por ID
  static async findOne(req, res) {
    try {
      const bl = await BL.findByPk(req.params.id);
      if (!bl) {
        return res.status(404).json({ message: 'BL not found' });
      }
      return res.status(200).json(bl);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Atualizar um BL
  static async update(req, res) {
    try {
      const [updated] = await BL.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated) {
        return res.status(404).json({ message: 'BL not found' });
      }
      return res.status(200).json({ message: 'BL updated successfully' });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Deletar um BL
  static async delete(req, res) {
    try {
      const deleted = await BL.destroy({
        where: { id: req.params.id },
      });
      if (!deleted) {
        return res.status(404).json({ message: 'BL not found' });
      }
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = BLController;
