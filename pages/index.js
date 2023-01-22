// Third-party library imports(if any)

// User defined component imports(if any)
import Card from "components/home/card";

// Data imports(if any)
import { lists } from "components/home/data";

// Stylesheets imports(if any)
import styles from "./styles/index.module.css";

const Home = () => {
  const home = "hello";
  return (
    <div className={styles.div}>
      <h1 className="h1">Next boilerplate with Tailwind configured</h1>

      <Card data={lists} />
    </div>
  );
};

export default Home;
