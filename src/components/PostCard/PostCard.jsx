import React from 'react'
import service from '../../appwrite/config'
import { Link } from 'react-router-dom'

const PostCard = ({$id, featuredImage, title}) => {
  return (
    <Link to={`/post/${$id}`}>
        <div>
            <div className='w-full justify-center mb-4'>
                <img src={service.getPost(featuredImage)} alt="Image" className='rounded-xl' />
            </div>
            <h2 className='text-xl font-bold'>
                {title}
            </h2>
        </div>
    </Link>
  )
}

export default PostCard;