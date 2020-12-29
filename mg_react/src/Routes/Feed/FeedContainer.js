import React, { useEffect, useState } from "react";
import FeedPresenter from "./FeedPresenter";

export default ({ getPosts, posts, increasePage, page }) => {
  useEffect(() => {
    getPosts(1);
  }, []);
  useEffect(() => {
    getPosts(page);
  }, [page]);
  console.log(posts);
  return <FeedPresenter posts={posts} increasePage={increasePage} />;
};
