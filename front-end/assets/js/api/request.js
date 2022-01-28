import config from './config.js'

class Request{
    constructor(url, method, data, loadfunc, failfunc){
            
            this.url = config.url + url
            this.method = method
            this.data = data
            this.loadfunc = loadfunc
            this.failfunc = failfunc
            this.xhttp = new XMLHttpRequest();
            this.xhttp.onload = function(){
                if(this.status == 200){
                    loadfunc(this.responseText)
                }else{
                    failfunc(this.responseText)
                }
            }
            this.xhttp.open(this.method,this.url,false);
            this.xhttp.send(data);
    }
}

export default Request;