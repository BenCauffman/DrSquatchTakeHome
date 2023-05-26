const Card = ({
  handle,
  title,
  products_included,
  price,
  orignalPrice,
  imageSrc,
}) => {
  return (
    <div className="productCard">
      <h1>{handle}</h1>
    </div>
  );
};

export default Card;
