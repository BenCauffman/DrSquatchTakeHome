import { useState, useEffect } from "react";
import Card from "./Card";

const CollectionPage = ({ bundlesToShow }) => {
  return (
    <>
      {bundlesToShow.map((bundle) => {
        return (
          <Card
            handle={bundle.handle}
            title={bundle.title}
            products_included={bundle.products_included}
            price={bundle.price}
            originalPrice={bundle.orignalPrice}
            imageSrc={bundle.imageSrc}
          />
        );
      })}
    </>
  );
};

export default CollectionPage;
