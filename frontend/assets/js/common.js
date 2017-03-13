var map;
var marker;

window.initMap = () => {
    const mapElement = document.getElementById('map');
    if (!mapElement) { return; }

    var myLatLng = {lat: 34.701971, lng: 135.488924};
    map = new google.maps.Map(mapElement, {
        zoom: 1,
        center: myLatLng,
        scrollwheel: false,
    });
    marker = new google.maps.Marker({
        position: myLatLng,
        title: 'Hello World!',
        animation: google.maps.Animation.BOUNCE,
        icon: {
            url: "./img/map-pin.png",
            scaledSize : new google.maps.Size(71, 88.5),
        }
    });
    marker.setMap(map)
    map.setZoom(17)
}

$(() => {
    const $menu = $('#main-menu');
    if ($menu.length === 0) { return; }

    const menuScrollTop = $menu.offset().top;
    $(window).scroll((e) => {
        let scrollTop = $(e.target).scrollTop()
        if(menuScrollTop < scrollTop) {
            $('.to-menu').fadeIn(1000)
        } else {
            $('.to-menu').fadeOut(1000)
        }
    })
});
