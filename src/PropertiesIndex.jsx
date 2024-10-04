export function PropertiesIndex({properties}) {
  return (
    <div>
      <h1>My properties</h1>
      {properties.map((property) => (
        <div key={property.id}>
          <h3>{property.address}</h3>
          <p>{property.id}</p>
          <p>{property.purchase_price}</p>
          <p>{property.interest_rate}</p>
        </div>
      ))}
    </div>
  );
}