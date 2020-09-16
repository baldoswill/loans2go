// Intitialize and add the map

function initMap(){
    // Your location
    const loc = {lat: 40.712776, lng: -74.005974};

    // Centered map on location
    const map = new google.maps.Map(document.querySelector('.mapx'),{
        zoom: 14,
        center: loc
    });

    // The marker positioned at location

    const marker = new google.maps.Marker({position: loc, map:map});
}

// Smooth Scrolling

// $('#navbar a, .btn').on('click',function(event){
//     // hash = #
//     if(this.hash !== ''){
//         event.preventDefault();
//
//         const hash = this.hash;
//
//         $('html, body').animate({
//             scrollTop: $(hash).offset().top - 100
//         }, 1000);
//     }
// });

