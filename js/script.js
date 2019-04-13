/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

//DOM ELEMENTS
const bodyElem = document.body;
const container = bodyElem.firstElementChild;
const listTitle = document.querySelector('h2');
// const studentList = document.querySelectorAll('ul');             
const students = document.querySelectorAll('.student-list li');  

/***
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/


//FUNCTIONS

//Filters list to show only a specified range:
function showPage(min, max) {
   for (let i = 0; i < students.length; i += 1){students[i].style.display = 'none';}
   for (let i = 0; i < students.length; i += 1){
      if (i >= min && i <= max) {students[i].style.display = 'block';}
   };
};

showPage(0,9);

/***
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

//Creates a link for every ten items in the list:
function appendPageLinks() {
   let paginationDiv = document.createElement('div');
   let pageList = document.createElement('ul');
   paginationDiv.setAttribute('class','pagination');
   container.appendChild(paginationDiv);
   paginationDiv.appendChild(pageList);
   for (let i=0;i<students.length;i+=10) {
      let pageLink = document.createElement('li');
      pageList.appendChild(pageLink);
      pageLink.innerHTML = '<a href = #>Page ' + (i/10 + 1) + '</a>';
      pageLink.addEventListener('click',function(){showPage(i,(i+9));}, false);
      
      //FUNCTIONALITY FOR USING BUTTONS INSTEAD OF DIVS
      // let button = document.createElement('button');
      // button.textContent = "Page " + (i/10 + 1);
      // container.appendChild(button);
      // button.addEventListener('click',function(){showPage(i,(i+9));}, false);
      // button.setAttribute('class','.pagination');
   };
};

appendPageLinks();




// Remember to delete the comments that came with this file, and replace them with your own code comments.