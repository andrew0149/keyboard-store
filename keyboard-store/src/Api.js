
function GetShopItems()
{
    var ip = ""
    var port = ""
    var xmlHttp = new XMLHttpRequest();
    const apiUrl = `http://${ip}:${port}/products_list`;

    xmlHttp.open( "GET", apiUrl, false );
    xmlHttp.send(); 
    var response = xmlHttp.response
    response = JSON.parse(response)
    return response
}



export default GetShopItems;