import { useState, useEffect } from "react";

const COLORS = {
  woodsy: "#165834",
  citrus: "#de7c00",
  fresh: "#006fd6",
  herbal: "#5a3714",
  rich: "#e0a17e",
  spiced: "#c10000",
};
const Card = ({
  handle,
  title,
  products_included,
  price,
  originalPrice,
  imageSrc,
  scents,
}) => {
  const [products, setProducts] = useState([]);

  function convertProducts() {
    const seenProducts = {};
    products_included.forEach((product) => {
      if (seenProducts[product]) {
        seenProducts[product]++;
      } else {
        seenProducts[product] = 1;
      }
    });
    const newProducts = Object.entries(seenProducts);
    const finalProducts = [];
    const finalAmounts = [];
    for (const [prods, amount] of newProducts) {
      const splitProds = prods.split("-");
      console.log(splitProds);
      let newProds = splitProds.map((prod) => {
        return `${prod[0].toUpperCase()}${prod.slice(1)}`;
      });
      newProds = newProds.join(" ");
      finalProducts.push(newProds);
      finalAmounts.push(amount);
    }
    setProducts([finalProducts, finalAmounts]);
  }

  useEffect(() => {
    convertProducts();
  }, []);

  return (
    <div className="card">
      <img src={imageSrc}></img>
      <h3>{title}</h3>
      <div className="details">
        <div className="prices">
          {price !== originalPrice ? (
            <>
              <h5 id="oldprice">{`$${originalPrice
                .toString()
                .slice(0, 2)}`}</h5>
              <h5 id="newprice">{`$${price.toString().slice(0, 2)}`}</h5>
            </>
          ) : (
            <h5 id="newprice">{`$${price.toString().slice(0, 2)}`}</h5>
          )}
        </div>
        <div className="scentList">
          {scents.map((scent) => {
            switch (scent) {
              case "woodsy":
                return (
                  <div
                    color="white"
                    style={{ backgroundColor: `${COLORS.woodsy}` }}
                    className="scentCard"
                  >
                    {scent}
                  </div>
                );

              case "citrus":
                return (
                  <div
                    style={{ backgroundColor: `${COLORS.citrus}` }}
                    className="scentCard"
                  >
                    {scent}
                  </div>
                );
              case "fresh":
                return (
                  <div
                    style={{ backgroundColor: `${COLORS.fresh}` }}
                    className="scentCard"
                  >
                    {scent}
                  </div>
                );
              case "herbal":
                return (
                  <div
                    style={{ backgroundColor: `${COLORS.herbal}` }}
                    className="scentCard"
                  >
                    {scent}
                  </div>
                );
              case "rich":
                return (
                  <div
                    style={{ backgroundColor: `${COLORS.rich}` }}
                    className="scentCard"
                  >
                    {scent}
                  </div>
                );
              case "spiced":
                return (
                  <div
                    style={{ backgroundColor: `${COLORS.spiced}` }}
                    className="scentCard"
                  >
                    {scent}
                  </div>
                );
              default:
                return;
            }
          })}
        </div>
        <strong>Included</strong>
        <p>
          {products[0]
            ? products[0].map((prod, index) => {
                if (
                  products[1][index] === 1 &&
                  index === products[0].length - 1
                ) {
                  return <span>{`and ${products[0][index]}.`}</span>;
                } else if (
                  products[1][index] === 1 &&
                  index !== products[0].length - 1
                ) {
                  return <span>{`${products[0][index]}, `}</span>;
                } else if (
                  products[1][index] !== 1 &&
                  index !== products[0].length - 1
                ) {
                  return (
                    <span>{`${products[0][index]} x ${products[1][index]}, `}</span>
                  );
                } else if (
                  products[1][index] !== 1 &&
                  index === products[0].length - 1
                ) {
                  return (
                    <span>{`and ${products[0][index]} x ${products[1][index]}`}</span>
                  );
                }
              })
            : ""}
        </p>
      </div>
    </div>
  );
};

export default Card;
