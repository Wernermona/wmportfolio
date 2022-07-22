const router = require('express').Router()

const {
  getAllProjects,
} = require('../controllers/project')

router.route('/').get(getAllProjects)

module.exports = router
