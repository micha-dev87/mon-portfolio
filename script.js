const personalProjects=[
 {title:'MindBox — journal personnel',context:'Projet personnel',summary:'Application Express avec inscription, connexion et espace de journal protégé par authentification.',detail:'Rôle : routes, vues Pug, modèles MongoDB et protections HTTP. Syntaxe Node vérifiée; le parcours complet nécessite MongoDB et aucun test automatisé n’a été identifié.',tags:['Node.js','Express','MongoDB','Pug'],url:'https://github.com/micha-dev87/journal-express-js',status:'Syntaxe vérifiée'},
 {title:'Application mobile de gestion d’utilisateurs',context:'Projet de formation',summary:'Application Expo avec liste, ajout, suppression et fiche détaillée d’utilisateurs, navigation par onglets et sélection de photo.',detail:'Rôle : écrans React Native, état local, formulaire et navigation. Limites : installation non validée dans l’audit; la gestion des données sensibles doit être corrigée avant toute démonstration.',tags:['TypeScript','React Native','Expo'],url:'https://github.com/micha-dev87/Application-expo-gestion-des-utilisateurs',status:'Code inspecté · test bloqué'},
 {title:'Gestion automobile ASP.NET Core',context:'Projet de formation',summary:'Deux implémentations d’une application de gestion automobile permettent de comparer les approches MVC et Razor Pages.',detail:'Rôle : modèles de données, opérations CRUD, authentification et accès relationnel. Limite vérifiée : la solution ne compile pas actuellement à cause de références et namespaces incohérents dans Razor Pages.',tags:['C#','ASP.NET Core','Entity Framework Core','SQL'],url:'https://github.com/micha-dev87/ASP-NET-CORE-MVC',status:'Build à corriger'}
];

const companyProjects=[
 {title:'AI Pitch V2 — production assistée de présentations',context:'Projet réalisé en entreprise · HIT FILM inc.',summary:'Application Web qui transforme un brief et des ressources de marque en présentations structurées, avec étapes de révision et d’export.',detail:'Contribution : évolution des interfaces, intégrations d’API et de Google Workspace, automatisations n8n, gestion de contenus et validation des parcours Alpha, Beta et production. Le code, les données client et les accès ne sont pas publics.',tags:['JavaScript','HTML / CSS','n8n','API','Google Workspace','Playwright'],status:'Projet confidentiel · aucun lien public'}
];

function renderProjects(projects,selector,prefix){
 const list=document.querySelector(selector);
 projects.forEach((project,index)=>{
  const article=document.createElement('article');
  article.className='project';
  const link=project.url?`<a href="${project.url}">Voir le code ↗</a>`:'';
  article.innerHTML=`<div class="project-number">${prefix}${index+1}</div><div><p class="status">${project.context}</p><h3>${project.title}</h3><p class="summary">${project.summary}</p><p class="detail">${project.detail}</p><ul class="tags">${project.tags.map(tag=>`<li>${tag}</li>`).join('')}</ul></div><div class="project-links">${link}<span class="status">${project.status}</span></div>`;
  list.appendChild(article);
 });
}

renderProjects(personalProjects,'#personal-project-list','P');
renderProjects(companyProjects,'#company-project-list','E');

const button=document.querySelector('.menu-button');
const nav=document.querySelector('#navigation');
button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')==='true';button.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});
nav.addEventListener('click',()=>{button.setAttribute('aria-expanded','false');nav.classList.remove('open')});
document.querySelector('#year').textContent=new Date().getFullYear();
