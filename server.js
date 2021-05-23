const teamToIDs = {
  "lakers": "1610612747",
  "warriors": "1610612744",
  "heat": "1610612748",
  "suns": "1610612756"
}

const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use(express.static(path.join(__dirname,'client')))
app.use(express.static(path.join(__dirname,'node_modules')))

app.listen(port,function(){
  console.log(`Running  server on port ${port}`)
})



// app.get('/teams/:teamName',function(req,res){
//   let teamId = teamToIDs[nameRoster]
//   let id = req.params.teamName;
//   console.log( "id in server",id);
//   // let list = .allData.map(e => e).filter(a => a.teamId === id)
//   let list = [{'name': 'yoyo'}]
//   console.log(list);
//   res.send(list)
// })

app.get('/teams/:teamName', function (req, res) {
  let team_name_obj = req.params;
  let team_name = team_name_obj.teamName
  let teamId = teamToIDs[team_name]
  // console.log("team id in app.get = ",teamId);
  res.send(teamId)
})
