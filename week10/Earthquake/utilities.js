 export async function getJSON(url){
    try{
        const response =  await fetch(url);
        if (!response.ok) {
            throw Error(response.statusText);
        } else {
            const data = response.json();
            return data;
        }

    }catch(error){
        console.log(error);

    }
}

export const getLocation = function(options) {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};