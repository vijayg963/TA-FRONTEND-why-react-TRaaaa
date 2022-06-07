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

// create UI
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

// function elm(type, attr = {}, ...children) {
//   let element = document.createElement(type);
//   for (let key in attr) {
//     if (key.startsWith('data-')) {
//       element.setAttribute(key, attr[key]);
//     } else {
//       element[key] = attr[key];
//     }
//   }
//   children.forEach((child) => {
//     if (typeof child === 'object') {
//       element.append(child);
//     }
//     if (typeof child === 'string') {
//       let node = document.createTextNode(child);
//       element.append(node);
//     }
//   });
//   return element;
// }

function createMovieUI(data = allMovies) {
  //   rootElm.innerHTML = '';
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
    // rootElm.append(li);
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

// function createMovieUI(allMovies, rootElm) {
//   allMovies.forEach((movie, i) => {
//     let li = elm('li');
//     li.className = 'flex';
//     let input = elm('input');
//     input.type = 'checkbox';
//     input.id = i;
//     input.checked = movie.watched;
//     input.addEventListener('change', handleChange);
//     let label = elm('label');
//     label.for = i;
//     label.innerText = movie.name;
//     let span = elm('span');
//     span.innerText = '❌';
//     span.setAttribute('data-id', i);
//     span.addEventListener('click', deleteMovie);

//     li.append(input, label, span);
//     rootElm.append(li);
//   });
// }

createMovieUI();
