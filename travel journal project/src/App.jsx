import "./App.css";
import Header from "./header";
import Entry from "./Entry";
import data from "./data";

function App() {
  const entryElement = data.map((entry) => {
    return (
      <Entry
        img={entry.img}
        place={entry.title}
        location={entry.location}
        map={entry.map}
        dates={entry.dates}
        details={entry.details}
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
