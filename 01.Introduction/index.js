// Learn How the react is created

// React: Blueprint deta hai ki element kaise create hoga 
// React DOM: Actually mein element create karta hai

const root = document.getElementById("root");

const React = 
{
    createElement: function(tagName, attributes, textContent)
    {
        return {
                    tagName: tagName,
                    attributes: {
                        ...attributes, 
                    },
                    textContent: textContent
                }        
    }
}

const ReactDOM = 
{

    render: function(tag,rootEle)
    {
        const element = document.createElement(tag.tagName)

        for(key in tag.attributes)
        {
            if(key == "style")
            {
                Object.assign(element.style, tag.attributes.style);
                
                
            }
            else
            {
                element[key] = tag.attributes[key];
                console.log(tag.attributes[key]);
                
            }
        }
        
        element.textContent = tag.textContent;

        console.log(element.textContent);
        

        rootEle.append(element);
    },
}


const ele1 = React.createElement("h1",{id: "first", className: "class1", style: {height: "20px", width: "20px"}},"Hello");
const ele2 = React.createElement("h1",{id: "second", className: "class2", style: {height: "20px", width: "20px"}},"Hii");
const ele3 = React.createElement("div", {id: "third", className: "class3", style: {height: "20px", width: "20px"}}, "Bye Bye")

console.log(ele1);

ReactDOM.render(ele1,root);
ReactDOM.render(ele2,root);
ReactDOM.render(ele3,root);
