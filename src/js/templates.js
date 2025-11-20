import { projects } from "./data.js";
const templateProject=document.querySelector('[data-template="project-card"]');
const projectsUl=document.querySelector('#projects')

projects.forEach(project=>{
   const card= templateProject.content.cloneNode(true)
   const image=card.querySelector('img');
   const title=card.querySelector('h4');
   const description=card.querySelectorAll('p')[0];
   const tech=card.querySelectorAll('p')[1];
   const link=card.querySelector('a');

   image.src=project.img.src;
   image.alt=project.img.alt;

   title.textContent=project.title;

   description.textContent=project.description;


   tech.insertAdjacentHTML('beforeend',project.tech)

   link.href=project.link;
   console.log(tech)

        projectsUl.appendChild(card)
   });