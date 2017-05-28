function get(){
    $.get("http://localhost:3000/", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
};