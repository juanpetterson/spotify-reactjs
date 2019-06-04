import React from "react";

import { Container, Search, User } from "./styles";

import UserIcon from "../../assets/others/user.jpg";

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img src={UserIcon} alt="Avatar" />
      Juan Petterson
    </User>
  </Container>
);

export default Header;
