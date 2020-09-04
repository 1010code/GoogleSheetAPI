let sendButton = document.querySelector('button');

function send() {
    let name = document.querySelector('#nameValue').value;
    let mail = document.querySelector('#mailValue').value;
    //    $.ajax({
    //     type: "post",
    //     url: "https://script.google.com/macros/s/AKfycbzvEB8FsZRcQ1EJJQ5WPNIGuRcgsujMORHcGENR-nU-LlBUpo5t/exec",
    //     data: {
    //         "name": name,
    //         "mail": mail
    //     },
    //     success: function(response) {
    //         console.log(response);
    //       if(response.result == "成功"){
    //         alert("成功");
    //       }
    //     },
    //   });
    let url = 'https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbzvEB8FsZRcQ1EJJQ5WPNIGuRcgsujMORHcGENR-nU-LlBUpo5t/exec';
    // Build formData object.
    let formData = new FormData();
    formData.append('name', name);
    formData.append('mail', mail);

    fetch(url, {
        method: 'POST', 
        data: formData,
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            console.log(response);
            if (response.result == "成功") {
                alert("成功");
            }
        });
};

sendButton.addEventListener('click', send);