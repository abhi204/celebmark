// returns a body which can be inserted in Header for fetch requests
let createBody = (jsonData) => {
    let body = new FormData();
    for(var key in jsonData)
    {
        body.append(key, jsonData.key);
    }
    return body;
}

export default createBody;