// Tabla GAMES
// Metodo GET
function leerJuegos(){
    $.ajax({
        url: "https://g05cfc04b96ee8f-games.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/games/games",
        type: "GET",
        dataType: "JSON",

        success: function(respuesta){
            let juegos = respuesta.items;
            $("#listaJuegos").empty();
            
            mostrarJuego(respuesta.items);
        },
        error: function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function mostrarJuego(items){
    let table = "<table border=1>";
    table+="<tr>";
    table+="<th>ID</th>";
    table+="<th>Developer</th>";
    table+="<th>Minage</th>";
    table+="<th>Categoria ID</th>";
    table+="<th>Name</th>";
    table+="</tr>";
    for (i=0; i<items.length; i++){
        table+="<tr>";
        table+="<td>" + items[i].id + "</td>";
        table+="<td>" + items[i].developer + "</td>";
        table+="<td>" + items[i].minage + "</td>";
        table+="<td>" + items[i].category_id+ "</td>";
        table+="<td>" + items[i].name + "</td>";
        table+="<td>" + "<button onclick='eliminarJuego("+items[i].id+")'>Eliminar</button>" + "</td>";
        table+="</tr>";
    }
    table+="</table>";
    $("#listaJuegos").append(table);

}

function agregarJuego(){
    //Captura de información
    let mydata ={
        id: $("#id").val(),
        developer: $("#developer").val(),
        minage: $("#minage").val(),
        category_id: $("#category_id").val(),
        name: $("#name").val()
    };
    // Convertir información a formato JSON
    let dataToJson = JSON.stringify(mydata);

    $.ajax({
        url: "https://g05cfc04b96ee8f-games.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/games/games",
        type: "POST",
        dataType: "JSON",
        data: dataToJson,
        contentType: "application/json",

        complete: function(){
            leerJuegos();
        }
    });
}

function actualizarJuego(){
    //Captura de información
    let mydata ={
        id: $("#id").val(),
        developer: $("#developer").val(),
        minage: $("#minage").val(),
        category_id: $("#category_id").val(),
        name: $("#name").val()
    };
    // Convertir información a formato JSON
    let dataToSend = JSON.stringify(mydata);

    $.ajax({
        url: "https://g05cfc04b96ee8f-games.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/games/games",
        type: "PUT",
        data: dataToSend,
        contentType: "application/json",
        dataType: "JSON",

        success: function(respuesta){
            $("#id").val("");
            $("#developer").val("");
            $("#minage").val("");
            $("#category_id").val("");
            $("#name").val("");
            get_data();
        },
        complete: function(){
            leerJuegos();
        }
    });
}

function eliminarJuego(idjuego){
    // Convertir información a formato JSON
    let mydata ={
        id: idjuego
    };
    let dataToSend = JSON.stringify(mydata);

    $.ajax({
        url: "https://g05cfc04b96ee8f-games.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/games/games",
        type: "DELETE",
        data: dataToSend,
        contentType: "application/json",

        success: function(respuesta){
            $("#id").val("");
            $("#developer").val("");
            $("#minage").val("");
            $("#category_id").val("");
            $("#name").val("");
        },
        complete: function(){
            leerJuegos();
        }
    });
}

// Tabla Clientes

// Metodo GET
function leerClientes(){
    $.ajax({
        url: "https://g05cfc04b96ee8f-games.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/client/client",
        type: "GET",
        dataType: "JSON",

        success: function(respuesta){
            let clientes = respuesta.items;
            $("#listaClientes").empty();
            
            mostrarCliente(respuesta.items);
        },
        error: function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function mostrarCliente(items){
    let table = "<table border=1>";
    table+="<tr>";
    table+="<th>ID</th>";
    table+="<th>Name</th>";
    table+="<th>Email</th>";
    table+="<th>Age</th>";
    table+="</tr>";
    for (i=0; i<items.length; i++){
        table+="<tr>";
        table+="<td>" + items[i].id + "</td>";
        table+="<td>" + items[i].name + "</td>";
        table+="<td>" + items[i].email + "</td>";
        table+="<td>" + items[i].age+ "</td>";
        table+="<td>" + "<button onclick='eliminarJuego("+items[i].id+")'>Eliminar</button>" + "</td>";
        table+="</tr>";
    }
    table+="</table>";
    $("#listaClientes").append(table);

}

function agregarCliente(){
    //Captura de información
    let mydata ={
        id: $("#id").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        age: $("#age").val()
    };
    // Convertir información a formato JSON
    let dataToJson = JSON.stringify(mydata);

    $.ajax({
        url: "https://g05cfc04b96ee8f-games.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/client/client",
        type: "POST",
        dataType: "JSON",
        data: dataToJson,
        contentType: "application/json",

        complete: function(){
            leerClientes();
        }
    });
}

function actualizarCliente(){
    //Captura de información
    let mydata ={
        id: $("#id").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        age: $("#age").val()
    };
    // Convertir información a formato JSON
    let dataToSend = JSON.stringify(mydata);

    $.ajax({
        url: "https://g05cfc04b96ee8f-games.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/client/client",
        type: "PUT",
        data: dataToSend,
        contentType: "application/json",
        dataType: "JSON",

        success: function(respuesta){
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            get_data();
        },
        complete: function(){
            leerClientes();
        }
    });
}

function eliminarCliente(idcliente){
    // Convertir información a formato JSON
    let mydata ={
        id: idcliente
    };
    let dataToSend = JSON.stringify(mydata);

    $.ajax({
        url: "https://g05cfc04b96ee8f-games.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/client/client",
        type: "DELETE",
        data: dataToSend,
        contentType: "application/json",

        success: function(respuesta){
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
        },
        complete: function(){
            leerClientes();
        }
    });
}

// Tabla Message

function leerMensajes(){
    $.ajax({
        url: "https://g05cfc04b96ee8f-games.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/message/message",
        type: "GET",
        dataType: "JSON",

        success: function(respuesta){
            let mensajes = respuesta.items;
            $("#listaMensajes").empty();
            
            mostrarMensaje(respuesta.items);
        },
        error: function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function mostrarMensaje(items){
    let table = "<table border=1>";
    table+="<tr>";
    table+="<th>ID</th>";
    table+="<th>Message</th>";
    table+="</tr>";
    for (i=0; i<items.length; i++){
        table+="<tr>";
        table+="<td>" + items[i].id + "</td>";
        table+="<td>" + items[i].messagetext + "</td>";
        table+="<td>" + "<button onclick='eliminarMensaje("+items[i].id+")'>Eliminar</button>" + "</td>";
        table+="</tr>";
    }
    table+="</table>";
    $("#listaMensajes").append(table);

}

function agregarMensaje(){
    //Captura de información
    let mydata ={
        id: $("#id").val(),
        messagetext: $("#messagetext").val()
    };
    // Convertir información a formato JSON
    let dataToJson = JSON.stringify(mydata);

    $.ajax({
        url: "https://g05cfc04b96ee8f-games.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/message/message",
        type: "POST",
        dataType: "JSON",
        data: dataToJson,
        contentType: "application/json",

        complete: function(){
            leerMensajes();
        }
    });
}

function actualizarMensaje(){
    //Captura de información
    let mydata ={
        id: $("#id").val(),
        messagetext: $("#messagetext").val()
    };
    // Convertir información a formato JSON
    let dataToSend = JSON.stringify(mydata);

    $.ajax({
        url: "https://g05cfc04b96ee8f-games.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/message/message",
        type: "PUT",
        data: dataToSend,
        contentType: "application/json",
        dataType: "JSON",

        success: function(respuesta){
            $("#id").val("");
            $("#messagetext").val("");
        },
        complete: function(){
            leerMensajes();
        }
    });
}

function eliminarMensaje(idmensaje){
    // Convertir información a formato JSON
    let mydata ={
        id: idmensaje
    };
    let dataToSend = JSON.stringify(mydata);

    $.ajax({
        url: "https://g05cfc04b96ee8f-games.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/message/message",
        type: "DELETE",
        data: dataToSend,
        contentType: "application/json",

        success: function(respuesta){
            $("#id").val("");
            $("#messagetext").val("");
        },
        complete: function(){
            leerMensajes();
        }
    });
}
