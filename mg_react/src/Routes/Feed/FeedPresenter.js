import React from "react";
import { Helmet } from "rl-react-helmet";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import PostCard from "../../Components/PostCard";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`;
export default ({ posts, increasePage }) => {
  return (
    <Wrapper>
      <Helmet>
        <title>Feed | Prismagram</title>
      </Helmet>

      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          user={post.user}
          avatar={post.user.avatar}
          photos={post.photos}
          name={post.name}
          postObj={post}
          caption={post.caption}
          location={post.location}
          created={post.created}
        />
      ))}
    </Wrapper>
  );
};
