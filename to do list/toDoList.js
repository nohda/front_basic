const items = document.querySelector(".items");
const input = document.querySelector(".footer_input");
const addBtn = document.querySelector(".footer_button");

function onAdd(){
    const text = input.value;
    if(text === ''){
        input.focus();
        return;
    }
    const item = createItem(text);
    items.appendChild(item);
    item.scrollIntoView({block: 'end'});
    input.value = '';
    input.focus();
}

function createItem(text){
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class','item_row');
    
    const item = document.createElement('div');
    item.setAttribute('class','item');
    
    const name = document.createElement('span');
    name.setAttribute('class','item_name');
    name.innerText = text;

    const deleBtn = document.createElement('button');
    deleBtn.setAttribute('class','item_delete');
    deleBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    
    deleBtn.addEventListener('click',()=>{
        items.removeChild(itemRow); 
    })

    const itemDivider = document.createElement('item_divider');
    itemDivider.setAttribute('class','item_divider');

    item.appendChild(name);    
    item.appendChild(deleBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);
    items.appendChild(itemRow);

    // items.appendChild(item);
    // items.appendChild(itemDivider);

    return itemRow;
}

addBtn.addEventListener('click',()=>{
    onAdd();
})

input.addEventListener('keypress',(event)=>{
    if(event.key === 'Enter'){
        onAdd();
    }
});