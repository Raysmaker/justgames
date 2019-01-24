function toggleClass(i){
    var  elems = document.getElementsByClassName('cages');
    var  elem  = document.getElementById(elems[i].getAttribute("id"));
    var _class = elem.classList.toggle('light-cage');
  return _class; 
}

window.onload = function() {
  for (i=0; i < 64; i++){
    
    if (i % 2 == 0){   
      }else if (i >=  0 && i <  8){ toggleClass(i); // 8 line
      }else if (i >= 16 && i < 24){ toggleClass(i); // 6 line
      }else if (i >= 32 && i < 40){ toggleClass(i); // 4 line
      }else if (i >= 48 && i < 56){ toggleClass(i); // 2 line
    }

    if (i % 2 != 0){
      }else if (i >= 8  && i < 16){ toggleClass(i); // 7 line
      }else if (i >= 24 && i < 32){ toggleClass(i); // 5 line
      }else if (i >= 40 && i < 48){ toggleClass(i); // 3 line
      }else if (i >= 56 && i < 64){ toggleClass(i); // 1 line
    } 
  }
};
