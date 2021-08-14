/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
let itemsPerPage = 9;


function showPage(list, page) {
    
let startIndex =(page * itemsPerPage) - itemsPerPage
let endIndex = page * itemsPerPage;
    
let studentList = document.querySelector('.student-list');
   
studentList.innerHTML= " ";
   

for(let i=0; i< list.length + itemsPerPage; i++){
   if(i >= startIndex && i < endIndex){
   studentList.innerHTML +=`
   <li class="student-item cf">
      <div class="student-details">
         <img class="avatar" src=${list[i].picture.thumbnail} alt="Profile Picture">
         <h3>${list[i].name.first} ${list[i].name.last}</h3>
         <span class="email">${list[i].email}</span>
      </div>
      <div class="joined-details">
         <span class="date">Joined ${list[i].registered.date}</span>
      </div>
   </li> `
         
         }
      
  }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function pagination(list){
   let pageNumber = Math.ceil(list.length/9);
   let linkList = document.querySelector('.link-list');
  
   
  for(i = 0; i < pageNumber; i++){
      let button = document.createElement('button');
      button.innerText = i + 1;
      button.addEventListener('click',(event)=>{
         let event = event.target
         if (event.target === 'button'){
            event.classList.add('active');
         } else {
            button[i].classList.remove('active');
         }
      })     
      
      
         
       }
    linkListappendChild(button)
  }



// Call functions

showPage(data,1);
pagination(data);
console.log("no errors");