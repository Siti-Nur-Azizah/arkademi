let todo = [
{
	title:"rendang",
	description:"rendang adalah makan padang"
},
{
	title:"sepeda",
	description:"sepeda adalah sepeda"
},
{
	title:"sheep",
	description:"sheep sebenarnya adalah domba"
},{
	title:"brokoli",
	description:"sayuran yang tidak sedap"
},
{
	title:"jakarta",
	description:"jakarta kota macettt"
},
]

class TodoList{
	item = document.getElementById('todo-list')
	content = document.getElementById('todo-description')
	listItem = ()=>{
		for(let x in todo){
			this.item.innerHTML+='<div class="list-item">'+todo[x].title+'</div>'
		}

	}
	setDisplay = (n=0)=>{
		this.content.innerHTML ='<div class="title">'+todo[n].title+'</div>\
				<div class="container">'+todo[n].description+'</div>'
	}
}

const todoList = new TodoList()