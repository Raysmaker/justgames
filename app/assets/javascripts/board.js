var elems = document.getElementsByClassName('cages');

function addClassLight(i){ elems[i].classList.add('cage-light') };
function addClassDark(i) { elems[i].classList.add('cage-dark')  };

window.onload = function(){
  for (let i=0; i < 64; i++){

    if (i % 2 == 0){
      }else if (i >=  0 && i <  8){ addClassDark(i);
      }else if (i >=  8 && i < 16){ addClassLight(i);
      }else if (i >= 16 && i < 24){ addClassDark(i);
      }else if (i >= 24 && i < 32){ addClassLight(i);
      }else if (i >= 32 && i < 40){ addClassDark(i);
      }else if (i >= 40 && i < 48){ addClassLight(i);
      }else if (i >= 48 && i < 56){ addClassDark(i);
      }else if (i >= 56 && i < 64){ addClassLight(i);
    }
    if (i % 2 != 0){
      }else if (i >=  0 && i <  8){ addClassLight(i);
      }else if (i >=  8 && i < 16){ addClassDark(i);
      }else if (i >= 16 && i < 24){ addClassLight(i);
      }else if (i >= 24 && i < 32){ addClassDark(i);
      }else if (i >= 32 && i < 40){ addClassLight(i);
      }else if (i >= 40 && i < 48){ addClassDark(i);
      }else if (i >= 48 && i < 56){ addClassLight(i);
      }else if (i >= 48 && i < 64){ addClassDark(i);
    }
  }
};
