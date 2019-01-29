window.onload = function(){ 

// ----------------------------------------------------------
function cageChar(){
  let chars = ["A", "B", "C", "D", "E", "F", "G", "H"];
  let char = document.getElementsByClassName('cage-char')[0];
  for (var i = 0; i < chars.length; i++){
      char.insertAdjacentHTML('beforeBegin', "<div class='cage-char'>" + chars[i] + "</div>" );
  }
}

function cageNumber(){
  let numbers = [8, 7, 6, 5, 4, 3, 2, 1];
  let number = document.getElementsByClassName('cage-number')[0];
  for (var i = 0; i < 8; i++){
    number.insertAdjacentHTML('beforeBegin', "<div class='cage-number'>" + numbers[i] + "</div>" );
  }
}
  
cageChar();
cageNumber();
// ----------------------------------------------------------


var elems = document.getElementsByClassName('cages');

function addClassLight(i){ elems[i].classList.add('cage-light') };
function addClassDark(i) { elems[i].classList.add('cage-dark')  };

for (var i=0; i < 64; i++){
    if (i % 2 == 0){
      }else if (i <  8){ addClassDark(i);
      }else if (i < 16){ addClassLight(i);
      }else if (i < 24){ addClassDark(i);
      }else if (i < 32){ addClassLight(i);
      }else if (i < 40){ addClassDark(i);
      }else if (i < 48){ addClassLight(i);
      }else if (i < 56){ addClassDark(i);
      }else if (i < 64){ addClassLight(i);
    }
    if (i % 2 != 0){
      }else if (i <  8){ addClassLight(i);
      }else if (i < 16){ addClassDark(i);
      }else if (i < 24){ addClassLight(i);
      }else if (i < 32){ addClassDark(i);
      }else if (i < 40){ addClassLight(i);
      }else if (i < 48){ addClassDark(i);
      }else if (i < 56){ addClassLight(i);
      }else if (i < 64){ addClassDark(i);
    }
  }
};
