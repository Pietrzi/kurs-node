import mongoose from 'mongoose';

import { MISSING_DATA, NOT_FOUND, VALIDATION_ERROR } from '../constants/error';
import { addAnimal, deleteAnimal, getAnimals } from '../models/animals';

export default class Animals {
  async addAnimal(animalData) {
    if (!animalData) {
      throw new Error(MISSING_DATA);
    }

    try {
      return await addAnimal(animalData);
    } catch (err) {
      if (err.name === 'ValidationError') {
        const error = new Error(VALIDATION_ERROR);
        error.reason = err.message;
        throw error;
      }

      throw err;
    }
  }

  async deleteAnimal(animalId) {
    const isValidObjectId = mongoose.Types.ObjectId.isValid(animalId);

    if (!isValidObjectId) {
      const error = new Error(VALIDATION_ERROR);
      error.reason = `Not a valid ID: ${animalId}`;
      throw error;
    }

    const deletedCount = await deleteAnimal(animalId);
    if (deletedCount === 0) {
      throw new Error(NOT_FOUND);
    }

    return true;
  }

  async getAnimals(page = 0) {
    return getAnimals(page);
  }
}
