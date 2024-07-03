import Item from "./Item";

function PackingList({ items, onDeleteItem, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((i) => (
          <Item
            i={i}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={i.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
