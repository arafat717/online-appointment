import BlogCompo from "@/components/BlogPage";
import SmallBanner from "@/components/SmallBanner";
import React from "react";

const BlogPage = () => {
  return (
    <div>
      <SmallBanner page="Our Blogs"></SmallBanner>
      <BlogCompo></BlogCompo>
    </div>
  );
};

export default BlogPage;
