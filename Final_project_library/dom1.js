let books = [
{author: 'JOHN', title: 'WAVES'},
{author: ' SYMON', title: 'SURVIVE'},
{author: 'ROCKY', title: 'PINK PANTHER'},
{author: 'ABAZZ', title: 'LOVE AND SORROW'},
]
let name=[]
let users =[]

function authSearch() {
	let aName = document.getElementById('authorSearch').value
	let name= books.filter((x) => x.author.match(aName))
   try{

	document.getElementById('allBooks').innerHTML=""
    	
for(var i=0;i<name.length;i++){
	let listItem = document.createElement('li')
	let textnode = document.createTextNode(name[i].author)
	listItem.appendChild(textnode)
	document.getElementById('allBooks').appendChild(listItem)
}
 document.getElementById('result').innerHTML = 'yes we have at least one book by ' + aName
}
catch (err) {
	document.getElementById('result').innerHTML= 'sorry no books by '  + aName
}
}


function addBook (book){
     books.push(
     	{author: document.getElementById('inputauthor').value,title:document.getElementById('inputtitle').value} );
}
function showAllBooks ()  {
	document.getElementById('allTheBooks').innerHTML=""
	


for(var i=0;i<books.length;i++){
	let listItem = document.createElement('li')
	let textnode = document.createTextNode(books[i].author)
	listItem.appendChild(textnode)
	document.getElementById('allTheBooks').appendChild(listItem)
}
}

function createUser(){
	var name= document.getElementById('name');
	var department= document.getElementById('department');
	var email= document.getElementById('email');
	var telephone= document.getElementById('telephone');
	var password= document.getElementById('user_password');
	if(name.value==''){
		alert('Enter name');
		return;
	}
	else if(department.value ==''){
		alert('Enter department');
		return;
	}
	else if(email.value ==''){
		alert('Enter email');
		return;
	}
	else if(telephone.value ==''){
		alert('Enter telephone number');
		return;
	}
	else if(password.value ==''){
		alert('Enter password');
		return;
	}
	else{
		users.push(
     	{name: name.value, department: department.value, email: email.value, telephone: telephone.value, password: password.value} );
     	alert('User Created');
	}
}


function Userlogin(){
	var login_email=document.getElementById('login_id');
	var password=document.getElementById('login_password');
    
    if(login_email.value !== users[0].email){
    	alert('Enter id');
    	return;
    }
    else if(password.value !== users[0].password){
    	alert('Enter password');
    	return;
    }
   else{
         alert('Login successfull');
        }
   	 
   }



