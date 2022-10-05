const { Router } = require('express')
import axios from 'axios'

const router = Router()

router.get('/', (req, res, next) => {
  axios
    .get('https://ih-crud-api.herokuapp.com/characters/')
    .then(response => {
      res.render('/characters/list', {characters: response.data})
    })
    .catch(err => {
      console.log('Error getting character', err)
      next(err)
    })
})

router.get('/create', (req, res, next) => {
  res.render('characters/create')
})

router.post('/create', (req, res, next) => {
  const newChar = {
    name: req.body.name,
    occupation: req.body.occupation,
    weapon: req.body.weapon,
    debt: req.body.debt ? true : false,
  }
  axios
    .post('https://ih-crud-api.herokuapp.com/characters/', newChar)
    .then(newEntry => {
      console.log(newEntry)
      res.redirect('characters')
    })
    .catch(err => {
      console.log('Error creating a character', err)
      next(err)
    })
})

router.get('/:id/details', (req, res, next) => {
  axios
    .get(`https://ih-crud-api.herokuapp.com/characters/${req.params.id}`)
    .then(response => {
      res.render('characters/character-details',  response.data)
    })
    .catch(err => {
      console.log('Error getting character', err)
      next(err)
    })
})

router.get('/:id/edit', (req, res, next) => {
  axios
    .get(`https://ih-crud-api.herokuapp.com/characters/${req.params.id}`)
    .then(response => {
      res.render('characters/edit-character',  response.data)
    })
    .catch(err => {
      console.log('Error getting character', err)
      next(err)
    })
})

router.post('/:id/edit', (req, res, next) => {
  const updatedCharacter = {
    name: req.body.name,
    occupation: req.body.occupation,
    weapon: req.body.weapon,
    debt: req.body.debt,
  }
  axios
    .get(`https://ih-crud-api.herokuapp.com/characters/${req.params.id}`, updatedCharacter)
    .then(() => {

      res.redirect('/characters')
    })
    .catch(err => {
      console.log('Error getting character', err.data)
      next(err)
    })
})
