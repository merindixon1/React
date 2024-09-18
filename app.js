// const heading = React.createElement("h1",
//     {
//         id:"heading"
//     },
//     "HELLO WORLD FROM REACT");

const parent = React.createElement("div",{id:"parent"},[
    
        React.createElement("div",{id:"child1"},
     [React.createElement("h1",{},"I AM A H1 TAG"),
     React.createElement("h2",{},"I AM A H2 TAG"),
     React.createElement("h1",{},"I AM A H2 TAG")]),
      React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"I AM A H1 TAG"),
        React.createElement("h2",{},"I AM A H2 TAG"),
        React.createElement("h1",{},"I AM A H2 TAG") ]),
    ]);
   

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);



