const operations=["--X","X++","X++"] ; 
// const operations=["++X","++X","X++"]  ;
// const operations=["X++","++X","--X","X--"] ;
    let x=0;
    for(let i=0; i<operations.length;i++){
        if(operations[i]==="--X"){
    --x
        }
           else if(operations[i]==="X--"){
    x--
    
        }
        else if(operations[i]==="X++"){
    x++
    
        }
          else if(operations[i]==="++X"){
    ++x
    
        }
    }
   console.log(x)
    
    
 
    
    