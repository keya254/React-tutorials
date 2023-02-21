import { useState } from "react";

//import { useState } from "react";
const Content =()=>{

    const [name, setName] = useState("bob")
    const [count, setCount] = useState(0);

    const handleNameChange = () =>{
        const names =["Bob","kevin","carl","jibro"];
        const int = Math.floor(Math.random() * 4);
        setName(names[int]);
    };
    const handleclick  = () =>{
        console.log("button clicked");

    };

    const handleClickusestate = () => {
        console.log("double click")
    }

    const handleClick6 = () => {
        setCount(count+1);
    }

    const handleClick2 = (name) => {
        console.log(`${name} Has Clicked the button`);
    };

    const handleClick3 = (e) => {
       // console.log(e.target.className);
        //alert(e.target.innerText)
        window.open("https://www.mozilla.org/", "mozillaWindow","popup")

    // const handleClick4 = () => {
    //     console.log(this);
    // }

    };
    return(
    <main>
        <p onDoubleClick={handleClickusestate}>Hello {name}!</p>

        <p onDoubleClick={handleClickusestate}>Count {count}!</p>

        <button onClick={handleclick}>click me</button>
        <button onClick={() => handleClick2("Kevin")}>Kevin</button>
        <button onClick={() => handleClick2("Jibro")}>jibro</button>
        <button onClick={() => handleClick2("Daniel")}>Daniel</button>

        <button className="Daniel" onClick={(e) => handleClick3 (e)}>My name is Daniel</button>

        <button className="Daniel" onClick={handleNameChange}>using useState</button>

        <button
            onClick={handleClick6}>Click Me
        </button>

        {/* <button onClick={() => this.handleClick4 ()}>my ooh my</button> */}
    </main>
    );
};

export default Content;