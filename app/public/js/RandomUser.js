var newUser = new Vue({
      el: '#newUser',
    data: {
        user: {
            "gender": "",
            "name": {
                "title": "",
                "first": "",
                "last": ""
            },
            "location": {
                "street": "",
                "city": "",
                "state": "",
                "postcode": "",
                "coordinates": {
                    "latitude": "",
                    "longitude": ""
                },
                "timezone": {
                    "offset": "",
                    "description": ""
                }
            },
            "email": "",
            "login": {
                "uuid": "",
                "username": "",
                "password": "",
                "salt": "",
                "md5": "",
                "sha1": "",
                "sha256": ""
            },
            "dob": {
                "date": "",
                "age": null
            },
            "registered": {
                "date": "",
                "age": null
            },
            "phone": "",
            "cell": "",
            "id": {
                "name": "",
                "value": ""
            },
            "picture": {
                "large": "",
                "medium": "",
                "thumbnail": ""
            },
            "nat": ""
        }
    },
    methods: {
        fetchUser() {
            fetch('https://randomuser.me/api')
                .then(response => response.json())
                .then(json => { newUser.user = json.results[0] });
              },
    loadNewUser() {
           this.fetchUser();
           this.user = {
               "gender": "",
               "name": {
                   "title": "",
                   "first": "",
                   "last": ""
               },
               "location": {
                   "street": "",
                   "city": "",
                   "state": "",
                   "postcode": "",
                   "coordinates": {
                       "latitude": "",
                       "longitude": ""
                   },
                   "timezone": {
                       "offset": "",
                       "description": ""
                   }
               },
               "email": "",
               "login": {
                   "uuid": "",
                   "username": "",
                   "password": "",
                   "salt": "",
                   "md5": "",
                   "sha1": "",
                   "sha256": ""
               },
               "dob": {
                   "date": "",
                   "age": null
               },
               "registered": {
                   "date": "",
                   "age": null
               },
               "phone": "",
               "cell": "",
               "id": {
                   "name": "",
                   "value": ""
               },
               "picture": {
                   "large": "",
                   "medium": "",
                   "thumbnail": ""
               },
               "nat": ""
           };
       }
   },
    created: function () {
        this.fetchUser();
    }
});
