import React, { useEffect, useState }from 'react'
import axios from 'axios'
import '../component/styles/post.css'
import Like from '../component/counter'
import Navigate from '../Navbar'

const Posts = () => {
        const[blogs,setBlogs]= useState([])

        useEffect(()=>{
                axios
                        .get('https://jsonplaceholder.typicode.com/posts')
                        .then(function(response){
                                console.log(response)
                                setBlogs(response.data)
                        })
                        .catch(function(error){console.log(error)})
                        .finally(function(){})
                
        },[]) 
         
        return(
                <div className= 'white'>
                        <Navigate/>
                        <h5 className='page_title'>TECH TRENDS</h5>
                        <div>
                                {blogs.map((blog)=>(
                                                <div key={blog.id} className='blog ' >
                                                        <h2>{blog.title}</h2>
                                                        <p>{blog.body}</p>
                                                        <div className='Like'><Like/></div>
                                                </div>
                                ))}
                                
                        </div>
                </div>
        )
        }
export default Posts;