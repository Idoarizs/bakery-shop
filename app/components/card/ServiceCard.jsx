export default function ServiceCard({ id, title, description, children }) {
  return (
    <div key={id} className="service-card">
      <div className="icon">{children}</div>
      <div className="description">
        <label>
          <strong>{title}</strong>
        </label>
        <p>{description}</p>
      </div>
    </div>
  );
}
