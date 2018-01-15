 
         //la date qu'on souhaite obtenue

 var voulu=new Date(2018,01,05,16,25,00);
 var marche=false;
function condition(){

    var now=new Date();
                   //la date actuelle
    var diff=Math.floor(voulu.getTime()-now.getTime());
                  //la difference entre la date actuelle et la date voulue
                  //divisé sur 1000 pr avoir de seconde et en récuper le plus grand entier inferieure à
    if (marche==true){
        if(diff>0){   //si la date est dépasser
                      // var days=Math.floor(diff/86400);
                      // var hours=Math.floor(diff/3600)%24; // 1j 24*60min*60sec
                      // var minuts=Math.floor(diff/60)%60;
                      // var seconds=Math.floor(diff%60);
        var days = Math.floor(diff /( 1000* 60 *60* 24));
        var hours = Math.floor((diff %(1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minuts = Math.floor((diff %(1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor(diff %(1000 * 60) / 1000);
        
      
                      //affichage:en recuper le span(#d)de html ds le quel en va insererla variable days le+"d" pr la mise en page 
          $("#d").html(days+"d"); 
          $("#h").html(hours+"h");
          $("#min").html(minuts+"min");
          $("#s").html(seconds+"s");

        }else{
              $("#countdown").html("date dépassée ..!");
                        //récupere le div ds le quel en va écrire la phrase
         }
      
    }
  }



function timer(){
  if(marche==true){
    marche=false
    }else{ marche=true;
  }
}




$("#btn").on('click',function(){
  timer();

  });







$(document).ready(function(){
   window.setInterval(condition,1000);  //la function countdown va se repeter ttes les seconde
   // diff();                          //apres telechargement


});
















