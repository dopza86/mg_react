import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TextareaAutosize from "react-autosize-textarea";
import FatText from "./FatText";
import Avatar from "./Avatar";
import { HeartFull, HeartEmpty, Comment as CommentIcon } from "./Icons";
import PostPhotos from "./PostPhotos";

const Post = styled.div`
  ${(props) => props.theme.whiteBox};
  width: 100%;
  max-width: 600px;
  user-select: none;
  margin-bottom: 25px;
  a {
    color: inherit;
  }
`;

const Header = styled.header`
  padding: 15px;
  display: flex;
  align-items: center;
`;

const UserColumn = styled.div`
  margin-left: 10px;
`;

const Location = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 12px;
`;

const Button = styled.span`
  cursor: pointer;
`;

const Meta = styled.div`
  padding: 15px;
`;

const Buttons = styled.div`
  ${Button} {
    &:first-child {
      margin-right: 10px;
    }
  }
  margin-bottom: 10px;
`;

const Timestamp = styled.span`
  font-weight: 400;
  text-transform: uppercase;
  opacity: 0.5;
  display: block;
  font-size: 12px;
  margin: 10px 0px;
  padding-bottom: 10px;
  border-bottom: ${(props) => props.theme.lightGreyColor} 1px solid;
`;

const Textarea = styled(TextareaAutosize)`
  border: none;
  width: 100%;
  resize: none;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;

const Comments = styled.ul`
  margin-top: 10px;
`;

const Comment = styled.li`
  margin-bottom: 7px;
  span {
    margin-right: 5px;
  }
`;

const Caption = styled.div`
  margin: 10px 0px;
`;

export default ({
  key,
  id,
  user,
  photos,
  name,
  postObj,
  caption,
  location,
  avatar,
  created,
}) => (
  <Post>
    <Header>
      <Avatar size="sm" url={avatar} />
      <UserColumn>
        <Link to={`/${user.username}`}>
          <FatText text={user.username} />
        </Link>
        <Location>{location}</Location>
      </UserColumn>
    </Header>
    <PostPhotos photos={photos} />
    <Meta>
      <Buttons>
        <Button>
          <HeartFull />
        </Button>
        <Button>
          <CommentIcon />
        </Button>
      </Buttons>
      <FatText />
      <Caption>
        <FatText text={user.username} />
        {caption}
      </Caption>
      <Comment>
        <FatText />
      </Comment>
      <Timestamp>{created}</Timestamp>
      <Textarea />
    </Meta>
  </Post>
);
