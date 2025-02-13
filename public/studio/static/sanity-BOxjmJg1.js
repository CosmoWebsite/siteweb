import{defineConfig as e,renderStudio as t}from"sanity";import{structureTool as i}from"sanity/structure";import{visionTool as n}from"@sanity/vision";const o={name:"schedule",type:"document",title:"Horaires",fields:[{name:"times",type:"array",title:"Horaires",of:[{type:"object",fields:[{name:"fieldFr1",type:"string",title:"Jours"},{name:"fieldFr2",type:"string",title:"Heures"},{name:"fieldEn1",type:"string",title:"Days"},{name:"fieldEn2",type:"string",title:"Hours"}]}]}]},r={name:"menu",type:"document",title:"Menu PDF",fields:[{name:"title",type:"string",title:"Titre du menu"},{name:"file",type:"file",title:"Fichier PDF",options:{accept:"application/pdf"}}]},s={name:"phone",type:"document",title:"Numéro de téléphone",fields:[{name:"number",type:"string",title:"Numéro de téléphone",description:"Format recommandé : 01 42 94 83 41"}]},m=[r,s,o],l=e({name:"default",title:"Cosmo",projectId:"mvxws3ry",dataset:"production",plugins:[i(),n()],schema:{types:m}});t(document.getElementById("sanity"),l,{reactStrictMode:!1,basePath:"/"});
