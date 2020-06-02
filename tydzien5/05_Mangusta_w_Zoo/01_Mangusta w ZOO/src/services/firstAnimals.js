import mongoose from 'mongoose';

import { MISSING_DATA, NOT_FOUND, VALIDATION_ERROR } from '../constants/error';

export default class Animals {
  async addAnimal(animalData) {
    if (!animalData) {
      throw new Error(MISSING_DATA);
    }

    return '123123123123123123';
  }

  async deleteAnimal(animalId) {
    const isValidObjectId = mongoose.Types.ObjectId.isValid(animalId);

    if (!isValidObjectId) {
      const error = new Error(VALIDATION_ERROR);
      error.reason = `Not a valid ID: ${animalId}`;
      throw error;
    }

    return true;
  }

  async getAnimals(page = 0) {
    return {
      pages: 1,
      animals: [],
    };
  }
}