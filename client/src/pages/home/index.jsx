import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { FormContext } from "../../context";
export default function Home() {
  const [blogList, setBlogList] = useState([]);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { setFormData, formData,updateForm } = useContext(FormContext);

  const fetchData = async () => {
    setPending(true);
    try {
      const response = await axios.get("http://localhost:3000/api/blogs");
      const data = await response.data;
      console.log(data);
      if (data && data.blogList && Array.isArray(data.blogList)) {
        setBlogList(data.blogList);
        console.log(data.blogList);
        setPending(false);
      } else {
        throw new Error("incorrect format");
      }
    } catch (error) {
      setError(true);
    } finally {
      setPending(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  //delete blog
  async function handleDelete(id) {
    console.log(id);

    const response = await axios.delete(
      `http://localhost:3000/api/blogs/delete/${id}`
    );
    const result = response.data;
    if (result) {
      fetchData();
    }
  }
  //database update not working
  function handleUpdate(currentItem) {
    navigate("/add-blog");
    updateForm(currentItem)
    console.log(formData);
  }
  return (
    <div className="container">
      {pending && <h1>Loading</h1>}
      {!blogList.length && <h1>Add blogs to seee </h1>}
      {blogList &&
        blogList.length &&
        blogList.map((item) => (
          <div key={item._id}>
            <div className="card">
              <span className="title">{item.title}</span>
              <div className="content">{item.description}</div>
              <div className="bottom">
                <span
                  onClick={() => {
                    handleDelete(item._id);
                  }}
                  className="delete"
                >
                  Delete
                </span>
                <span
                  onClick={() => {
                    handleUpdate(item);
                  }}
                  className="update"
                >
                  Update
                </span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
