                      var myIndex1 = 0;
                      carousel1();

                      function carousel1() {
                      var i;
                      var x = document.getElementsByClassName("myAutoSlides1");
                      for (i = 0; i < x.length; i++) {
                           x[i].style.display = "none";  
                      }
                      myIndex1++;
                      if (myIndex1 > x.length) {myIndex1 = 1}    
                      x[myIndex1-1].style.display = "block";  
                      setTimeout(carousel1, 7000); // Change image every 2 seconds
                      }
					  
					  
					  
