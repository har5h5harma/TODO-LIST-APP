let TODOLIST=[
    {
        item: "buy milk",
        dueDate:'20/02/2024'
    }
];
displayItems();
function addTODO(){
    let inputElement=document.querySelector(`#todoInput`);
    let dateElement=document.querySelector(`#tododate`);
    let todoItem=inputElement.value;
    let tododate=dateElement.value;
    TODOLIST.push({item:todoItem,dueDate:tododate});
    inputElement.value='';
    dateElement.value='';
    displayItems();
}

function displayItems(){
    let containerElement =document.querySelector('.todo-container');
    let newHtml='';
    for(let i=0;i<TODOLIST.length;i++){
        // let item = TODOLIST[i].item;
        // let dueDate =TODOLIST[i].dueDate;
        let {item,dueDate}=TODOLIST[i];
        
        newHtml+=`
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class="buttondelete" onclick="TODOLIST.splice(${i},1); displayItems()">Delete</button>
        
        `;
        
    }
    containerElement.innerHTML=newHtml;
}