// UI Components
import {
  NavigationBar,
  About,
  Catalog,
  Testimonial,
  Service,
  Contact,
} from "./components";

export default function Home() {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main>
        <About />
        <Catalog />
        <Testimonial />
        <Service />
      </main>
      <footer>
        <Contact />
      </footer>
    </>
  );
}
