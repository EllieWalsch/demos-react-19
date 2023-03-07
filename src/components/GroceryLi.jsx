export default function GroceryLi({ item }) {
  return (
    <li key={item.name}>
      <label htmlFor={item.id}>{item.name}</label>

      <input type="checkbox" id={item.id} defaultChecked={item.purchased} />
    </li>
  );
}
