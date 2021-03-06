const { Router } = require("express");
const Task = require("../models/task");
const router = Router();

router.post('/save', async (req, res) => {
    try {
      //const baseUrl = config.get('baseUrl')
      //const {from} = req.body
  
      //const code = shortid.save()
  
    //   const existing = await Task.findOne({ from })
  
    //   if (existing) {
    //     return res.json({ task: existing })
    //   }
      
      const { taskName, taskTheme, status, date, details, owner } = req.body
      //const to = baseUrl + '/t/' + code
      
      const crypto = require('crypto'); 
      let id = crypto.randomUUID();
  
      const task = new Task({
        id, taskName,  taskTheme, status, date, details, owner
      })
  
      await task.save()
  
      res.status(201).json({ message: "Задание создано" })
    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова1' })
    }
  })


  router.get('/', async (req, res) => {
    try {
      // Получение всех задач
      const tasks = await Task.find({ })
      res.json(tasks)
    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова2' })
    }
  })
  
  router.get('/:id', async (req, res) => {
    try {
      const tasks = await Task.find({ id: req.params.id })
      res.json(tasks)
    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова3' })
    }
  })

  router.post('/delete/:id', async (req, res) => {
    try {
      console.log(req.params.id)
      Task.findOneAndDelete({id: req.params.id}, (err) =>{
        if(err){
            console.log(err);
        }
     })
      //console.log((tasks))
      res.status(200)
    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова4' })
    }
  })
  
  module.exports = router