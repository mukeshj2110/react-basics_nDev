// div 
//     div 
//         h1
//     div 
// div


const parent1  = React.createElement("div",{
    id: "parent"
} , React.createElement("div",{id: "child"}, React.createElement("h1",{} , "im h1 tag")));


//If you want to add sibiling to h1 tag you need to create array
// div 
//     div 
//         h1
//         h1
//     div 
// div

const parent  = React.createElement("div",{
    id: "parent"
} , React.createElement("div",{id: "child"}, 
    [React.createElement("h1",{} , "im h1 tag"),React.createElement("h1",{} , "im h1 tag 2")]));

const heading  = React.createElement("h1",{
    id: "heading"
} , "hello from react!!");

const root = ReactDOM.createRoot(document.getElementById("root"));


console.log(heading);  //***************IMP */

root.render(parent);