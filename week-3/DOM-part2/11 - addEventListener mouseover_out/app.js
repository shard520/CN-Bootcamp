const fav = document.querySelector('#fav');
const list = document.getElementsByTagName('li');
console.log(list);

for (let item of list) {
  console.log(item);

  item.addEventListener('mouseover', () => {
    if (item === fav) item.style.color = 'red';
    else item.style.color = 'green';
  });

  item.addEventListener('mouseout', () => {
    item.style.color = 'black';
  });
}
