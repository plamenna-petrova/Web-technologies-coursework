                        function openModal6() {
                                document.getElementById("myModal6").style.display = "block";
                        }

                        function closeModal6() {
                               document.getElementById("myModal6").style.display = "none";
                        }

                        var slideIndex6 = 1;
                        showSlides6(slideIndex6);

                        function plusSlides6(n) {
                               showSlides6(slideIndex6 += n);
                        }

                        function currentSlide6(n) {
                               showSlides6(slideIndex6 = n);
                        }

                        function showSlides6(n) {
                        var i;
                        var slides6 = document.getElementsByClassName("mySlides6");
                        var dots6 = document.getElementsByClassName("demo6");
                        var captionText6 = document.getElementById("caption-lightbox6");
                        if (n > slides6.length) {slideIndex6 = 1}
                        if (n < 1) {slideIndex6 = slides6.length}
                        for (i = 0; i < slides6.length; i++) {
                        slides6[i].style.display = "none";
                        }
                        for (i = 0; i < dots6.length; i++) {
                        dots6[i].className = dots6[i].className.replace(" active", "");
                        }
                        slides6[slideIndex6-1].style.display = "block";
                        dots6[slideIndex6-1].className += " active";
                        captionText6.innerHTML = dots6[slideIndex6-1].alt;
                        }
						
						
