import React from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = React.useState(data);

  return (
    <main>
      <section className="container">
        <p>{people.length} birthdays today </p>
        <List people={people} setPeople={setPeople} />
        <button className="btn" onClick={() => setPeople([])}>
          CLEAR ALL
        </button>
      </section>
    </main>
  );
}

export default App;
