import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) => {
  return createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  );
};

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  //Object.keys returns an array of the keys of the object
  (collections) => Object.keys(collections).map((key) => collections[key])
);
