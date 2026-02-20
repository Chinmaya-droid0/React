const heading = React.createElement('h1', {id: "heading"}, "Hello, React!");
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(heading);

 // Nested structure
 const parent = React.createElement("div",{id:"parent"},[
     React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"An h1 Tag"),
        React.createElement("h2",{},"An h2 Tag")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"An h1 Tag"),
        React.createElement("h2",{},"An h2 Tag")
    ])]
);
 root.render(parent);