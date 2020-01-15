                      var myIndex8 = 0;
                      carousel8();

                      function carousel8() {
                      var i;
                      var x = document.getElementsByClassName("myAutoSlides8");
                      for (i = 0; i < x.length; i++) {
                           x[i].style.display = "none";  
                      }
                      myIndex8++;
                      if (myIndex8 > x.length) {myIndex8 = 1}    
                      x[myIndex8-1].style.display = "block";  
                      setTimeout(carousel8, 7000); // Change image every 2 seconds
                      }
					  
					  
					  
