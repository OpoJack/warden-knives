import React from "react";

import CollectionItem from "../collection-item/collection-item.component";
import FadeInSection from "../scroll-fade/scroll-fade.component";

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <FadeInSection>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
      <PreviewContainer>
        {items
          //Filter to only display the first 4 items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </FadeInSection>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
