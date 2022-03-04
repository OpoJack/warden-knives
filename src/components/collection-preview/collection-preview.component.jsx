import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";
import FadeInSection from "../scroll-fade/scroll-fade.component";

import {
  CollectionPreviewContainer,
  CollectionPreviewTitle,
  CollectionPreviewDiv,
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <FadeInSection>
      <CollectionPreviewTitle>{title.toUpperCase()}</CollectionPreviewTitle>
      <CollectionPreviewDiv>
        {items
          //Filter to only display the first 4 items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </CollectionPreviewDiv>
    </FadeInSection>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
