                      var myIndex3 = 0;
                      carousel3();

                      function carousel3() {
                      var i;
                      var x = document.getElementsByClassName("myAutoSlides3");
                      for (i = 0; i < x.length; i++) {
                           x[i].style.display = "none";  
                      }
                      myIndex3++;
                      if (myIndex3 > x.length) {myIndex3 = 1}    
                      x[myIndex3-1].style.display = "block";  
                      setTimeout(carousel3, 7000); // Change image every 2 seconds
                      }
					  
					  
