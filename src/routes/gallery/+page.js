export async function load({fetch}){
    const albums = await fetch(`${import.meta.env.VITE_APIURL}/album/${import.meta.env.VITE_USERID}`, {
        method: "get",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(r=>r.json())
        .then((response)=>{
            if(response.error){
                return [];
            }else{
                return response;
            }
        })
        .catch((err)=>{
            return [];
        });

    return {albums};
}
