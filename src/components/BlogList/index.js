// Write your JS code here
import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="blog-items-list">
      {blogsList.map(eachBlog => (
        <BlogItem key={eachBlog.id} eachBlog={eachBlog} />
      ))}
    </ul>
  )
}

export default BlogList
