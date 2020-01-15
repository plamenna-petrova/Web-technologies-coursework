                      var myIndex4 = 0;
                      carousel4();

                      function carousel4() {
                      var i;
                      var x = document.getElementsByClassName("myAutoSlides4");
                      for (i = 0; i < x.length; i++) {
                           x[i].style.display = "none";  
                      }
                      myIndex4++;
                      if (myIndex4 > x.length) {myIndex4 = 1}    
                      x[myIndex4-1].style.display = "block";  
                      setTimeout(carousel4, 7000); // Change image every 2 seconds
                      }
					  
					  
