
const root = document.getElementById("root");
let count = 0;

function Counter(count)
{
    root.innerHTML = `<h1>Counter for JS: ${count}</h2>
     <button onClick = "Counter(count++)">Increase</button>
     <button onClick = "Counter(count--)">Decrease</button>
    `
}

Counter(count);