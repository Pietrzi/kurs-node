import express from 'express';

import Animals from '../services/animals';
import { MISSING_DATA, NOT_FOUND, VALIDATION_ERROR } from '../constants/error';
import errorResponse from '../../../../../../Mongoose w API kawiarni/exercises/02_Mongoose w API kawiarni - rozwiązanie/bootstrap/src/utils/errorResponse';

const { Router } = express;
const router = Router();

const animals = new Animals();

router.get('/', async (req, res) => {
  try {
    const { page } = req.query;

    const animalData = await animals.getAnimals(page);
    const pageArr = Array(animalData.pages)
      .fill(true)
      .map((val, index) => index);

    return res.render('list', { animals: animalData.animals, pages: pageArr });
  } catch (err) {
    return errorResponse(err, res);
  }
});

router.get('/add', async (req, res) => {
  return res.render('add/form');
});

router.get('/remove', async (req, res) => {
  const animalId = req.query.id;

  try {
    await animals.deleteAnimal(animalId);
    return res.render('remove/success');
  } catch (err) {
    switch (err.message) {
      case NOT_FOUND:
        return res.render('add/error', {
          err: 'Animal not found - check if it was not removed already!',
        });
      case VALIDATION_ERROR:
        return res.render('add/error', {
          err: `Validation failed:  ${err.reason}`,
        });
      default:
        return res.render('add/error', {
          err: 'Unknown server error, try again...',
        });
    }
  }
});

router.post('/add', async (req, res) => {
  const animal = req.body;

  try {
    const animalId = await animals.addAnimal(animal);
    return res.render('add/success', {
      animal: JSON.stringify(
        {
          ...animal,
          id: animalId,
        },
        null,
        4
      ),
    });
  } catch (err) {
    switch (err.message) {
      case MISSING_DATA:
        return res.render('add/error', {
          err: 'Some data is missing - check your form!',
        });
      case VALIDATION_ERROR:
        return res.render('add/error', {
          err: `Validation failed:  ${err.reason}`,
        });
      default:
        return res.render('add/error', {
          err: 'Unknown server error, try again...',
        });
    }
  }
});

export default router;
