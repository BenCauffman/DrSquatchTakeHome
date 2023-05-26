import { useState, useEffect } from "react";
import Card from "./Card";

const CollectionPage = ({ bundlesToShow }) => {
  return (
    <div className="collection">
      {bundlesToShow.map((bundle) => {
        return (
          <Card
            handle={bundle.handle}
            title={bundle.title}
            products_included={bundle.products_included}
            price={bundle.price}
            originalPrice={bundle.originalPrice}
            imageSrc={bundle.imageSrc}
            scents={bundle.scents}
          />
        );
      })}
    </div>
  );
};

export default CollectionPage;
