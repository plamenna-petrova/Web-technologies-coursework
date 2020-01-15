                      var myIndex5 = 0;
                      carousel5();

                      function carousel5() {
                      var i;
                      var x = document.getElementsByClassName("myAutoSlides5");
                      for (i = 0; i < x.length; i++) {
                           x[i].style.display = "none";  
                      }
                      myIndex5++;
                      if (myIndex5 > x.length) {myIndex5 = 1}    
                      x[myIndex5-1].style.display = "block";  
                      setTimeout(carousel5, 7000); // Change image every 2 seconds
                      }
					  
					  
