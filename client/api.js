
class DataApi {
  constructor() {
    this.data = {} 
  }
  initData() {
    this.getAll()
  }
  getData() {
    return this.data
  }
  // setData(){
  //     localStorage.setItem("listOfUsers", JSON.parse(localStorage.snapchat || "[]"))
  // }

  getAll = function () {
    $.ajax({
      method: "GET",
      url: 'http://data.nba.net/10s/prod/v1/2018/players.json',
      dataType: 'json',
      success: (data) => {
        let myAllData = data.league.standard;
        this.data = myAllData
      },
      error: function (xhr, text, error) {
        console.log(text);
      }
    })
  }
}





