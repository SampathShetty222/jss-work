import { header } from "./data/menu";

import styles from "./styles/header.module.css";

const Header = () => {
  return (
    <div>
      <p className={styles.header}>Header</p>

      <ul>
        {header.map((menu) => {
          return <li key={menu.id}>{menu.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Header;
