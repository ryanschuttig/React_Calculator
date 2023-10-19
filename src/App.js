function App() {
  return (
    // using CSS Grid for layout
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand"></div>
        <div className="current-operand"></div>
      </div>
      {/* AC button spans two columns*/}
      <button className="span-two">AC</button>
      <button>Delete</button>
      <button>÷</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      {/* Equals button spans two columns*/}
      <button className="span-two">=</button>
    </div>
  );
}

export default App;
