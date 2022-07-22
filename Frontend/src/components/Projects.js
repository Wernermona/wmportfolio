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
      {loading ? (
        <p>Loading...</p>
      ) : errors ? (
        <p>{errors}</p>
      ) : (
        <div>
          {projetcs.map(project => {
            return (
              <div key={project._id} style={{ width: '50%', margin: 'auto', padding: '2rem' }}>
                <img src={project.img} alt={project.title} />
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <ink to={project.link}>{project.link}</ink>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}
