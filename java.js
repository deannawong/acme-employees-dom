const employees = [
    { id: 1, name: 'moe'},
    { id: 2, name: 'larry'},
    { id: 4, name: 'shep'},
    { id: 3, name: 'curly'},
    { id: 5, name: 'groucho'},
    { id: 6, name: 'harpo'},
    { id: 8, name: 'shep Jr.'},
    { id: 99, name: 'lucy'}
  ];

const name=document.querySelectorAll('.name');
const nameContainer=document.getElementById('name-container');

nameContainer.addEventListener('click',ev=>{
    if(ev.target.className==='name'){
        ev.target.classList.toggle('selected')
    }
}
)
