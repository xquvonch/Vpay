import { styles } from "./util/style";
import {
  Navbar,
  Home,
  Statistics,
  Contract,
  Billing,
  CTA,
  Testimonials,
  Client,
  Footer,
} from "./components";
import Business from "./components/Business";

const App = () => {
  return (
    <div className="w-full bg-primary overflow-hidden">
      {/* navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Navbar />
        </div>
      </div>

      {/* Home */}
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Home />
        </div>
      </div>

      <div className={` bg-primary ${styles.flexCenter} ${styles.paddingX} `}>
        <div className={`${styles.container}`}>
          <Statistics />
          <Contract />
          <Billing />
          <Business />
          <Testimonials />
          <Client/>``
          <CTA />
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default App;
