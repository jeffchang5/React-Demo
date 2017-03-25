import request from "superagent";
class reqBuilder {
  constructor(text, limit) {
    this.text = text;
    this.limit = limit;
    this.credentials =
    {
      "url": "https://gateway.watsonplatform.net/natural-language-understanding/api/v1/analyze?version=2017-02-27",
      "username": "5fdac1e2-e90b-405d-883f-bb69fc78c3d5",
      "password": "7YpNxxt20j5f"
    }
  }
  makeRequest(callback) {
    request
      .post('https://cors-anywhere.herokuapp.com/' + this.credentials.url)
      .set('Authorization', 'Basic ' + btoa(this.credentials.username + ':' + this.credentials.password))
      .send(this.bodyBuilder(this.text, this.limit))
      .end(function(err, res){
      if (err || !res.ok) {
        console.log(err);
      } else {
        callback();
      }
      });
  }

  bodyBuilder() {
    let json =
    {
    "text": this.text,
    "features": {
      "entities": {
        "emotion": true,
        "sentiment": true,
        "limit": this.limit
      },
      "keywords": {
        "emotion": true,
        "sentiment": true,
        "limit": this.limit
      }
    }
  }
  return json;



  }

}
export default reqBuilder;
