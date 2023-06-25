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

const BlogList = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#f9e43f");
  const [blog, setBlog] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const fetchPosts = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        setBlog(response?.data);
        setLoading(false)
      })
      .catch((error) => {
        setBlog({ error: "Failed to fetch posts", loading: false });
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Calculate current items based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blog.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <h3 style={{ paddingLeft: "10%" }}>ALL POSTS</h3>
      <hr />

      <BounceLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

      { !loading  && 
<>
      <div style={{textAlign:"center",margin:"2%"}}>
        {Array.from({ length: Math.ceil(blog.length / itemsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            style={{
              margin: '0 5px',
              backgroundColor: currentPage === index + 1 ? '#000' : '#fff',
              color: currentPage === index + 1 ? '#fff' : '#000',
              border: `2px solid ${currentPage === index + 1 ? '#000' : '#e2e2e2'}`,
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className="container" style={{ marginTop: "10px" }}>
        <div className="row">
          {currentItems.map((post) => (
            <Link
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
                  letterSpacing: ".3px",
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
          ))}
        </div>
      </div>

      <div style={{textAlign:"center",margin:"2%"}}>
        {Array.from({ length: Math.ceil(blog.length / itemsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            style={{
              margin: '0 5px',
              backgroundColor: currentPage === index + 1 ? '#000' : '#fff',
              color: currentPage === index + 1 ? '#fff' : '#000',
              border: `2px solid ${currentPage === index + 1 ? '#000' : '#e2e2e2'}`,
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
</>
}

    </>
  );
};

export default BlogList;
