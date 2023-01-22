import { footer } from "./data/menu";

import styles from "./styles/footer.module.css";

const Footer = () => {
  return (
    <div>
      <p className={styles.footer}>Footer</p>

      <ul>
        {footer.map((menu) => {
          return <li key={menu.id}>{menu.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
