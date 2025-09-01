import './App.css';
function App() {
  const colors = ['red', 'wht'];
  const items = Array.from({ length: 30 }, (_, i) => colors[i % 2]);

  return (
    <div>
      <ul className="top-list">
        {items.map((cls, i) => (
          <li key={i} className={cls}></li>
        ))}
      </ul>
    </div>
  );
}

export default App;