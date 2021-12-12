// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogItem: {},
    isTrue: true,
  }

  componentDidMount() {
    this.getResponse()
  }

  getResponse = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const newData = {
      id: data.id,
      title: data.title,
      topic: data.topic,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
    }
    this.setState({blogItem: newData, isTrue: false})
  }

  render() {
    const {isTrue, blogItem} = this.state
    const {title, imageUrl, avatarUrl, author, content} = blogItem
    return (
      <>
        {isTrue && (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        )}
        {!isTrue && (
          <div className="blog-item">
            <h1 className="main-heading">{title}</h1>
            <div className="user-content">
              <img src={avatarUrl} className="avatar-image" alt={author} />
              <p className="author-name">{author}</p>
            </div>
            <img src={imageUrl} className="big-image" alt={title} />
            <p className="para">{content}</p>
          </div>
        )}
      </>
    )
  }
}

export default BlogItemDetails
