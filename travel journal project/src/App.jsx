import "./App.css";
import Header from "./header";
import Entry from "./Entry";
import data from "./data";

function App() {
  const entryElement = data.map((entry) => {
    return (
      <Entry
        key={entry.id}
        entry = {entry}
      />
    );
  });

  return (
    <>
      <Header />
      {entryElement}
    </>
  );
}

export default App;
