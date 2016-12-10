/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        pictureSource=navigator.camera.PictureSourceType; 
        destinationType=navigator.camera.DestinationType; 
         
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

//Funciones de diseño para la app


$("document").ready(function(){
     $( "#mypanel" ).panel( "open" );
});

$("#mypanel").panel().enhanceWithin();

$("document").on("swiperight",function(){

 $( "#mypanel" ).panel( "open" );

});

$("body").on("swiperight",function(){

 $( "#mypanel" ).panel( "open" );

});

$(window).load(function(){
	$('#contenedor-productos').masonry();
    
   
});

$("document").ready(function(){

 $( "#mypanel" ).panel( "open" );

});


$("#enviar").click(function(){
        
      
   
    
        var cemail= $("#ccorreo").val();
        var cauthor= $("#crazon").val();
        var csubject= $("#casunto").val();
        var ccontent= $("#cmensaje").val();



     if(cemail!=""&&cauthor!=""&&csubject!=""&&ccontent!="")
    {   
            $.ajax({
            type: "GET",
            url: "http://server05.distritohosting.com/carbograf/enviocorreo.php",
            data:{email:cemail,
                  subject:csubject,
                  author:cauthor,
                  content:ccontent  
            },
            dataType:"json",
            crossDomain: true,
            beforeSend: function () {
                    

                    },

             success:function(){    

                alert("Su mensaje fue enviado correctamente.");
                $("#ccorreo").val("");
                $("#crazon").val("");
                $("#casunto").val("");
                $("#cmensaje").val("");
            },error:function()
            {
                alert("Ocurrio un error, verifique su conexión antes de continuar.")
            }
            });

    }
    else
    {
        alert("Por favor ingrese todos los campos.");
    }

      
    
    
return false;
});



$("document").ready(llenar_home());

// $("#ubicanos").live("pageshow",function(){
// $('#map').gmap({ 'center': new google.maps.LatLng(10.174973,-67.973633),
//                     'zoom':17 });   });


