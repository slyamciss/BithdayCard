import React from "react";

function List({ people, setPeople }) {
  const handleDelete = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt="name" />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
              <button className="btn" onClick={() => handleDelete(id)}>
                DELETE
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default List;
