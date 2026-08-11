let todolist=[{
  item:'buymilk',
  duedate:'4/10/26'},
  {
    item:'kapde dhulna',
    duedate:'5/11/26',
}];
display()

function addtodo(){
  let todoitem_element=document.querySelector("#input-todo");
  let tododate_element=document.querySelector("#todo-date")
  let todoitem=todoitem_element.value ;
  let tododate=tododate_element.value;
  todolist.push({item:todoitem,duedate:tododate});
  todoitem_element.value='';
  tododate_element.value='';
  display()
}

function display(){
  let containeritem=document.querySelector(".todo-container");
  let newhtml= '';
  for(let i=0;i<todolist.length;i++){
    // item=todolist[i].item
    // duedate=todolist[i].duedate;

    let {item,duedate}=todolist[i];
    newhtml+=`
     <span>${item} </span>
    <span>${duedate} </span>
    <button class=" btn-delete" onclick="todolist.splice(${i},1);
    display()">Delete</button>
   `
      
  }
  containeritem.innerHTML=newhtml;
}