import React from 'react'
import Title from './Title'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiJobs: { nodes: jobs },
  } = data

  console.log(jobs)

  return <h2>jobs component</h2>
}

export default Jobs
