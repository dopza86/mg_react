import React from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
`;

export default ({ user }) => <Wrapper>{user.username}</Wrapper>;
