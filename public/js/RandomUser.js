var newUser = new Vue({
  el: '#newUser',
  data: {
    user: {}
  },
  methods: {
    fetchUser() {
      fetch('randomuser.me-sample.json')
      .then(response => response.json())
      .then(json => {newUser.user = json.results[0]});

      // Means the same at this
      // fetch('https://randomuser.me/api/')
      // .then(function(response) {return response.json()})
      // .then(function(json) {newUSer.users = json});

    }
  },
  created: function() {
    this.fetchUser();
  }

});
