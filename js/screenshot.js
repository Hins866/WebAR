var image = document.querySelector('#snap');

    var take_photo_btn = document.querySelector('#take-photo');

    var delete_photo_btn = document.querySelector('#delete-photo');

    var download_photo_btn = document.querySelector('#download-photo');



    //Snapshot button 

    take_photo_btn.addEventListener("click", function (e) {

        e.preventDefault();

        var video = document.querySelector('video');

        var snap = takeSnapshot(video);



        //snap shot display. 

        image.setAttribute('src', snap);

        image.classList.add('visible');



        //delete button and save button effective 

        delete_photo_btn.classList.remove("disabled");

        download_photo_btn.classList.remove("disabled");



        //Save button pass snapshot 

        download_photo_btn.href = snap;

    });



    //delete button 

    delete_photo_btn.addEventListener("click", function(e){



        e.preventDefault();



        //hide the snapshot 

        image.setAttribute('src', "");

        image.classList.remove("visible");



        //delete button and save button invalid 

        delete_photo_btn.classList.add("disabled");

        download_photo_btn.classList.add("disabled");



    });



    //take a snapshot 

    function takeSnapshot(video) {

        var resizedCanvas = document.createElement("canvas");

        var resizedContext = resizedCanvas.getContext("2d");

        var width = video.videoWidth;

        var height = video.videoHeight;

        var aScene = document.querySelector("a-scene").components.screenshot.getCanvas("perspective");



        if (width && height) {

            //set the size of the canvas video 

            resizedCanvas.width = width;

            resizedCanvas.height = height;

            //copy video to Canvas 

            resizedContext.drawImage(video, 0, 0, width, height);



            //in the angle of view of the camera changes with the reduction processing of the ar side 

            if (width > height) {

                //Horizontal (PC) 

                resizedContext.drawImage(aScene, 0, 0, width, height);

            } else {

                //Vertical (smartphone ) 

                var scale = height / width;

                var scaledWidth = height * scale;

                var marginLeft = (width - scaledWidth) / 2;

                resizedContext.drawImage(aScene, marginLeft, 0, scaledWidth, height);

            }

            return resizedCanvas.toDataURL('image/png');

        }

    }