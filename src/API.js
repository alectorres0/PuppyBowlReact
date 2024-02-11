const baseURL = "https://fsa-puppy-bowl.herokuapp.com/api/2308-acc-pt-web-pt-b"

export async function fetchPlayers(){
try{
const result = await fetch(`${baseURL}/players`);
const data = await result.json();
console.log(data.data.players);
return data.data.players;
}catch(err){
console.log(err)
}
}

export async function deletePlayer(id){
    try{
        const response = await fetch(`${baseURL}/players/${id}`,
            {
              method: 'DELETE',
            }
          );
          const result = await response.json();
          console.log(result);
    }
    catch(err){
        console.error(err);
    }
}

export async function postPlayer(name, breed, id){
    try {
        const response = await fetch(
          `${baseURL}/players`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: name,
              breed: breed,
              id: id
            }),
          }
        );
        const result = await response.json();
        console.log(result);
      } catch (err) {
        console.error(err);
      }
      
}

export async function fetchSingle(id){
  try {
    const response = await fetch(
      `${baseURL}/players/${id}`
    );
    const result = await response.json();
    return (result.data.player);
  } catch (err) {
    console.error(err);
  }
}