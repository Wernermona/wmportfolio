import 'animate.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'react-router-dom'

export const Projects = () => {

  const [projetcs, setProjects] = useState()
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get(
          'http://localhost:5000/api/v1/projects'
        )
        setProjects(data)
        setLoading(false)
      } catch (err) {
        setLoading(false)
        setErrors(err.message)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <div className="projectTitle">
        <h1 className="projectText">Projets</h1>
        <p className="projectText2">Voici l'ensemble de projets dans lesequels j'ai participé durant ma periode de formation à la Wild Code School de lyon: </p>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : errors ? (
        <p>{errors}</p>
      ) : (
        <div>
          
          {projetcs.map(project => {
            return (
              
              <div key={project._id} className="projectDiv">
                <img src={project.img} alt={project.title} />
                <h1 className="projecth1">{project.title}</h1>
                <p className="projectp">{project.description}</p>
                <p className="projectp">{project.link}</p>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}
