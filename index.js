let sendButton = document.querySelector('button');

function send() {
    // 取得前端表單資訊
    let name = document.querySelector('#nameValue').value;
    let mail = document.querySelector('#mailValue').value;
    let formData = new FormData();
    formData.append('name', name);
    formData.append('mail', mail);
    $.ajax({
        type: "POST",
        url: "https://script.google.com/macros/s/AKfycbzvEB8FsZRcQ1EJJQ5WPNIGuRcgsujMORHcGENR-nU-LlBUpo5t/exec",
        data: formData,
        processData: false,
        contentType: false,
        dataType: "json",
        success: function (response) {
            console.log('response');
            if (response.result == "成功") {
                alert("成功");
            }
        },
    });
    // Google App Script API URL
    // let url = 'https://script.google.com/macros/s/AKfycbzvEB8FsZRcQ1EJJQ5WPNIGuRcgsujMORHcGENR-nU-LlBUpo5t/exec';
    // // 建立 formData object
    // let formData = new FormData();
    // formData.append('name', name);
    // formData.append('mail', mail);

    // fetch(url, {
    //     method: 'POST', 
    //     data: formData,
    //     headers: new Headers({
    //         'Content-Type': 'application/json'
    //     })
    // }).then(res => res.json())
    //     .catch(error => console.error('Error:', error))
    //     .then(response => {
    //         console.log(response);
    //         if (response.result == "成功") {
    //             alert("成功");
    //         }
    //     });
};

sendButton.addEventListener('click', send);