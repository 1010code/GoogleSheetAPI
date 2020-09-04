let sendButton = document.querySelector('button');

function send() {
    // 取得前端表單資訊
    let name = document.querySelector('#nameValue').value;
    let mail = document.querySelector('#mailValue').value;
    let formData = new FormData();
    formData.append('name', name);
    formData.append('mail', mail);
    // ajax
    $.ajax({
        type: "POST",
        url: "https://script.google.com/macros/s/AKfycbzvEB8FsZRcQ1EJJQ5WPNIGuRcgsujMORHcGENR-nU-LlBUpo5t/exec",
        data: {
            name,
            mail
        },
        success: function(msg) {
            console.log(msg);
          }
    });
    // fetch
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

    // axios
    // axios.post('https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbzvEB8FsZRcQ1EJJQ5WPNIGuRcgsujMORHcGENR-nU-LlBUpo5t/exec', {
    //     formData
    //   })
    //   .then(function (response) {
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
};

sendButton.addEventListener('click', send);
