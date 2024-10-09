// Components
import { ServiceCard } from "..";

// Dummy Data
import { constants } from "@/app/data/constants";

export default function Service() {
  return (
    <section id="service">
      <div className="text-content">
        <h1>
          <span>Shipping</span> & Payment
        </h1>
        <p>
          Order with ease from our wide selection of freshly prepared dishes.
          Whether you choose to have your food delivered or pick it up yourself,
          we ensure a smooth process from checkout to doorstep. Savor delicious
          meals made with love and delivered with care!
        </p>
      </div>
      <div className="card-list">
        {constants.services.map((item) => (
          <ServiceCard
            key={item.id}
            title={item.title}
            description={item.description}
          >
            {item.icon}
          </ServiceCard>
        ))}
      </div>
    </section>
  );
}
