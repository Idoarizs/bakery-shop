export default function CustomerServiceCard({ icon, title, description }) {
  return (
    <div className="customer-s-card">
      <div className="card-header">
        <label>{title}</label>
        {icon}
      </div>
      <p>{description}</p>
    </div>
  );
}
