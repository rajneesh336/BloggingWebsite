import React, { useEffect, useState, CSSProperties } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import BounceLoader from "react-spinners/BounceLoader";
import { useDispatch, useSelector } from 'react-redux';
import { addToFavourite, removeFromFavourite } from '../action';


const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  marginTop: "5%",
  marginBottom: "5%",
};

const BlogDetail = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [id, setIds] = useState([]);
  const [color, setColor] = useState("#f9e43f");
  const [blog, setBlog] = useState(null);
  const [author, setAuthor] = useState(null);
  const [comments, setComments] = useState([]);

  const queryParams = new URLSearchParams(useLocation().search);
  const userId = queryParams.get("userId");
  const postId = queryParams.get("postId");

  const fetchPosts = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        setBlog(response?.data);
        setLoading(false);
      })
      .catch((error) => {
        setBlog({ error: "Failed to fetch posts", loading: false });
      });
  };

  useEffect(() => {
    fetchPosts();
  }, [postId]);

  const fetchAuthor = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
      .then((response) => {
        setAuthor(response?.data[0]);
      })
      .catch((error) => {
        setBlog({ error: "Failed to fetch posts", loading: false });
      });
  };

  useEffect(() => {
    fetchAuthor();
  }, [userId]);

  const fetchComments = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((response) => {
        setComments(response?.data);
      })
      .catch((error) => {
        setBlog({ error: "Failed to fetch posts", loading: false });
      });
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

  let body = "";
  for (let i = 0; i < 15; i++) {
    body += blog?.body;
    if (i === 6) {
      body += "<br><br>";
    }
    body += " ";
  }

  const addFavourite = () => {
    console.log('add');
    const updatedItems = [...items, blog];
    const updatedIds = [...id, blog.id];
    localStorage.setItem('items', JSON.stringify(updatedItems));
    localStorage.setItem('ids', JSON.stringify(updatedIds));
    setItems(updatedItems);
    setIds(updatedIds);
    window.location.reload(true)
  };


  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items'));
    const storedIds = JSON.parse(localStorage.getItem('ids'));
    if (storedItems) {
      setItems(storedItems);
    }

    if (storedIds) {
      setIds(storedIds);
    }
  }, []);

  const deleteFavourite = (ids) => {
    const updatedItems = items.filter(item => item.id !== ids);
    const updatedIds = id.filter(item => item !== ids);

    localStorage.setItem('items', JSON.stringify(updatedItems));
    localStorage.setItem('ids', JSON.stringify(updatedIds));

    setItems(updatedItems);
    setIds(updatedIds);
    window.location.reload(true)
  };

  return (
    <>
      <BounceLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

      {!loading && (
        <>
          <div
            className="col-sm d-flex justify-content-between"
            style={{ paddingLeft: "3%", paddingRight: "3%", marginTop: "8%" }}
          >
            <Link to="/" >
              <button
                className="btn btn-dark"
                style={{
                  fontSize: "17px",
                  fontFamily: "Lato, Arial, Helvetica, sans-serif",
                  fontWeight: 400,
                  marginTop: "1%",
                  marginBottom: "20px",
                  backgroundColor: "#000",
                  borderRadius: "50px",
                  display: "inline-block",
                  padding: "7px 25px",
                  color: "#fff",
                  border: "2px solid #000",
                  marginLeft: "10%",
                  cursor: "pointer",
                }}
              >
                Home
              </button>
            </Link>
            <button
              className="btn btn-dark"
              style={{
                fontSize: "17px",
                fontFamily: "Lato, Arial, Helvetica, sans-serif",
                fontWeight: 400,
                marginTop: "1%",
                marginBottom: "20px",
                backgroundColor: "#000",
                borderRadius: "50px",
                display: "inline-block",
                padding: "7px 25px",
                color: "#fff",
                border: "2px solid #000",
                marginLeft: "10%",
                cursor: "pointer",
              }}
              onClick={(e) => { id.includes(blog.id) ? deleteFavourite(blog.id) : addFavourite() }}
            >
              Add to Favourite  {id.includes(blog.id) ? <i className="fa fa-heart"></i> : <i className="fa fa-heart-o"></i>}
            </button>
          </div>

          <div className="container my-3">
            <div className="row" style={{ margin: "2%" }}></div>
            <div className="row">
              <div className="col-sm d-flex justify-content-center">
                <h2> {blog?.title} </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-sm d-flex justify-content-center">
                <span>September 5,2022</span>
              </div>
            </div>
            <div className="row" style={{ marginTop: "3%" }}>
              <div className="col-sm" style={{ marginBottom: "2%" }}>
                <b>Author : {author?.name}</b>
              </div>
            </div>
            <div className="row">
              <div></div>
              <div
                className="col-sm blog"
                style={{ textAlign: "justify" }}
                dangerouslySetInnerHTML={{ __html: body }}
              ></div>
            </div>
          </div>
          <hr></hr>
          <div className="container-fluid  mt-5">
            <div className="row">
              <div className="col-sm mx-5">
                <h3>Comments:</h3>
              </div>
            </div>
            {comments &&
              comments.map((comment) => {
                return (
                  <>
                    <div className="row ">
                      <div className="col-sm mx-5">
                        <i className="fa-solid fa-user ml-5 mt-5"></i>
                        <span className="ml-3">
                          <b>{comment.name}</b>
                        </span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm ml-5">
                        <p style={{ marginLeft: "82px" }}>{comment.email}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm ml-5">
                        <p style={{ marginLeft: "82px" }}>{comment.body}</p>
                        <hr className="bg-dark mb-5 ml-5"></hr>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </>
      )}
    </>
  );
};

export default BlogDetail;
