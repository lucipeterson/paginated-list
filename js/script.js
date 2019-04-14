//ASSIGNING DOM ELEMENTS TO VARIABLES
const bodyElem = document.body;
const container = bodyElem.firstElementChild;
const listTitle = document.querySelector('h2');          
const students = document.querySelectorAll('.student-list li'); 

//FILTERS LIST TO SHOW ONLY A SPECIFIED RANGE
function showPage(min, max) {
   for (let i = 0; i < students.length; i += 1){students[i].style.display = 'none';}
   for (let i = 0; i < students.length; i += 1){
      if (i >= min && i <= max) {students[i].style.display = 'block';}
   };
};

showPage(0,9);

//CREATES A LINK FOR EVERY TEN ITEMS IN THE LIST
function appendPageLinks() {
   let paginationDiv = document.createElement('div');
   let pageList = document.createElement('ul');
   paginationDiv.setAttribute('class','pagination');
   container.appendChild(paginationDiv);
   paginationDiv.appendChild(pageList);
   for (let i=0;i<students.length;i+=10) {
      let pageLink = document.createElement('li');
      pageList.appendChild(pageLink);
      pageLink.setAttribute('class','pagination');
      pageLink.innerHTML = '<a href = #>Page ' + (i/10 + 1) + '</a>';
      pageLink.addEventListener('click',function(){
         showPage(i,(i+9))}, false); 
   };
};

appendPageLinks();

//ACTIVE CLASS APPLIED TO FIRST PAGE BUTTON WHEN PAGE IS INITIALLY LOADED
const pageLinks = document.querySelectorAll('.pagination li') ;
for (let i=0;i<1;i+=1) {pageLinks[i].firstElementChild.setAttribute('class','active')};

//CHANGES THE POSITION OF THE ACTIVE CLASS TO THE BUTTON OF THE PAGE USER IS CURRENTLY ON WHEN CLICKED
function activeClass() {
   let activeLink = document.querySelector('.active');
   activeLink.removeAttribute('class');
   event.target.setAttribute('class','active');
};
for (let i=0;i<pageLinks.length;i+=1) {pageLinks[i].addEventListener('click',function(){activeClass(),false})};