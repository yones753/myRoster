

class Renderer {
    constructor() { 
    }

    renderAll(data) {
        this.getRoster(data)
        // this.renderTeam(data)
        
    }

    //  renderTeam(data) {
    //     console.log(data);
    //     this.render('teamContainer','team-template', data)
    // }

    // render(classId, scriptId, data) {
    //     $(`#${classId}`).empty()
    //     const source = $(`#${scriptId}`).html();
    //     const template = Handlebars.compile(source);
    //     let dataHTML = template(data)
    //     $(`#${classId}`).append(dataHTML)
    // }

    

    getRoster = function (data) {
        let nameRoster = $('#nameRoster').val()
        $('#nameRoster').val("")
        $.get(`/teams/${nameRoster}`, function (teamId) {
           let list = data.map(e => e).filter(a => a.teamId === teamId)
           $('#teamContainer').empty()
           const source = $('#team-template').html();
           const template = Handlebars.compile(source);
           let dataHTML = template({list})
           console.log(list);
           console.log(list.length);
           if(list.length === 3){
            $('#teamContainer').append(`<div class="noData">No Result </div>`)
           }else{
            $('#teamContainer').append(dataHTML)
           }
        })
        // this.render('teamContainer','team-template',list)
        // console.log(list);
      }

     
}
