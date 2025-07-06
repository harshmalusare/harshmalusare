const movies = [
  { title:"Inception", genre:"Action" },
  { title:"The Godfather", genre:"Drama" },
  { title:"Toy Story", genre:"Comedy" },
  { title:"Get Out", genre:"Horror" },
  { title:"The Dark Knight", genre:"Action" },
  { title:"Forrest Gump", genre:"Drama" },
  // ...add more
];

const trendingList = document.getElementById('trending-list');
const recommendList = document.getElementById('recommend-list');
const searchInput = document.getElementById('search');
const genreFilter = document.getElementById('genre-filter');
const randomBtn = document.getElementById('random-btn');
const darkToggle = document.getElementById('dark-toggle');

function showTrending() {
  trendingList.innerHTML = '';
  movies.slice(0,4).forEach(m => {
    const li = document.createElement('li');
    li.textContent = m.title;
    trendingList.append(li);
  });
}
function recommend() {
  const query = searchInput.value.toLowerCase();
  const genre = genreFilter.value;
  const filtered = movies.filter(m => {
    return (!query || m.title.toLowerCase().includes(query))
      && (!genre || m.genre === genre);
  });
  recommendList.innerHTML = '';
  filtered.slice(0,4).forEach(m => {
    const li = document.createElement('li');
    li.textContent = m.title;
    recommendList.append(li);
  });
}
function randomMovie() {
  const m = movies[Math.floor(Math.random() * movies.length)];
  alert("🎲 Random pick: " + m.title);
}
function toggleDark() {
  document.documentElement.toggleAttribute('data-theme');
}

searchInput.addEventListener('input', recommend);
genreFilter.addEventListener('change', recommend);
randomBtn.addEventListener('click', randomMovie);
darkToggle.addEventListener('click', toggleDark);

showTrending();
recommend();
