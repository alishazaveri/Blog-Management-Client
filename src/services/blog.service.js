import { message } from "antd";
import { SERVICE } from "./server";
import { blogData } from "../data/blog";

export async function addBlog({ blogImageUrl, title, description }) {
  try {
    const { data } = await SERVICE.post("/api/blog/add-blog", {
      blogImageUrl,
      title,
      description,
    });

    return data;
  } catch (error) {
    if (error.response && error.response.status === 403) {
      message.error(error.response.data.error);
    }
    if (error.response && error.response.status === 401) {
      message.error("You are not authorized");
    }
    if (error.response && error.response.status === 500) {
      message.error("Something went wrong");
      return { error: "" };
    }
    return { error: "" };
  }
}

export async function getAllBlogs({ currentPage }) {
  try {
    const { data } = await SERVICE.get(
      `/api/blog?page=${currentPage}&pageSize=${blogData.postsPerPage}`
    );

    return { data: data.data, totalCount: data.totalCount };
  } catch (error) {
    if (error.response && error.response.status === 403) {
      message.error(error.response.data.error);
    }
    if (error.response && error.response.status === 500) {
      message.error("Something went wrong");
      return { error: "" };
    }
    return { error: "" };
  }
}

export async function getAllBlogsByUserId({ currentPage }) {
  try {
    const { data } = await SERVICE.get(
      `/api/blog/user-blogs?page=${currentPage}&pageSize=${blogData.postsPerPage}`
    );

    return { data: data.data, totalCount: data.totalCount };
  } catch (error) {
    if (error.response && error.response.status === 403) {
      message.error(error.response.data.error);
    }
    if (error.response && error.response.status === 401) {
      message.error("You are not authorized");
    }
    if (error.response && error.response.status === 500) {
      message.error("Something went wrong");
      return { error: "" };
    }
    return { error: "" };
  }
}

export async function getBlogById({ blogId }) {
  try {
    const { data } = await SERVICE.get(`/api/blog/${blogId}`);

    return data;
  } catch (error) {
    if (error.response && error.response.status === 403) {
      message.error(error.response.data.error);
    }
    if (error.response && error.response.status === 500) {
      message.error("Something went wrong");
      return { error: "" };
    }
    return { error: "" };
  }
}

export async function removeBlogById({ blogId }) {
  try {
    const { data } = await SERVICE.delete(`/api/blog/${blogId}`);

    return data;
  } catch (error) {
    if (error.response && error.response.status === 403) {
      message.error(error.response.data.error);
    }
    if (error.response && error.response.status === 401) {
      message.error("You are not authorized");
    }
    if (error.response && error.response.status === 500) {
      message.error("Something went wrong");
      return { error: "" };
    }
    return { error: "" };
  }
}

export async function updateBlogById({
  blogId,
  blogImageUrl,
  title,
  description,
}) {
  try {
    const { data } = await SERVICE.patch(`/api/blog/${blogId}`, {
      blogImageUrl,
      title,
      description,
    });

    return data;
  } catch (error) {
    if (error.response && error.response.status === 403) {
      message.error(error.response.data.error);
    }
    if (error.response && error.response.status === 401) {
      message.error("You are not authorized");
    }
    if (error.response && error.response.status === 500) {
      message.error("Something went wrong");
      return { error: "" };
    }
    return { error: "" };
  }
}
