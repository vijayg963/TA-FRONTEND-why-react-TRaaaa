let input = document.querySelector('input[type="text"]');
let rootElm = document.querySelector('.movie-list');

let allMovies = [
  {
    name: 'Inception',
    watched: false,
  },
  {
    name: 'Rush',
    watched: false,
  },
];

input.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    event.target.value = '';
    createMovieUI();
  }
});

function deleteMovie(id) {
  allMovies.splice(id, 1);
  createMovieUI();
}

function handleChange(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
}

function createMovieUI(data = allMovies) {
  let movieUI = data.map((movie, i) => {
    let li = React.createElement(
      'li',
      { className: 'flex' },
      React.createElement('input', {
        type: 'checkbox',
        id: i,
        checked: movie.watched,
      }),
      React.createElement('label', { for: i }, movie.name),
      React.createElement('span', { 'data-id': i }, '❌')
    );

    return li;
  });
  ReactDOM.render(movieUI, rootElm);
}

document.querySelector('.movie-list').addEventListener('click', (e) => {
  const { tagName } = e.target;
  const { id } = e.target.dataset;
  if (tagName === 'SPAN') {
    deleteMovie(id);
  }
});

createMovieUI();
