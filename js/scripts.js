let span = document.querySelector('.conteudo-single span');
span.addEventListener('click',()=>{

   let conteudo = document.querySelector('.conteudo-single p');

   if(conteudo.classList.contains('mostrar')){
       
       span.innerHTML = 'Ver mais...';
       conteudo.classList.remove('mostrar');

   }else{
       
       span.innerHTML = 'Ocultar...';
       conteudo.classList.add('mostrar');
       
   }
})