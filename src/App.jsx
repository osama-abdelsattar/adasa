import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home";
import Layout from "./layout/Layout";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Privacy from "./components/home/privacy-and-terms/Privacy";
import HomeContent from "./components/home/HomeContent";
import Terms from "./components/home/privacy-and-terms/Terms";
import { posts } from "./assets/posts.json";
import Article from "./components/article/Article";
import BlogContent from "./components/blog/BlogContent";
import Error from "./components/error/Error";

const blogArticles = posts.map((post) => ({
  path: post.slug,
  element: <Article post={post} />,
}));
blogArticles.unshift({ path: "", element: <BlogContent /> });
const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomeContent />,
      },
      {
        path: "home",
        element: <Home />,
        children: [
          { path: "", element: <HomeContent /> },
          { path: "privacy", element: <Privacy /> },
          { path: "terms", element: <Terms /> },
        ],
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blog />,
        children: blogArticles,
      },
      { path: "*", element: <Error /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
