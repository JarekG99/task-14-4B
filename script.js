
var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju.',
    poster: 'photos/harrypotter.jpeg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o lwie - królu sawanny.',
    poster: 'photos/king_lion.jpeg'
  },
  {
    id: 3,
    title: 'Czterysta batów',
    desc: 'Moving story of a young boy who, left without attention, delves into a life of petty crime.',
    poster: 'photos/czterysta_batow.jpg'
  },
];

function Movies(props) {
  return(
    <div className="Movies">
      <div className="MovieId">{props.id}</div>
      <div className="MovieTitle">{props.title}</div>
      <div className="MovieDescr">{props.descr}</div>
      <img classPoster="MoviePoster"
        src={props.poster}
        alt={'coś'}
      >
    </div>
  );
}

ReactDOM.render(
  <Movies
    id={movies.id}
    title={movies.title}
    descr={movies.descr}
    poster={movies.poster}
  />
  document.getElementById('app')
);
