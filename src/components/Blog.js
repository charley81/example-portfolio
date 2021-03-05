import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'
import { Link } from 'gatsby'

const Blog = ({ id, title, slug, desc, image, date, category }) => {
  console.log(slug)
  return (
    <Link to={`/blogs/${slug}`} key={id} className="blog">
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

Blog.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

export default Blog
