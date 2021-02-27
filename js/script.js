const BASE_URL = "https://cdn.contentful.com"
// anything after the ? is called "query strings". Backend developers design what queries will work with the API.
const API_KEY = "/spaces/1ooy33zp4esg/environments/master/entries?access_token=GwmWVEBSVzK_noU9IhoIaYblT31-CqoiESVSAdo7UJ0&&content_type=triviaq"

const COMPLETE_URL = "https://cdn.contentful.com/spaces/1ooy33zp4esg/environments/master/entries?access_token=GwmWVEBSVzK_noU9IhoIaYblT31-CqoiESVSAdo7UJ0&&content_type=triviaq"


$.ajax(URL)
       .then((data) => {
           console.log(data);
       });
