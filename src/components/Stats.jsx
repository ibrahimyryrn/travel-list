function Stats({ itemsLength, list }) {
  if (!itemsLength) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  }
  const calculatePacked = Math.round((100 * list.length) / itemsLength);
  return (
    <footer className="stats">
      <em>
        {calculatePacked === 100
          ? "You got everything! Readt to go ✈"
          : `You have ${itemsLength} item on your list,and you already packed
        ${list.length} (%${calculatePacked})`}
      </em>
    </footer>
  );
}

export default Stats;
