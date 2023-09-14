import classname from "./Card.module.css";

const Card = (props) => {
  return <div className={classname.card}>{props.children}</div>;
};
export default Card;
