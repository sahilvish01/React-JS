// React Rivision

const root = document.getElementById("root");

const React = 
{
    createElement(tagName, attributes, content)
    {
        let element = document.createElement(tagName);

        for(key in attributes)
        {
            console.log(key);
            
            if(key == "style")
            {
                Object.assign(element[key], attributes[key])
            }
            else
            {
                element[`${key}`] = attributes[`${key}`];
            }

        }

        element.textContent = content;

        return element;
    }
}

const ReactDOM = 
{
    root: undefined,

    createRoot(element)
    {
        this.root = element;
    },

    render(element)
    {
        this.root.append(element);
    }
}


ReactDOM.createRoot(root);

const ele1 = React.createElement("h1", {id:"first", className: "class1", style:{height: "100px", width: "100px", backgroundColor: "black"}}, "Hello");

console.dir(ele1.style);

ReactDOM.render(ele1);