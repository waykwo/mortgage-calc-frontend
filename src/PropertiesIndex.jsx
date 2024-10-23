export function PropertiesIndex({properties}) {
  return (
    <div>
      <h1>My properties</h1>
      {properties.map((property) => (

        <div key={property.id} className="card" style="width: 18rem;">
        {/* <img src="..." className="card-img-top" alt="..."> */}
          <div className="card-body">
            <h5 className="card-title">{Property.address}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        // <div key={property.id}>
        //   <h3>{property.address}</h3>
        //   <p>{property.id}</p>
        //   <p>{property.purchase_price}</p>
        //   <p>{property.interest_rate}</p>
        // </div>
      ))}
    </div>
  );
}