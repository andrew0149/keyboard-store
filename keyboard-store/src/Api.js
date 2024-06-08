function Connect()
{
    var ip = "192.168.1.150"
    var port = "8080"
    const apiUrl = `http://${ip}:${port}/`;
    return apiUrl
}
function GetShopItems()
{
    var apiUrl = Connect()
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", apiUrl + "products_list", false );
    xmlHttp.send(); 
    var response = xmlHttp.response
    response = JSON.parse(response)
    return response
}
function PlaceOrder(email, phone, name, id)
{   
    var apiUrl = Connect()
    var xmlHttp = new XMLHttpRequest();
    var json = JSON.stringify({
        "values": email, phone, name, id
    })
    xmlHttp.open( "POST", apiUrl + "place_order", false);
    xmlHttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xmlHttp.send(json)
}

export {GetShopItems, PlaceOrder};