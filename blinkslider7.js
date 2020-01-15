                      var myIndex7 = 0;
                      carousel7();

                      function carousel7() {
                      var i;
                      var x = document.getElementsByClassName("myAutoSlides7");
                      for (i = 0; i < x.length; i++) {
                           x[i].style.display = "none";  
                      }
                      myIndex7++;
                      if (myIndex7 > x.length) {myIndex7 = 1}    
                      x[myIndex7-1].style.display = "block";  
                      setTimeout(carousel7, 7000); // Change image every 2 seconds
                      }
					  
					  
