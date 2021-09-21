//Defineing global variables

const sections = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();
const navbar = document.getElementById('navbar__list');


//using for each loop to create list,anchor and text node for every section
sections.forEach((section)=> {
 //define list,anchor,data nav and text node variables for every section
    const datanav_section = section.getAttribute('data-nav');
    const order = document.createElement('li');
    const link = document.createElement('a');
    //Extracting the data-nav value from the section and store it in variable
    const textNode = document.createTextNode(datanav_section);
// add event lister to the list we just created
    link.addEventListener('click' ,()=>{
        section.scrollIntoView({'behavior':'smooth'})
    })
    //adding our text node inside the anchor
    link.appendChild(textNode);
    
    order.appendChild(link);
 //adding everything inside the fragment
    fragment.appendChild(order);


});
//adding the fragment inside our list
navbar.appendChild(fragment);
const allLinks = document.querySelectorAll('a');
//adding class name for all anchors to apply css
allLinks.forEach( menu =>{
    menu.classList.add('menu__link');
})

document.addEventListener('scroll', ()=>{
    const activeSection = document.getElementsByClassName('your-active-class');
    
    
    sections.forEach((sect)=>{
        //set our dimensions to add active class to the sections we're viewing
        const reaction = sect.getBoundingClientRect();
        if (reaction.top >= -100 && reaction.top <=200){
            allLinks.forEach((remover)=>{
                //remove class from non-active link
                remover.classList.remove('navactiv');
                
            });
              
            
            sections.forEach( (remClass)=>{
                //remove class from non-active section
                remClass.classList.remove('your-active-class');
                
            });
            
            //add active class to current active section
            sect.classList.add('your-active-class');
            allLinks.forEach(linko =>{
                if(sect.getAttribute('data-nav') == linko.textContent){
                           
                           //add active class to current active link
                    linko.classList.add('navactiv');
                    
                }
            })
            
        }

        
        
        
    })
    
    
    
});


