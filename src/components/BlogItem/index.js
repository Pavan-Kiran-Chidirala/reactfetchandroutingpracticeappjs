// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {itemValue} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = itemValue
  return (
    <div className="list-item" key={id}>
      <img src={imageUrl} className="blog-image" alt={title} />
      <div className="blog-content">
        <p className="topic">{topic}</p>
        <h1 className="title">{title}</h1>
        <div className="user-content">
          <img src={avatarUrl} className="avatar-image" alt={author} />
          <p className="author">{author}</p>
        </div>
      </div>
    </div>
  )
}

export default BlogItem
