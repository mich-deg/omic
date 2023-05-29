import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div className="app">
      <main className="content">
        <h1>Hello World</h1>
        <h2>Omic</h2>
      </main>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
