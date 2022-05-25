const loadData = async () => {
  const loader = document.querySelector('#loader');

  try {
    loader.style.display = 'block';

    const res = await fetch('https://classes.codingbootcamp.cz/assets/classes/api/departures-slow.php');
    const data = await res.json();
    console.log('data:', data);
  } catch (e) {
    console.log('error:', e);
  } finally {
    console.log('we will stop loader');
    loader.style.display = 'none';
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.createElement('button');
  document.body.appendChild(btn);

  btn.textContent = 'load';
  btn.addEventListener('click', loadData);
});

