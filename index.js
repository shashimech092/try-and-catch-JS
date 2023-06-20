
        function myfunction(){
         let x=document.getElementById('demo').value
         const show = document.getElementById('display')
         try{
             if(x.trim()=='') throw 'empty'
             if(isNaN(x)) throw 'not a number'
             x=Number(x);
             if(x<5) throw 'too low'
             if(x>10) throw 'too high'
         }
         catch(err){
             show.innerHTML='Input is '+ err
         }
         finally {
             document.getElementById("demo").value = "";
        }
        } 
