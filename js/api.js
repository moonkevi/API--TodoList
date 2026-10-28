export async function getData(){
    try{
        const response = await fetch("https://dummyjson.com/todos");

        if(!response.ok){
            throw new Error(`failed to fetch todos`);
        }

        const data = await response.json();
        return data.todos;
    }
    catch(error){
        console.error(`error fetching todos: ${error}`)
        return null;
    }
}