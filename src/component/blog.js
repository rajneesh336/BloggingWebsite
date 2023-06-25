import axios from "axios";
import React, { useEffect, useState,CSSProperties } from "react";
import { Link } from "react-router-dom";
import BounceLoader from "react-spinners/BounceLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  marginTop:"5%",
  marginBottom:"5%",
};
const Blog = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#f9e43f");
  const [blog, setBlog] = useState([]);
  // console.log(blog);
  const fetchPosts = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        setBlog(response?.data);
        setLoading(false);
      })
      .catch((error) => {
        setBlog({ error: "Failed to fetch posts", loading: false });
        throw error;
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
  <h3 style={{ paddingLeft: "10%" }}>LATEST BLOG</h3>
  <hr />


  <BounceLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

{!loading && <>

  <div className="container" style={{ marginTop: "10px" }}>
    <div className="row">
      {blog &&
        blog.map((post,index) => {

       if(index <= 7){
        return (  <Link
            to={`/blog-detail?postId=${post.id}&userId=${post.userId}`}
            key={post.id}
          >
            <div
              className="card my-3 mx-3 card__one"
              style={{
                padding: 0,
                margin: 0,
                textAlign: "justify",
                color: "#000",
                borderRadius: "15px",
                backgroundColor: "#fff",
                position: "relative",
                overflow: "hidden",
                border: "5px solid #e2e2e2",
                transition: "all .5s",
                height: "290px",
                width: "220px",
                letterSpacing: ".px",
                lineHeight: "23px",
              }}
            >
              <img
                className="card-img-top"
                src="images/banner-image-1.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
              </div>
            </div>
          </Link>
        )

        }else{
          return null;
        }
          
      })}
    </div>
  </div>

  <Link
            to={`/BlogList`}>
  <button
  style={{
    fontSize: '17px',
    fontFamily: 'Lato, Arial, Helvetica, sans-serif',
    fontWeight: 400,
    marginTop: '1%',
    marginBottom: '20px',
    backgroundColor: '#000',
    borderRadius: '50px',
    display: 'inline-block',
    padding: '7px 25px',
    color: '#fff',
    border: '2px solid #000',
    marginLeft:"10%",
    cursor:"pointer"
  }}
>
  See All Post
</button></Link>
</>
}
</>

  );
};

export default Blog;
