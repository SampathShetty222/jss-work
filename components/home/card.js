import PropTypes from "prop-types";

import styles from "./styles/card.module.css";

const Card = ({ data }) => {
  return (
    <div className={styles.card}>
      <p>Card</p>

      <ul>
        {data.map((list) => {
          return <li key={list.id}>{list.name}</li>;
        })}
      </ul>
    </div>
  );
};

Card.propTypes = { data: PropTypes.object };

export default Card;
