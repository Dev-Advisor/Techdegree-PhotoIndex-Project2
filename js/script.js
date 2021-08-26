/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/





/* Varible for items per page for function */
let itemsPerPage = 9;

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page) {

/* Varibles to be used in function*/  
let startIndex =(page * itemsPerPage) - itemsPerPage
let endIndex = page * itemsPerPage;
    
let studentList = document.querySelector('.student-list');
   
studentList.innerHTML= " ";
   
/* Looping through data and creating student cards*/
for(let i=0; i< list.length + itemsPerPage; i++){
   if(i >= startIndex && i < endIndex){
   studentList.innerHTML +=`
   <li class="student-item cf">
      <div class="student-details">
         <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
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
   /* Varibles to be used in function*/
   let pageNumber = Math.ceil(list.length/9);
   let linkList = document.querySelector('.link-list');
   linkList.innerHTML = " ";
   
  
   
   /* Looping through pageNumber and creating buttons */
   for(i = 0; i < pageNumber; i++){
      linkList.innerHTML +=
          `
          <li>
          <button type="button">${i + 1}</button>
         </li>
         `
        
       }
       
    /* Varibles and ternary operator for adding active to inial button */
    linkList.getElementsByTagName('button').length > 0 ? linkList.getElementsByTagName('button')[0].classList.add("active") : linkList.innerHTML = " "
    let buttons = linkList.getElementsByTagName('button');

    /* Function to remove and add active to button */
   function btnAction(event){
      for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('active');
      }
      event = event.target;
      
     event.classList.add('active')
  }
   /* Event Listener for pagination buttons */
   linkList.addEventListener('click', (event) => {
       if(event.target.tagName === 'BUTTON'){
         showPage(data,event.target.textContent)
         btnAction(event)
          } 
      }) 
  }



// Call functions

showPage(data,1);
pagination(data);
