//Menu

function abreMenu() 
{
  document.getElementById("menu-lateral").style.width = "25%";
  document.getElementById("botao-hamburg-abre").style.display="none";
  document.getElementById("botao-hamburg-fecha").style.display="block"; 
}

function fechaMenu()
{
  document.getElementById("menu-lateral").style.width = "0%";
  document.getElementById("botao-hamburg-abre").style.display="block";
  document.getElementById("botao-hamburg-fecha").style.display="none";
}


//Carrossel
            var contador = 1;
            var img1="imagens/c1.jpg";
            var img2="imagens/c2.jpg";
            var img3="imagens/c3.jpg";
            var tempo=2500;
            var exibir=setInterval("Exibindo()",tempo);
              
            function Exibindo()
            {
                  document.images["slide"].src=eval("img"+contador);
                
                if (contador==1)
                {
                    document.getElementById("titulocarrossel").innerHTML = "Moletons";
                }
                else if (contador==2)
                {
                    document.getElementById("titulocarrossel").innerHTML = "Joias";
                }
                else
                {
                    document.getElementById("titulocarrossel").innerHTML = "Bags";
                }
                                  
                if (contador<3)
                    contador++;
                else
                    contador=1;
            } 
              
            function Anterior()
            {
                clearInterval(exibir);
                
                if (contador == 2)
                    contador = 3;
                else if (contador == 3)
                    contador = 1;
                else
                    contador = 2;
                
                
                document.images["slide"].src=eval("img"+contador);
                
                if (contador==1)
                {
                    document.getElementById("titulocarrossel").innerHTML = "Moletons";
                }
                else if (contador==2)
                {
                    document.getElementById("titulocarrossel").innerHTML = "Joias";
                }
                else
                {
                    document.getElementById("titulocarrossel").innerHTML = "Bags";
                }
        
                if (contador<3)
                    contador++;
                else
                    contador=1;
                        
                exibir=setInterval("Exibindo()",tempo);
            }
             
             function Proximo()
            {
                clearInterval(exibir); 
                document.images["slide"].src=eval("img"+contador);
        
                if (contador==1)
                {
                    document.getElementById("titulocarrossel").innerHTML = "Moletons";
                }
                else if (contador==2)
                {
                    document.getElementById("titulocarrossel").innerHTML = "Joias";
                }
                else
                {
                    document.getElementById("titulocarrossel").innerHTML = "Bags";
                }
        
                if (contador<3)
                    contador++;
                else
                    contador=1;
                    
                exibir=setInterval("Exibindo()",tempo);
            }
