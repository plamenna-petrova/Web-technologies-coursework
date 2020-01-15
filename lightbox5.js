                        function openModal5() {
                                document.getElementById("myModal5").style.display = "block";
                        }

                        function closeModal5() {
                               document.getElementById("myModal5").style.display = "none";
                        }

                        var slideIndex5 = 1;
                        showSlides5(slideIndex5);

                        function plusSlides5(n) {
                               showSlides5(slideIndex5 += n);
                        }

                        function currentSlide5(n) {
                               showSlides5(slideIndex5 = n);
                        }

                        function showSlides5(n) {
                        var i;
                        var slides5 = document.getElementsByClassName("mySlides5");
                        var dots5 = document.getElementsByClassName("demo5");
                        var captionText5 = document.getElementById("caption-lightbox5");
                        if (n > slides5.length) {slideIndex5 = 1}
                        if (n < 1) {slideIndex5 = slides5.length}
                        for (i = 0; i < slides5.length; i++) {
                        slides5[i].style.display = "none";
                        }
                        for (i = 0; i < dots5.length; i++) {
                        dots5[i].className = dots5[i].className.replace(" active", "");
                        }
                        slides5[slideIndex5-1].style.display = "block";
                        dots5[slideIndex5-1].className += " active";
                        captionText5.innerHTML = dots5[slideIndex5-1].alt;
                        }
						
						
						
