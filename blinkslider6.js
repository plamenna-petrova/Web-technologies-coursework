                      var myIndex6 = 0;
                      carousel6();

                      function carousel6() {
                      var i;
                      var x = document.getElementsByClassName("myAutoSlides6");
                      for (i = 0; i < x.length; i++) {
                           x[i].style.display = "none";  
                      }
                      myIndex6++;
                      if (myIndex6 > x.length) {myIndex6 = 1}    
                      x[myIndex6-1].style.display = "block";  
                      setTimeout(carousel6, 7000); // Change image every 2 seconds
                      }
					  
					  
