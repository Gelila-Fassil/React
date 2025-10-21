

type ProductProps = {
    productName : string;
    price: number;
};
const Product = ({productName,price} : ProductProps) =>{
    return (
      <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">{productName}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{price}</h6>
        </div>
      </div>
    );
}

export default Product