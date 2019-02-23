let database = firebase.database();

$('#submit').on('click', (event) => {
    event.preventDefault()
    let title = $('#newpostTitle').val()
    let text = $('#newpostText').val()

    console.log(title);
    $('body').prepend(`
<h2>${title}</h2>
<p>${text}<p>
`)
    let dataPosts = { title: title, text: text };
    database.ref("posts").push(dataPosts);

    $('#newpostTitle').val('')
    $('#newpostText').val('')
});

database.ref("posts").once('value').then(data => {
    data.forEach(element => {
        $('body').append(`
        <div>
          <h2 class="oldposttitle">${element.child('title').val()}</h2>
          <p>${element.child('text').val()}<p>
        </div>  
      `);
    });
});