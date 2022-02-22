import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";
import FadeInSection from "../scroll-fade/scroll-fade.component";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <FadeInSection>
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          //Filter to only display the first 4 items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </FadeInSection>
  </div>
);

export default CollectionPreview;
