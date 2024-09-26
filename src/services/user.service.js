import { message } from "antd";
import { SERVICE } from "./server";

export async function loginUser({ emailId, password }) {
  try {
    const { data } = await SERVICE.post("/api/user/login", {
      emailId,
      password,
    });

    if (data.data) {
      localStorage.setItem("userToken", data.data);
    }

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

export async function logoutUser() {
  try {
    const { data } = await SERVICE.post("/api/user/logout");

    if (data.data) {
      localStorage.clear("userToken");
    }

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

export async function verifyUser({ token }) {
  try {
    const { data } = await SERVICE.post("/api/user/verify-user", {
      token,
    });

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

export async function addUser({ username, imageUrl, emailId, password }) {
  try {
    const { data } = await SERVICE.post("/api/user/add-user", {
      username,
      imageUrl,
      emailId,
      password,
    });

    if (data.data) {
      localStorage.setItem("userToken", data.data);
    }

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
