


const api = new DataApi()
const render = new Renderer(api.data)


  // getRoster = function () {
  //   let nameRoster = $('#nameRoster').val()
  //   let teamId = teamToIDs[nameRoster]
  //   $.get(`/teams/${teamId}`,function(data){
  //     $("body").append(`<div>${data}</div>`)
  //   })
  // }


  api.initData(); 
 
  $('#getRoster').on('click', function () {
    render.renderAll(api.data) 
})

// changeImg = function(){
//   console.log("gdfgd");
//   $('img').attr('src', 'https://img.favpng.com/20/5/17/clip-art-basketball-player-vector-graphics-silhouette-png-favpng-NBUQF7HYGDJ7F88ADF1ES8Gi0.jpg');
// }

// $('#imgg').on("error", function(){
//   $(this).attr('src', 'https://img.favpng.com/20/5/17/clip-art-basketball-player-vector-graphics-silhouette-png-favpng-NBUQF7HYGDJ7F88ADF1ES8Gi0.jpg');
// });


