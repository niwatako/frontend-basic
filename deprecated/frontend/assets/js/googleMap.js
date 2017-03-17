var map;
var marker;
function initMap(){
    var myLatLng = {lat: 34.701971, lng: 135.488924};
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 1,
        center: myLatLng
    });
    marker = new google.maps.Marker({
        position: myLatLng,
        title: 'Hello World!',
        animation: google.maps.Animation.BOUNCE,
        icon: "https://chatbox-inc.com/assets/images/about/map_pin.svg"
    });
    marker.setMap(map)
    var directionsService = new google.maps.DirectionsService();
    var request = {
        origin: {lat: 34.702635, lng: 135.495940},
        //出発地点
        destination: myLatLng,
        //行き先
        travelMode: google.maps.DirectionsTravelMode.WALKING
        //移動手段
    }
    directionsService.route(request,function(result, status){
        directionsDisplay = new google.maps.DirectionsRenderer({
            suppressMarkers: true,
            polylineOptions:{
                strokeColor: "#279abc",
                strokeWeight: 10,
                icons: [
                    {
                        icon: {
                            path: google.maps.SymbolPath.CIRCLE
                        },
                        repeat: "40px",
                    }
                ]
            }
        });
        directionsDisplay.setDirections(result);
        //経路情報を取得する
        directionsDisplay.setMap(map);
        //取得した経路情報を描画する
        setTimeout(function () {
            map.setZoom(17)
        },0)
        //少し後に実行する
    });
}