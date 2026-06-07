// React Basics: 

    const ele1 = React.createElement("h1", {id: "first", className: "class1", style: {backgroundColor: "orange", color: "white"},},"Jai Shree Ganesh");

    const root = ReactDOM.createRoot(document.querySelector("#root"));

    root.render(ele1);


// JSX

    const element1 = (<h1>Jai Shree Ganeshaye Namah</h1>);

    root.render(element1);

    const element2 = (

            // Java Script fragmentation
            <>            
                <h1>Jai Shree Ganesh</h1>
                <h1>Jai Shree RadheKrishna</h1>
            </> 
        )

        // Ek se jyada HTML element create karke store karna ho to unhe ek hi element wrap up karke karna hota hai kyuki agar alag alag element rahenge to variable mein kaun sa element store kare ye confusion aayegi and error fekega


// React Component

    // React component is just a javascript function jo jsx return karta hai

    // function App()
    // {
    //     return (
    //         <>
    //             <h1> Hello </h1>
    //             <h1> Hii </h1>                
    //         </>
    //     )
    // }


    // Calling of React Component: 

        // const element3 = App();
        // const element3 = <App/>

        // root.render(element3);


// Passing value to the React Component:

    // function App(name)
    // {
    //     return (
    //         <>
    //             <h1> Hello {name} </h1>
    //             <h1> Hii {name} </h1>                
    //         </>
    //     )
    // }

    // root.render(App("Sahil"))
    
    // Curly Brace {} -> Iske andar JavaScipt Expression likh sakte hai

    // JavaScript Expression: JavaScript ka vah code jo keval ek value produce kare

    // Some of datatype can be written inside curly braces:

        // 1. Number, String, Array -> render
        // 2. Boolean, undefined, null -> render but will not display in UI
        // 3. Object -> Not render and will give error

    // Array isliye allowed hota hai curly braces ke andar:

        // 1. Array index ke through iteratable hota hai                // myself
        // 2. Array mein ham map, reduce, filter etc laga sakte hai
        // 3. Backend se jyadatar data array ke form mein hi aata hai

    // Array inside curly baraces:

        // function App(courses)
        // {
        //     return (
        //         <>
        //             <ul> {courses} </ul>
        //         </>
        //     )
        // }

        // function App(courses)
        // {
        //     return (
        //         <>
        //             <ul id="list" className="class1" style={{backgroundColor: "orange", color: "white"}}>

        //                 { courses.map(course => <li> {course} </li>) }

        //             </ul>
        //         </>
        //     )
        // }

        // root.render(App(["HTML", "CSS", "JS"]))

        
// Props in React: 

    // Jab ham React component ko call karte hai and vaha jo jo attributes present hote hai unka ek object bana kar uss react component ko paas kar diya jata hai use hi props kahte hai

    function App(props)
    {
        return (
            <>
                <h1>Your Name: {props.name}</h1>
                <h1>Age: {props.age}</h1>
            </>
        )
    }

    root.render(<App name="Sahil" age="19"></App>)


// React Component ke name ka first letter isliye capital rahta hai taki babel differentiate ki use HTML ka element banana hai ya React Component ko call karna hai


// Babel is a javascript transpiler that is the kind of compiler

// Compiler: Converts High Level language to Low level language
// Transpiler: Converts from one language to another language that is present in same level of abstraction