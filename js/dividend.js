
var app = new Vue({
  el: '#app',
  data: {
    adminstate: [],
    dividendlog: []
  },
  created: function () {
    var baseUrl = "http://121.168.149.101:8888";

    axios({
      method: 'POST',
      url: baseUrl + '/v1/chain/get_table_rows',
      headers: {
        'Content-Type': 'text/plain',
      },
      data: {
        json: true,
        code: "eosknightsio",
        scope: "eosknightsio",
        table: "adminstate",
        table_key: "",
        lower_bound: "",
        upper_bound: "",
        limit: 1
      }
    }).then(function(response) {
        console.log(response.data.rows[0]);
        this.adminstate = response.data.rows[0];
    }.bind(this))
    .catch(function(e) {
        this.errors.push(e)
    });

    axios({
      method: 'POST',
      url: baseUrl + '/v1/chain/get_table_rows',
      headers: {
        'Content-Type': 'text/plain',
      },
      data: {
        json: true,
        code: "eosknightsio",
        scope: "eosknightsio",
        table: "dividendlog",
        table_key: "",
        lower_bound: "",
        upper_bound: "-1",
        limit: 20
      }
    }).then(function(response) {
        console.log(response.data.rows[0]);
        this.dividendlog = response.data.rows;
    }.bind(this))
    .catch(function(e) {
        this.errors.push(e)
    });    
  }
})