const Project = require('../models/Project')

module.exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find({})
    res.status(200).json(projects)
  } catch (err) {
    res.status(404).send({ message: `No projects` })
  }
}