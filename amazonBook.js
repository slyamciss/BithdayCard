const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },

  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/61hK4PcIQUS._AC_UL200_SR200,200_.jpg",
    title: "Beach Read",
    author: "Emily Henry",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/71XPaaKeUES._AC_UL200_SR200,200_.jpg",
    title: "Run: Book One",
    author: "John Lewis",
  },
];

function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        // return <Book key={book.id} book={book} />;
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;

  const clickHandler = () => {
    console.log("hello tariq");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article className="book">
      <img src={img} alt="img" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        More Complex example
      </button>
    </article>
  );
};

export default BookList;
