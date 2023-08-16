import React from "react";
import ReactDOM from "react-dom/client";

import HeaderComponent from "./components/HeaderComponent";
import Body from "./components/Body";
import Footer from "./components/Footer";


// const heading1 = React.createElement("h1", {id:"head1", key:"h1"}, "Hello Everyone!");
// const container = React.createElement("div", {id:"container"}, [heading1, heading2]);
// console.log(container);
// const heading2 = <h3 id="title" key="h2">This is variable.</h3>


// Config Driven UI
// const config = [
//     {
//         type:"carousel",
//         cards:[
//             {
//                 offerName: "50% off",
//             },
//             {
//                 offerName: "Buy1 Get1",
//             },
//         ],
//     },
//     {
//         type: "restraunts",
//         cards:[
//             {
//                 name: "Kathi Roll Express",
//                 image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/nf9qvojawc3uhvg9rkv0",
//                 cuisines: ["Rolls", "Fast Food", "Burgers"],
//                 rating: "3.8"
//             },
//             {
//                 name: "Burger King",
//                 image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/nf9qvojawc3uhvg9rkv0",
//                 cuisines: ["Rolls", "Fast Food", "Burgers"],
//                 rating: "3.8" 
//             }, 
//         ]
//     }
// ]


// const kathiRoll = {
//     name: "Kathi Roll Express",
//     image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/nf9qvojawc3uhvg9rkv0",
//     cuisines: ["Rolls", "Fast Food", "Burgers"],
//     rating: "3.8"
// }




const AppLayout = () => {
    return (
        <>
            
            <HeaderComponent />
            <Body />
            <Footer />
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);