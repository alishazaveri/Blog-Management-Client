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
import { verifyUser } from "./services/user.service";

export const UserContext = createContext();

const MainLayout = ({ children }) => (
  <>
    <Navbar />
    <div className="mt-[70px]">{children}</div>
  </>
);

function App() {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("userToken")
  );

  const [user, setUser] = useState(null);

  const handleLogin = (token) => {
    setAccessToken(token);
  };

  useEffect(() => {
    async function verify() {
      try {
        if (!accessToken) {
          throw new Error();
        }

        const { data } = await verifyUser({ token: accessToken });

        setUser({ isAuthorized: true, data: data });
      } catch (e) {
        localStorage.removeItem("userToken");
        setUser({ isAuthorized: false });
      }
    }

    verify();
  }, [accessToken]);

  // Show loading until user verification is complete
  if (user === null) {
    return <CustomLoading />;
  }

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/sign-in"
            element={<LoginPage handleLogin={handleLogin} />}
          />
          <Route
            path="/sign-up"
            element={<RegisterPage handleLogin={handleLogin} />}
          />

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
            path="/blog-edit/:blogId"
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
            path="/blog/:blogId"
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
