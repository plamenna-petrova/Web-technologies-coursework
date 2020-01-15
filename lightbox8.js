                        function openModal7() {
                                document.getElementById("myModal7").style.display = "block";
                        }

                        function closeModal7() {
                               document.getElementById("myModal7").style.display = "none";
                        }

                        var slideIndex7 = 1;
                        showSlides7(slideIndex7);

                        function plusSlides7(n) {
                               showSlides7(slideIndex7 += n);
                        }

                        function currentSlide7(n) {
                               showSlides7(slideIndex7 = n);
                        }

                        function showSlides7(n) {
                        var i;
                        var slides7 = document.getElementsByClassName("mySlides7");
                        var dots7 = document.getElementsByClassName("demo7");
                        var captionText7 = document.getElementById("caption-lightbox7");
                        if (n > slides7.length) {slideIndex7 = 1}
                        if (n < 1) {slideIndex7 = slides7.length}
                        for (i = 0; i < slides7.length; i++) {
                        slides7[i].style.display = "none";
                        }
                        for (i = 0; i < dots7.length; i++) {
                        dots7[i].className = dots7[i].className.replace(" active", "");
                        }
                        slides7[slideIndex7-1].style.display = "block";
                        dots7[slideIndex7-1].className += " active";
                        captionText7.innerHTML = dots7[slideIndex7-1].alt;
                        }
						
						
