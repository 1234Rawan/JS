var form=document.getElementById('addForm');
var itemsList=document.getElementById('items');
var filter=document.getElementById('filter');
form.addEventListener('submit', addItem);
itemsList.addEventListener('click', removeItem);
filter.addEventListener('keyup',filterItems);
function addItem(e)
{
    e.preventDefault();
    var newItem=document.getElementById('item').value;
    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));
    var deleteBtn =document.createElement('button');
    
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    
    itemsList.appendChild(li);

}

function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are you Sure?')){
            var li =e.target.parentElement;
            itemsList.removeChild(li);
        }
    }
}
function filterItems(e){
    var text=e.target.value.toLowerCase();
  var items=  itemsList.getElementsByTagName('li');
  console.log(items);
  Array.from(items).forEach(function(item){
var itemName=item.firstChild.textContent;
console,log(itemName);
if(itemName.toLocaleLowerCase().indexOf(text) !=-1){
   item.style.display='block'; 
}
else{
    item.style.display='none'; 
}
  });
}