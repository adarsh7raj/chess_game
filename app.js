

const chessboard = document.getElementById("chessboard");
const playerturn=document.getElementById("turn");


playerturn.innerHTML="white's";
//selectpiece.innerHTML="select piece";

const rook_b = '<img class="pieces" id="rook_b" src="pieces_images/Chess_rdt60.png">';
const rook_w = '<img class="pieces" id="rook_w" src="pieces_images/Chess_rlt60.png">';
const knight_w = '<img class="pieces" id="knight_w" src="pieces_images/Chess_nlt60.png">';
const knight_b = '<img class="pieces" id="knight_b" src="pieces_images/Chess_ndt60.png">';
const bishop_b = '<img class="pieces" id="bishop_b" src="pieces_images/Chess_bdt60.png">';
const bishop_w = '<img class="pieces" id="bishop_w" src="pieces_images/Chess_blt60.png">';

const queen_b = '<img class="pieces" id="queen_b" src="pieces_images/Chess_qdt60.png">';
const queen_w = '<img class="pieces" id="queen_w" src="pieces_images/Chess_qlt60.png">';
const king_w = '<img class="pieces" id="king_w" src="pieces_images/Chess_klt60.png">';
const king_b = '<img class="pieces" id="king_b" src="pieces_images/Chess_kdt60.png">';
const pawn_b = '<img class="pieces" id="pawn_b" src="pieces_images/Chess_pdt60.png">';
const pawn_w = '<img class="pieces" id="pawn_w" src="pieces_images/Chess_plt60.png">';

const pieces = [

  rook_w,  knight_w,bishop_w , queen_w,king_w, bishop_w, knight_w, rook_w,
  
  pawn_w, pawn_w, pawn_w, pawn_w, pawn_w, pawn_w, pawn_w, pawn_w,
 
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  pawn_b, pawn_b, pawn_b, pawn_b, pawn_b, pawn_b, pawn_b, pawn_b, 
  rook_b,  knight_b,bishop_b, queen_b, king_b, bishop_b, knight_b, rook_b,
  
];
// ... (your piece and chessboard setup code) ...
// ... (your piece and chessboard setup code) ...

let selectedPiece = null;
let removecolor=null;
let checker=false;
let pawn=false;
let clickedSquare;
let targetPiece=null;
let playerselector;
let contains;
let clickedsquare;
let clickedPiece;
 let specificid1;
 let specificid2;
 let rook=false;
 let targetelement;
 let id;
 let targetpiece;
 let bishop=false;
 let knight=false;
 let queen=false;
 let king=false;
 let pieceselector;
 let balck=true;
 let white=true;
 let arr=["d"];
 let correct=false;
 let diff_r;
 let diff_q;
 let concatinated;
 let concatinated_n;
 let corrector=false;
 let correctelement;
 let clickedline1;
 let clickedline2;
 let playerselectors;
 let chosenpiece;
 let selectedImageSrc;
 let data;
 let color;
 let new_window;
 let newwindowdata;
 let  newWindowDocument;
pieces.forEach((pieceHTML, i) => {
  const square = document.createElement("div");
  square.classList.add("square");
  square.setAttribute("square_id", i);
  //  should create a another attribute to check for the current line.
  square.setAttribute("correctline",Math.floor(i/8));
//square.setAttribute("currentline","a");
  // Calculate the row and column based on the index.
  const row = Math.floor(i / 8);
  const column = i % 8;

  if ((row + column) % 2 === 0) {
    square.classList.add("green");
  } else {
    square.classList.add("white");
  }

  square.innerHTML = pieceHTML;
  chessboard.appendChild(square);
});

// Set up event listeners after creating all the squares
const square_arr = document.querySelectorAll(".square");
square_arr.forEach((element) => {
  element.addEventListener("click", handleSquareClick);
});

function handleSquareClick(event) {
    
    clickedSquare = event.currentTarget;
    targetelement=event.target;
  //  console.log(targetelement);  
   
//console.log(pieces);
  if (selectedPiece) {
     targetPiece = clickedSquare.querySelector(".pieces");
    specificid2=Number(clickedSquare.getAttribute("square_id"));
    clickedline2=Number(clickedSquare.getAttribute("correctline"));
    
    function appender() {
      if (selectedPiece && clickedSquare) {
        clickedSquare.appendChild(selectedPiece);
        if (removecolor) {
          removecolor.classList.remove("highlighted");
        }
      }
    }
    
    function playerselector(){
        
        contains=selectedPiece.classList.contains("highlighted");
    
        //console.log(playerselector);
      if(!contains){
          playerselector=selectedPiece.getAttribute("src");
          if(playerselector.includes("d")){
     playerturn.innerHTML="white's";
    
     revertid();
          }
          if(playerselector.includes("l")){
              playerturn.innerHTML="black's";
              
              reverseid();
          }
      }
      selectedPiece=null;
    }
         function choosepiece(){
          playerselectors = clickedPiece.getAttribute("src");
  if (playerselectors.includes("d")) {
    color = "black.html";
    new_window = window.open(color, "_blank");

    // Wait for the popup window's content to load
    new_window.addEventListener("DOMContentLoaded", function() {
      // Add event listeners to the images here
      console.log("hi_hello");
      const popupDocument = new_window.document;

      popupDocument.addEventListener("click", function(e) {
        console.log("Popup Window Clicked");
        if (e.target.tagName === "IMG") {
          console.log("Image Clicked");
          const selectedImageSrc = e.target.getAttribute('src');
          const data = e.target;
          console.log(data);

          // Close the popup and append the image to the main page
          new_window.close();
          clickedSquare.appendChild(data);
        }
      });
    });
  }
  playerselectors = clickedPiece.getAttribute("src");
  if (playerselectors.includes("l")) {
    color = "white.html";
    new_window = window.open(color, "_blank");

    // Wait for the popup window's content to load
    new_window.addEventListener("DOMContentLoaded", function() {
      // Add event listeners to the images here
      console.log("hi_hello");
      const popupDocument = new_window.document;

      popupDocument.addEventListener("click", function(e) {
        console.log("Popup Window Clicked");
        if (e.target.tagName === "IMG") {
          console.log("Image Clicked");
          const selectedImageSrc = e.target.getAttribute('src');
          const data = e.target;
          console.log(data);

          // Close the popup and append the image to the main page
          new_window.close();
          clickedSquare.appendChild(data);
        }
      });
    });
  }
         }

      //    popup.addEventListener('click', function(event) {
      //     if (event.target.tagName === 'IMG') {
      //         const selectedImageSrc = event.target.getAttribute('src');
      //         console.log('Selected Image Source:', selectedImageSrc);
      //         popup.close(); // Close the popup window
      //     }
      // });
      

        for(var i=arr.length-1;i<arr.length;i++){
            if(arr[i]!==arr[i-1]){
                correct=true;
          
            }
    
            else{
                correct=false;
                removecolor.classList.remove("highlighted");
            }
        }
       
    
   function targetpiece(){
  
    if(targetPiece){
        
              pieceselector=targetPiece.getAttribute("src");
          
              if(correct){
                //console.log(concatinated_n);
              if(pieceselector.includes("d")&&id.includes("l")){
                clickedSquare.removeChild(targetPiece);
                removecolor.classList.remove("highlighted");
                clickedSquare.classList.remove("highlighted");
                checker=true;
               // first selection of speicfic id2 then after that revesrsing function is called.
                appender();
                playerselector();
               
                
              }
              }
              if(correct){
        if(pieceselector.includes("l")&&id.includes("d")){
            console.log("hello");
            clickedSquare.removeChild(targetPiece);
          
            checker=true;
        
            appender();
            playerselector();
        }
        
         }


         } 
   }
  if(targetPiece){
   if(correct){
if(concatinated_n===targetPiece.getAttribute("src").slice(21,22)){
  //console.log("ok");
    arr.pop(); // used to remove the last element of array.
clickedsquare.classList.remove("highlighted");

}

   }
  }
    if(rook){
        if(correct){// not work for diff_r<=6,7
          rook=false;
        diff_r=Math.abs(specificid2-specificid1);
     if(diff_r%8===0){//  should not work for diff_r=7;
if(diff_r!==7){   //document.findElementByAttribute("myAttribute", "aValue");


  if (specificid2 - specificid1 > 0) {
    for (var i = specificid1 + 8; i <= specificid2; i += 8) {
         correctelement = document.querySelector(`[square_id="${i}"]`);
        if (correctelement.hasChildNodes()) { 
           // corrector = true;

            if(specificid2<i){
              appender();
              playerselector();
            }
            if (i === specificid2) {
                targetpiece();
            }
            break;
        }
    }
    if (!correctelement.hasChildNodes()) {
        appender();
        playerselector();
        //corrector=false;
    }
}

if(specificid2-specificid1<0){
 //console.log("hi i am under the water please help uuuu");
  for(var j=specificid1-8;j>=specificid2;j-=8){
     correctelement = document.querySelector(`[square_id="${j}"]`); 
 
 
 
  if(correctelement.hasChildNodes()){
     //corrector=true;


     if(specificid2>i){
      appender();
      playerselector();
    }
   if(j===specificid2){
    targetpiece();
  }
  break;
  }
  }
     
if(!correctelement.hasChildNodes()){
  appender();
  playerselector();
  //corrector=false;
}
  



}
            }


}


if(diff_r<=8){// it creates aproblem when diff_r=6 it can move to in other column.
  if(diff_r!==7){  // it also moves for diff_r=6 for next row.
if(clickedline1===clickedline2){
//console.log("enters here");
    if (specificid2 - specificid1 > 0) {
      for (var k = specificid1 + 1; k <= specificid2; k++) {
           correctelement = document.querySelector(`[square_id="${k}"]`);
          if (correctelement.hasChildNodes()) { 
             // corrector = true;
  
              if(specificid2<k){
                appender();
                playerselector();
              }
              if (k === specificid2) {
                  targetpiece();
              }
              break;
          }
      }
      if (!correctelement.hasChildNodes()) {
          appender();
          playerselector();
          //corrector=false;
      }
  }
  
  if(specificid2-specificid1<0){
  
    for(var l=specificid1-1;l>=specificid2;l--){
       correctelement = document.querySelector(`[square_id="${l}"]`); //new method to append something dynamically.
   
   
   
    if(correctelement.hasChildNodes()){
       //corrector=true;
       if(specificid2>l){
        appender();
        playerselector();
      }
     if(l===specificid2){
      targetpiece();
    }
    break;
    }
    }
       
  if(!correctelement.hasChildNodes()){
    appender();
    playerselector();
    //corrector=false;
  }
    
  
  
  
  }
              }

            }
}

 }
   }
   if(bishop){
    if(correct){
      bishop=false;
const diff_b=Math.abs(specificid2-specificid1);

    if(diff_b%7===0){

///console.log("ready");


if (specificid2 - specificid1 > 0) {
  for (var k = specificid1 + 7; k <= specificid2; k+=7) {
       correctelement = document.querySelector(`[square_id="${k}"]`);
      if (correctelement.hasChildNodes()) { 
         // corrector = true;

          if(specificid2<k){
            appender();
            playerselector();
          }
          if (k === specificid2) {
              targetpiece();
          }
          break;
      }
  }
  if (!correctelement.hasChildNodes()) {
      appender();
      playerselector();
      //corrector=false;
  }
}
if(specificid2-specificid1<0){
  
   for(var j=specificid1-7;j>=specificid2;j-=7){
      correctelement = document.querySelector(`[square_id="${j}"]`); 
  
  
  
   if(correctelement.hasChildNodes()){
      //corrector=true;
 
 
      if(specificid2>j){
       appender();
       playerselector();
     }
    if(j===specificid2){
     targetpiece();
   }
   break;
   }
   }
      
 if(!correctelement.hasChildNodes()){
   appender();
   playerselector();
   //corrector=false;
 }
   
 
 
 
 }
 

}
     if(diff_b%9===0){

      
if (specificid2 - specificid1 > 0) {
  for (var k = specificid1 + 9; k <= specificid2; k+=9) {
       correctelement = document.querySelector(`[square_id="${k}"]`);
      if (correctelement.hasChildNodes()) { 
         // corrector = true;

          if(specificid2<k){
            appender();
            playerselector();
          }
          if (k === specificid2) {
              targetpiece();
          }
          break;
      }
  }
  if (!correctelement.hasChildNodes()) {
      appender();
      playerselector();
      //corrector=false;
  }
}

       if(specificid2-specificid1<0){
  
        for(var l=specificid1-9;l>=specificid2;l-=9){
           correctelement = document.querySelector(`[square_id="${l}"]`); //new method to append something dynamically.
       
       
       
        if(correctelement.hasChildNodes()){
           //corrector=true;
           if(specificid2>l){
            appender();
            playerselector();
          }
         if(l===specificid2){
          targetpiece();
        }
        break;
        }
        }
           
      if(!correctelement.hasChildNodes()){
        appender();
        playerselector();
        //corrector=false;
      }
        
      
      
      
      }


     }  
          
        }
    }
}

if(knight){
  if(correct){
    knight=false;
const diff_n=Math.abs(specificid2-specificid1);
console.log(specificid1);
console.log(specificid2);
//console.log(diff_b);
  if(diff_n===15||diff_n===17||diff_n===10||diff_n===6){

      if(targetPiece){
          targetpiece();
      
          
      }
      else{
      appender();
      playerselector();
          
            
          }
        
      }
  }
}
if(queen){
  if(correct){
    queen=false;

     diff_q=Math.abs(specificid2-specificid1);
    if(diff_q%8===0){
  //document.findElementByAttribute("myAttribute", "aValue");

console.log("entry1");
  if (specificid2 - specificid1 > 0) {
    for (var i = specificid1 + 8; i <= specificid2; i += 8) {
         correctelement = document.querySelector(`[square_id="${i}"]`);
        if (correctelement.hasChildNodes()) { 
           

            if(specificid2<i){
              appender();
              playerselector();
            }
            if (i === specificid2) {
                targetpiece();
            }
            break;
        }
    }
    if (!correctelement.hasChildNodes()) {
        appender();
        playerselector();
        
    }
}

if(specificid2-specificid1<0){
 
  for(var j=specificid1-8;j>=specificid2;j-=8){
     correctelement = document.querySelector(`[square_id="${j}"]`); 
 
 
 
  if(correctelement.hasChildNodes()){
     //corrector=true;


     if(specificid2>j){
      appender();
      playerselector(); 
    }
   if(j===specificid2){
    targetpiece();
  }
  break;
  }
  }
     
if(!correctelement.hasChildNodes()){
  appender();
  playerselector();
  //corrector=false;
}
}

 } 
if(diff_q<=8){
  
console.log("entry2");
if(clickedline1===clickedline2){
    if (specificid2 - specificid1 > 0) {
      for (var k = specificid1 + 1; k <= specificid2; k++) {
           correctelement = document.querySelector(`[square_id="${k}"]`);
          if (correctelement.hasChildNodes()) { 
             // corrector = true;
  
              if(specificid2<k){
                appender();
                playerselector();
              }
              if (k === specificid2) {
                  targetpiece();
              }
              break;
          }
      }
      if (!correctelement.hasChildNodes()) {
          appender();
          playerselector();
          //corrector=false;
      }
  }
  
  if(specificid2-specificid1<0){
  
    for(var l=specificid1-1;l>=specificid2;l--){
       correctelement = document.querySelector(`[square_id="${l}"]`); //new method to append something dynamically.
   
   
   
    if(correctelement.hasChildNodes()){
       //corrector=true;
       if(specificid2>l){
        appender();
        playerselector();
      }
     if(l===specificid2){
      targetpiece();
    }
    break;
    }
    }
       
  if(!correctelement.hasChildNodes()){
    appender();
    playerselector();
    //corrector=false;
  }
    
  }
}         
}
if(diff_q%7===0){

 // console.log("ready");
  
  
  if (specificid2 - specificid1 > 0) {
    for (var k = specificid1 + 7; k <= specificid2; k+=7) {
         correctelement = document.querySelector(`[square_id="${k}"]`);
        if (correctelement.hasChildNodes()) { 
           // corrector = true;
  
            if(specificid2<k){
              appender();
              playerselector();
            }
            if (k === specificid2) {
                targetpiece();
            }
            break;
        }
    }
    if (!correctelement.hasChildNodes()) {
        appender();
        playerselector();
        //corrector=false;
    }
  }
  if(specificid2-specificid1<0){
    
     for(var j=specificid1-7;j>=specificid2;j-=7){
        correctelement = document.querySelector(`[square_id="${j}"]`); 
    
    
    
     if(correctelement.hasChildNodes()){
        //corrector=true;
   
   
        if(specificid2>j){
         appender();
         playerselector();
       }
      if(j===specificid2){
       targetpiece();
     }
     break;
     }
     }
        
   if(!correctelement.hasChildNodes()){
     appender();
     playerselector();
     //corrector=false;
   }
     
   
   
   
   }
   
  
  }
       if(diff_q%9===0){
  
        
  if (specificid2 - specificid1 > 0) {
    for (var k = specificid1 + 9; k <= specificid2; k+=9) {
         correctelement = document.querySelector(`[square_id="${k}"]`);
        if (correctelement.hasChildNodes()) { 
           // corrector = true;
  
            if(specificid2<k){
              appender();
              playerselector();
            }
            if (k === specificid2) {
                targetpiece();
            }
            break;
        }
    }
    if (!correctelement.hasChildNodes()) {
        appender();
        playerselector();
        //corrector=false;
    }
  }
  
         if(specificid2-specificid1<0){
    
          for(var l=specificid1-9;l>=specificid2;l-=9){
             correctelement = document.querySelector(`[square_id="${l}"]`); //new method to append something dynamically.
         
         
         
          if(correctelement.hasChildNodes()){
             //corrector=true;
             if(specificid2>l){
              appender();
              playerselector();
            }
           if(l===specificid2){
            targetpiece();
          }
          break;
          }
          }
             
        if(!correctelement.hasChildNodes()){
          appender();
          playerselector();
          //corrector=false;
        }
          
        
        
        
        }
  
  
       }  
  }
}

   if(king){

    if(correct){
      king=false;
      const diff_k=Math.abs(specificid2-specificid1);
      
      
        if(diff_k===1||diff_k===7||diff_k===8||diff_k===9){
      
            if(targetPiece){
                targetpiece();
            
                
            }
            else{
            appender();
            playerselector();
                
                  
                }
              
            }

    }
   }
   if(pawn){
    if(correct){
      pawn=false;
            
    
                    
        if(targetPiece){
        if(specificid2===specificid1+9||specificid2===specificid1+7){

            targetpiece();
            //console.log(clickedSquare);
        }
        if(specificid1>=48&&specificid1<=55){
          
          clickedSquare.removeChild(clickedPiece);
        
          choosepiece();
          

        
        }
        }
        else{
             if(specificid1>=8 && specificid1<=15){
        
            if(specificid2===specificid1+16){
 
                 appender();
                 playerselector();
          
            }
        }
    if(specificid2===specificid1+8){
        // If there's a target piece, remove it from the square
        
    appender();
  
    if(specificid2>=56&&specificid2<=63){
      console.log(clickedSquare);
      clickedSquare.removeChild(selectedPiece);
      choosepiece();
    
    
 
    
    }
    playerselector();
        pawn=false;
      }
    }

}
}

}


square_arr.forEach((element) => {
  element.addEventListener("click", handlePieceClick);
});

function handlePieceClick(event) {
    if(!checker) { 
         clickedPiece = event.target;

         clickedsquare=event.currentTarget;
        if (clickedPiece.classList.contains("pieces")) {
              id=clickedPiece.getAttribute("src");
           // console.log(id);
             concatinated=id.slice(20,23);
           // console.log(concatinated);
             specificid1=clickedsquare.getAttribute("square_id");
            

             
       if(concatinated.includes("r")){

         concatinated_n=id.slice(21,22);
        arr.push(concatinated_n);
        //console.log(concatinated);
rook=true;
        specificid1=Number(clickedsquare.getAttribute("square_id"));
        clickedline1=Number(clickedsquare.getAttribute("correctline")); 
  if (selectedPiece) {
    clickedsquare.classList.remove("highlighted");
  }

  clickedsquare.classList.add("highlighted");
  selectedPiece = clickedPiece;
  removecolor=clickedsquare;
  
 


       }

         if(concatinated.includes("b")){
         concatinated_n=id.slice(21,22);
        arr.push(concatinated_n);
        bishop=true;
      //  console.log(concatinated);
        specificid1=Number(clickedsquare.getAttribute("square_id"));
                // console.log(specificid1);
          if (selectedPiece) {
            clickedsquare.classList.remove("highlighted");
          }
      
          clickedsquare.classList.add("highlighted");
          selectedPiece = clickedPiece;
          removecolor=clickedsquare;
          
       }

       if(concatinated.includes("n")){
        concatinated_n=id.slice(21,22);
       arr.push(concatinated_n);
       knight=true;
     //  console.log(concatinated);



       specificid1=Number(clickedsquare.getAttribute("square_id"));
      //  clickedline1=Number(clickedsquare.getAttribute("correctline"));        
       
       // console.log(specificid1);


         if (selectedPiece) {
           clickedsquare.classList.remove("highlighted");
         }
     
         clickedsquare.classList.add("highlighted");
         selectedPiece = clickedPiece;
         removecolor=clickedsquare;
         
      }


      if(concatinated.includes("q")){
        concatinated_n=id.slice(21,22);
       arr.push(concatinated_n);
       queen=true;
     //  console.log(concatinated);
       specificid1=Number(clickedsquare.getAttribute("square_id"));
       clickedline1=Number(clickedsquare.getAttribute("correctline")); 
         if (selectedPiece) {
           clickedsquare.classList.remove("highlighted");
         }
     
         clickedsquare.classList.add("highlighted");
         selectedPiece = clickedPiece;
         removecolor=clickedsquare;
         
      }
      
      if(concatinated.includes("k")){
        concatinated_n=id.slice(21,22);
       arr.push(concatinated_n);
       king=true;
     //  console.log(concatinated);
       specificid1=Number(clickedsquare.getAttribute("square_id"));
               // console.log(specificid1);
         if (selectedPiece) {
           clickedsquare.classList.remove("highlighted");
         }
     
         clickedsquare.classList.add("highlighted");
         selectedPiece = clickedPiece;
         removecolor=clickedsquare;
         
      }


           if(concatinated.includes("p")){
                 concatinated_n=id.slice(21,22);   
                // console.log(concatinated_n);
                arr.push(concatinated_n);
pawn=true; //console.log(concatinated);
                 specificid1=Number(clickedsquare.getAttribute("square_id"));
                // console.log(specificid1);
          if (selectedPiece) {
            clickedsquare.classList.remove("highlighted");
          }
      
          clickedsquare.classList.add("highlighted");
          selectedPiece = clickedPiece;
          removecolor=clickedsquare;
          
     } }}
    checker=false;

    }
function reverseid(){
    square_arr.forEach((element,i)=>{

        const newvalue=63-i;
        element.setAttribute("square_id",newvalue);
    });
}
function revertid(){
    square_arr.forEach((element,i)=>{
        element.setAttribute("square_id",i);
    });
  }
