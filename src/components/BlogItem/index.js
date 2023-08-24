// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {title, description, publishedDate} = eachBlog

  return (
    <li className="list-item">
      <div className="role-date-container">
        <h1 className="role">{title}</h1>
        <p className="publishedDate">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr className="hr-line" />
    </li>
  )
}

export default BlogItem
