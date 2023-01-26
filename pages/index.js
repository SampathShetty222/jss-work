// Third-party library imports(if any)

// User defined component imports(if any)
import Meta from "components/common/meta";
import Card from "components/home/card";

// Data imports(if any)
import { lists } from "components/home/data";

// Stylesheets imports(if any)
import styles from "styles/index.module.css";

const Home = () => {
  return (
    <div>
      <Meta title="Home" description="Some description" />
      <div className={styles.div}>
        <h1 className="p-5">Next boilerplate with Tailwind configured</h1>

        <Card data={lists} />
      </div>
    </div>
  );
};

export default Home;
