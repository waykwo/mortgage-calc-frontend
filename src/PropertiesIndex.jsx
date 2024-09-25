export function PropertiesIndex({properties}) {
  return (
    <div>
      <h1>All properties</h1>
      {properties.map((property) => (
        <div key={property.id}>
          <h2>{property.address}</h2>
          <p>{property.purchase_price}</p>
          <p>{property.interest_rate}</p>
        </div>
      ))};
    </div>
  );
}