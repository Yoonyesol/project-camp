import { Outlet } from "react-router-dom";
import BlogHeader from "../components/BlogHeader";
import BlogFooter from "../components/BlogFooter";

const BlogLayout = () => {
  return (
    <>
      <BlogHeader />
      <Outlet />
      <BlogFooter />
    </>
  );
};
export default BlogLayout;
