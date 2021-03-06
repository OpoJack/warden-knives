import styled from "styled-components";

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const TitleContainer = styled.h1`
  font-size: 35px;
  margin-bottom: 25px;
  cursor: pointer;
  text-align: left;
  width: 10%;
  padding-left: 15px;

  &:hover {
    color: red;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
