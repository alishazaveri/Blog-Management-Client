import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogsPage from "./pages/BlogsPage";
import Navbar from "./components/Navbar";
import CustomLoading from "./components/CustomLoading";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CreateBlogPage from "./pages/CreateBlogPage";
import MyBlogsPage from "./pages/MyBlogsPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";

export const UserContext = createContext();

const MainLayout = ({ children }) => (
  <>
    <Navbar />
    <div className="mt-[70px]">{children}</div>
  </>
);

function App() {
  const accessToken = localStorage.getItem("accessToken");

  const [user, setUser] = useState(null);

  useEffect(() => {
    async function verifyUser() {
      try {
        if (!accessToken) {
          throw new Error();
        }

        const { data } = await axios.post(
          `${process.env.SERVICE_ENDPOINT}/auth/verify-user`,
          { accessToken }
        );

        setUser({ isAuthorized: true, data: data.body });
      } catch (e) {
        localStorage.removeItem("accessToken");
        setUser({ isAuthorized: false });
      }
    }

    verifyUser();
  }, [accessToken]);

  // Show loading until user verification is complete
  if (user === null) {
    return <CustomLoading />;
  }

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<LoginPage />} />
          <Route path="/sign-up" element={<RegisterPage />} />

          <Route
            path="/"
            element={
              <MainLayout>
                <BlogsPage />
              </MainLayout>
            }
          />
          <Route
            path="/create-blog"
            element={
              <MainLayout>
                <CreateBlogPage />
              </MainLayout>
            }
          />
          <Route
            path="/my-blogs"
            element={
              <MainLayout>
                <MyBlogsPage />
              </MainLayout>
            }
          />

          <Route
            path="/blog"
            element={
              <MainLayout>
                <BlogDetailsPage />
              </MainLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
