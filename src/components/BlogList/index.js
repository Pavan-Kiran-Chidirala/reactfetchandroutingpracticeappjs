// Write your JS code here
import {Component} from 'react'

import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {
    blogList: [],
    isTrue: true,
  }

  componentDidMount() {
    this.getResponse()
  }

  getResponse = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const dataAcquired = await response.json()
    const updatedData = dataAcquired.map(eachValue => ({
      id: eachValue.id,
      title: eachValue.title,
      imageUrl: eachValue.image_url,
      avatarUrl: eachValue.avatar_url,
      author: eachValue.author,
      topic: eachValue.topic,
    }))
    this.setState({blogList: updatedData, isTrue: false})
  }

  render() {
    const {isTrue, blogList} = this.state
    return (
      <>
        {isTrue && (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        )}
        {!isTrue && (
          <ul className="blog-list">
            {blogList.map(eachValue => (
              <li className="list-value" key={eachValue.id}>
                <Link to={`blogs/${eachValue.id}`} className="link-item">
                  <BlogItem key={eachValue.id} itemValue={eachValue} />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    )
  }
}

export default BlogList
