function increReach() {
    
}

function showModal() {
    $('#staticBackdrop').modal('show');
}

function sendMail() {
    let message = document.getElementById('mailContent').value;
    console.log(message);
    if(message == "" || message == " ") {
        let ack = confirm("you have not put any text to mail th service provider");
        console.log(ack);
        if(ack) {
            $('#staticBackdrop').modal('hide');  
        }
    }
    else {
        $('#staticBackdrop').modal('hide');
        document.getElementById('mailContent').value = null;
    }

    let sendObject = {
        message : message,
        username : document.getElementById('username').innerHTML
    }

    let xhttp = new XMLHttpRequest();
    xhttp.open('POST','data',true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            alert(xhttp.responseText);
        }
    }
    let  jsonsendObject= JSON.stringify(sendObject);
    console.log(jsonsendObject);
    xhttp.send(jsonsendObject);

        
}


