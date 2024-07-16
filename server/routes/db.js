const express = require("express");
const {
  addNewBlog,
  deleteBlog,
  updateBlog,
  fetchListofBlogs,
} = require("../controller/blog-controller");
const dbRouter = express.Router();

dbRouter.get("/", fetchListofBlogs);
dbRouter.post("/add", addNewBlog);
dbRouter.delete("/delete/:id", deleteBlog);
dbRouter.put("/update/:id", updateBlog);
module.exports=dbRouter;