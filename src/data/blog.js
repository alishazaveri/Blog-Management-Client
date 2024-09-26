import * as Yup from "yup";

const BlogInitialValues = {
  title: "",
  blogImageUrl: "",
  description: "",
};

const getTextFromHtml = (htmlContent) => {
  const div = document.createElement("div");

  div.innerHTML = htmlContent;

  const text = div.textContent;

  return text?.trim() || "";
};

const BlogValidation = Yup.object().shape({
  title: Yup.string()
    .trim()
    .required("Blog Title is required")
    .min(5, "Blog Title should be atleast 5 letters"),
  blogImageUrl: Yup.string().trim().required("Blog Image is required"),
  description: Yup.string()
    .required("Blog Description is required")
    .test(
      "length",
      "Blog Description should alteast 10 letters long",
      (value) => {
        return getTextFromHtml(value).length >= 10;
      }
    ),
});

export const blogData = {
  BlogInitialValues,
  BlogValidation,
};
