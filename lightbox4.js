                        function openModal4() {
                                document.getElementById("myModal4").style.display = "block";
                        }

                        function closeModal4() {
                               document.getElementById("myModal4").style.display = "none";
                        }

                        var slideIndex4 = 1;
                        showSlides4(slideIndex4);

                        function plusSlides4(n) {
                               showSlides4(slideIndex4 += n);
                        }

                        function currentSlide4(n) {
                               showSlides4(slideIndex4 = n);
                        }

                        function showSlides4(n) {
                        var i;
                        var slides4 = document.getElementsByClassName("mySlides4");
                        var dots4 = document.getElementsByClassName("demo4");
                        var captionText4 = document.getElementById("caption-lightbox4");
                        if (n > slides4.length) {slideIndex4 = 1}
                        if (n < 1) {slideIndex4 = slides4.length}
                        for (i = 0; i < slides4.length; i++) {
                        slides4[i].style.display = "none";
                        }
                        for (i = 0; i < dots4.length; i++) {
                        dots4[i].className = dots4[i].className.replace(" active", "");
                        }
                        slides4[slideIndex4-1].style.display = "block";
                        dots4[slideIndex4-1].className += " active";
                        captionText4.innerHTML = dots4[slideIndex4-1].alt;
                        }
						
						
