import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Blogs from '../components/Blogs'

const Blog = ({ data }) => {
  return (
    <Layout>
      <section className="blog-page">
        <Blogs title="blog" />
      </section>
    </Layout>
  )
}
export default Blog

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        slug
        desc
        date(formatString: "MMM Do, YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
