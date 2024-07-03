function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list 🔥</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      {percentage !== 100 ? (
        <em>
          🧳 You have {numItems} items on your List, and you already packed{" "}
          {numPacked} ({percentage}%)
        </em>
      ) : (
        <em>Now you have everything. You are ready to go 🚀</em>
      )}
    </footer>
  );
}

export default Stats;
