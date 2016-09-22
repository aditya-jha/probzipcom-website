
var map;
var markers = [];
var color;
var directionsService, directionsDisplay;

var showDeliveryBoy = function() {
    if(!map) {
        console.log("map not init yet");
        return;
    }
    if(markers.length != 0) {
        for(var i=0;i<markers.length;i++) {
            markers[i].setMap(null);
        }
    }
    if(directionsDisplay.length != 0) {
        for(var i=0;i<directionsDisplay.length;i++) {
            directionsDisplay[i].setMap(null);
        }
    }

    var bounds = new google.maps.LatLngBounds();
    var id = document.getElementById('select_delivery_boy').value;
    var currentDeliveryboy;

    for(var i=0;i<deliveryboy.length;i++) {
        if(deliveryboy[i].id == id) {
            currentDeliveryboy = deliveryboy[i];
            break;
        }
    }
    if(!currentDeliveryboy) {
        console.log("error occured");
        return;
    }
    directionsDisplay.setMap(null);

    deliveryboy_marker = new google.maps.Marker({
        position: {lat:currentDeliveryboy.latitude, lng:currentDeliveryboy.longitude},
        map: map,
        title: currentDeliveryboy.name + ', ' + currentDeliveryboy.mobile_number,
        icon: 'http://gmaps-samples.googlecode.com/svn/trunk/markers/blue/blank.png',
        animation: google.maps.Animation.DROP
    });
    bounds.extend(new google.maps.LatLng(currentDeliveryboy.latitude, currentDeliveryboy.longitude));
    markers.push(deliveryboy_marker);

    for(var i=0;i<this_order.length;i++) {
        if(this_order[i].type=='1') {
            color = 'red';
        }
        else {
            color = 'green'
        }

        this_order_marker = new google.maps.Marker({
            position: {lat:this_order[i].latitude, lng:this_order[i].longitude},
            map: map,
            title: this_order[i].name + ', ' + this_order[i].mobile_number,
            icon: 'http://gmaps-samples.googlecode.com/svn/trunk/markers/'+color+'/blank.png',
            animation: google.maps.Animation.DROP
        });
        bounds.extend(new google.maps.LatLng(this_order[i].latitude, this_order[i].longitude));
        markers.push(this_order_marker);
    }

    var waypoints = [];

    for(var i=0;i<orders_assigned_not_acknowledged.length;i++) {
        if(orders_assigned_not_acknowledged[i].deliveryboy_id == id) {
            if(orders_assigned_not_acknowledged[i].type=='1') {
                color = 'red';
            }
            else {
                color = 'green'
            }
            this_order_marker = new google.maps.Marker({
                position: {lat:orders_assigned_not_acknowledged[i].latitude, lng:orders_assigned_not_acknowledged[i].longitude},
                map: map,
                title: orders_assigned_not_acknowledged[i].name + ', ' + orders_assigned_not_acknowledged[i].mobile_number,
                icon: 'http://gmaps-samples.googlecode.com/svn/trunk/markers/'+color+'/blank.png',
                animation: google.maps.Animation.DROP
            });
            bounds.extend(new google.maps.LatLng(orders_assigned_not_acknowledged[i].latitude, orders_assigned_not_acknowledged[i].longitude));
            markers.push(this_order_marker);
            waypoints.push({
                location: new google.maps.LatLng(orders_assigned_not_acknowledged[i].latitude, orders_assigned_not_acknowledged[i].longitude),
                stopover: false
            });
        }
    }
    map.fitBounds(bounds);

    if(waypoints.length == 0) {
        console.log("here");
        return;
    }
    directionsDisplay.setMap(map);
    directionsService.route({
        origin: new google.maps.LatLng(currentDeliveryboy.latitude, currentDeliveryboy.longitude),
        destination: waypoints[waypoints.length-1].location,
        waypoints: waypoints,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.DRIVING
    }, function(response, status) {
        console.log(response);
        if (status === google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
        else {
            window.alert('Directions request failed due to ' + status);
        }
    });

};

var initMap = function() {
    map = new google.maps.Map(document.getElementById('map-canvas'), {
        center: {
            lat: 26.8546829,
            lng: 75.8211222
        },
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    directionsService = new google.maps.DirectionsService;
    directionsDisplay = new google.maps.DirectionsRenderer;

    showDeliveryBoy();
};
