import styled from "styled-components";

import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const HeaderTitle = styled(Link)`
  font-size: 2rem;
  font-weight: bold;
  width: 90%;
  padding: 10px 10px;
  display: flex;
  position: relative;
  text-align: center;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 10px;
`;

export const OptionsContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 10px;
  cursor: pointer;
  text-align: left;
`;
