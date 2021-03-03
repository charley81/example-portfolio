import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'
import { Link } from 'gatsby'

const Blog = ({ id, title, slug, desc, image, date, category }) => {
  return (
    <Link to={`/blog/${slug}`} key={id} className="blog">
      <article>
        <Image fluid={image.childImageSharp.fluid} className="blog-img" />
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{desc}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

Blog.propTypes = {}

export default Blog
