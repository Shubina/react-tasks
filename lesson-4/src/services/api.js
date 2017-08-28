class Api {
  constructor() {
    this.headers = {};
    this.url = 'http://api.jyotish.gift/api/v1/auth';
	this.signUpUrl = this.url + '/signup';
	this.loginUrl = this.url + '/login';
	this.options = {
				method: 'POST',
				mode: 'cors',
				body: JSON.stringify(this.state),
				headers: new Headers ({
					'Content-Type': 'application/json'
				})
			}
  }
  signUser(url) {
  	fetch(this.loginUrl, this.options)
	.then((response) => {
        if(response.ok) return response.json();
        else throw new Error('Something went wrong on api server!');
    })
    .then(json => {
    	return console.log(json.message.token)
    })
    .catch( (error) => {
    	console.log(error)
    });
  }


  loginUser () {
	fetch(this.loginUrl, this.options)
	.then((response) => {
        if(response.ok) return response.json();
        else throw new Error('Something went wrong on api server!');
    })
    .then(json => {
    	return console.log(json.message.token)
    })
    .catch( (error) => {
    	console.log(error)
    });
  }

  signUpUser (opt) {
  	fetch(this.signUpUser, opt)
	.then((response) => {
        if(response.ok) return console.log(response.json());
        else throw new Error('Something went wrong on api server!');
    })
    .then(json => {
    	return console.log(json.message.token)
    })
    .catch( (error) => {
    	console.log(error)
    });
  }


  getUsers() {
    // 1 
    return fetch(this.url).then(data => data.json());
    // return fetch(this.url).then(data => data.json());
  }
}

export default new Api();