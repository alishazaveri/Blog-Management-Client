import "react-quill/dist/quill.snow.css";

import { useEffect, useMemo, useState } from "react";
import CustomLoading from "../components/CustomLoading";
import { Field, Form, Formik } from "formik";
import { blogData } from "../data/blog";
import { Button } from "antd";
import ReactQuill from "react-quill";

const CreateGamePage = () => {
  let gameId = "";

  const [loading, setLoading] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [game, setGame] = useState();

  useEffect(() => setLoading(false), []);

  // useEffect(() => {
  //   setLoading(true);
  //   async function getGame() {
  //     if (gameId) {
  //       const { data } = await getGameById({ gameId: gameId  });

  //       if (data.data) {
  //         setNames({
  //           image: data.data.imageUrl,
  //           video: data.data.videoUrl,
  //         });

  //         setGame(data.data);
  //       }
  //     }
  //     setLoading(false);
  //   }

  //   getGame();
  // }, [gameId]);

  const onCreateGameClick = async (values) => {
    setButtonLoading(true);

    setButtonLoading(false);

    // router.push("/admin/gamelist");
  };

  //   setButtonLoading(true);

  //   let iUrl, vUrl;

  //   if (values.imageUrl && values.imageUrl != names.image) {
  //     const response = await AdminData.fetchImageUrl({
  //       file: values.imageUrl as File,
  //     });

  //     if (response && response.url) {
  //       iUrl = response.url;
  //     }
  //   }

  //   if (values.videoUrl && values.videoUrl != names.video) {
  //     const response = await AdminData.fetchImageUrl({
  //       file: values.videoUrl as File,
  //     });

  //     if (response && response.url) {
  //       vUrl = response.url;
  //     }
  //   }

  //   values.imageUrl = undefined;
  //   values.videoUrl = undefined;
  //   values.bonusPoints = +(values.bonusPoints || 10);

  //   await updateGameById({
  //     gameId: gameId as string,
  //     ...values,
  //     imageUrl: iUrl ? iUrl : names.image,
  //     videoUrl: vUrl ? vUrl : names.video,
  //   });

  //   setButtonLoading(false);

  //   router.push("/admin/gamelist");
  // };

  return (
    <div className="flex flex-row justify-center items-center">
      {loading ? (
        <CustomLoading />
      ) : (
        <Formik
          enableReinitialize
          initialValues={
            game && game._id ? { ...game } : { ...blogData.BlogInitialValues }
          }
          onSubmit={(values) => {
            onCreateGameClick(values);
          }}
          validationSchema={blogData.BlogValidation}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            setFieldValue,
            setFieldTouched,
            handleBlur,
          }) => {
            return (
              <div className="relative mx-auto max-w-xs lg:max-w-2xl sm:max-w-md px-5 w-full bg-white pb-8">
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4">
                    <div className="mx-auto mb-10 max-w-[510px] text-center ">
                      <h2 className="mb-4 text-xl font-bold text-dark  sm:text-4xl md:text-[40px]">
                        Create Blog
                      </h2>
                      <p className="text-base text-body-color ">
                        Every blog is a new beginning, a fresh voice in the
                        digital world.
                      </p>
                      <p className="text-base text-body-color ">
                        Start writing, because your ideas deserve to be heard.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="mt-5">
                    <Form onSubmit={handleSubmit}>
                      <div className="relative mt-6">
                        <Field
                          type="text"
                          name="title"
                          placeholder="Blog Title"
                          className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                          autoComplete="false"
                        />
                        <label
                          htmlFor="title"
                          className=" pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-500 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-500"
                        >
                          Blog Title
                        </label>

                        {errors.title &&
                          touched.title &&
                          typeof errors.title === "string" && (
                            <div className="text text-red-500">
                              {" "}
                              {errors.title}
                            </div>
                          )}
                      </div>

                      <div className="relative mt-6">
                        <label className="text-gray-500">Blog Content</label>
                        <ReactQuill
                          theme="snow"
                          value={values.description}
                          onChange={(value, delta, source, editor) => {
                            setFieldValue("description", value);
                          }}
                          onBlur={() => {
                            handleBlur({ target: { name: "description" } });
                          }}
                        />

                        {errors.description &&
                          touched.description &&
                          typeof errors.description === "string" && (
                            <div className="text-sm text-red-500">
                              {" "}
                              {errors.description}
                            </div>
                          )}
                      </div>

                      <div className="my-6">
                        <Button
                          htmlType="submit"
                          disabled={buttonLoading}
                          loading={buttonLoading}
                          className="w-full "
                          size="large"
                        >
                          {gameId ? "Edit Blog" : "Create Blog"}
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            );
          }}
        </Formik>
      )}
    </div>
  );
};

export default CreateGamePage;
