const ids = [
  'case', 'product', 'resource', 'company'
];
let on = 0;

const body = document.getElementsByTagName('body');
// const element = 

ids.forEach(id => {
  const btn = document.querySelector(`#${id}-b`);
  const hide = document.querySelector(`#${id}-h`);

  btn.addEventListener('mouseover', (e) => {
    e.preventDefault();
    hide.classList.remove('hide');
  })
  btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.getElementById('all-hides') .addEventListener('mouseout', (e) => {
      hide.classList.add('hide');
    });
  })
});

function findAncestor(el, cls) {
  while ((el = el.parentElement) && !el.classList.contains(cls));
  return el;
}

