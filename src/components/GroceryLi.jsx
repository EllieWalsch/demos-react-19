import PropTypes from "prop-types";

export default function GroceryLi({ item }) {
  return (
    <li key={item.name}>
      <input type="checkbox" id={item.id} defaultChecked={item.purchased} />
      <label htmlFor={item.id}>{item.name}</label>
    </li>
  );
}

GroceryLi.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    purchased: PropTypes.bool.isRequired,
  }).isRequired,
};
