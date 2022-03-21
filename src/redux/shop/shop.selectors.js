import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) => {
  return createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );
};

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  //Object.keys returns an array of the keys of the object
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);
