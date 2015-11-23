
     function pic1()
     {
         if (document.getElementById('title').value.toLowerCase()=="cat") {
			
             document.getElementById("img").src = "../HW1/Catimage.jpg";
         } else if (document.getElementById('title').value.toLowerCase()=="dog") {
             document.getElementById("img").src = "../HW1/DogImage.jpg";
         }
         
     }
 