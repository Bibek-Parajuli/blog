const mongoose = require("mongoose");
const Blog = require("../modules/blog");

const fetchListofBlogs = async (req, res) => {
  let blogList;
  try {
    blogList = await Blog.find();
  } catch (error) {
    console.log(error);
  }
  if (!blogList) {
    return res.status(404).json({ message: "no data" });
  }
  return res.status(200).json({ blogList });
};
const addNewBlog = async (req, res) => {
  const { title, description } = req.body;
  const currentDate = new Date();

  const newlyCreated = new Blog({
    title,
    description,
    date: currentDate,
  });
  try {
    newlyCreated.save();
  } catch (error) {
    console.log(error);
  }
  // const session = await mongoose.startSession();

  // try {
  //   //copied code
  //   session.startTransaction();
  //   await newlyCreated.save({ session }); // Save the document in the transaction
  //   await session.commitTransaction(); // Commit the transaction
  //   session.endSession(); // End the session
  // } catch (error) {
  //   if (session) {
  //     await session.abortTransaction(); // Rollback the transaction in case of an error
  //     session.endSession(); // End the session
  //   }
  //   return res.status(500).json({ message: error.message });
  // }
  console.log(newlyCreated);
  return res.status(200).json({ newlyCreated });
};
const deleteBlog = async (req, res) => {
  const id = req.params.id;
  try {
    const findCurrentBlog = await Blog.findByIdAndDelete(id);
    if (!findCurrentBlog) {
      return res.status(404).json({ message: "Blog not found" });
    } 
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "unable to delete sorry" });
  }
  return res.status(200).json({ message: "successfully removed" });

};

const updateBlog = async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;
  let currentBlogUpdate;
  try {
    currentBlogUpdate = await Blog.findByIdAndUpdate(id, {
      title,
      description,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "sorry cant update" });
  }
  if (!currentBlogUpdate) {
    return res.status(500).json({ message: "sorry not  updateable available" });
  }
  return res.send(200).json(currentBlogUpdate);
};

module.exports = { fetchListofBlogs, deleteBlog, updateBlog, addNewBlog };
