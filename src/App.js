// import React, { useState, useEffect } from 'react'
// // // import afaaq from "./afaaq.txt"

// const App = () => {

//     //     // Using fetch Api.......................................

//     //     // const Fetch=()=>{
//     //     // console.log("Before then")
//     //     // fetch( " https://api.github.com/users/imtiyazkumar/following").
//     //     // then((response)=> response.json()).
//     //     // then((data)=>console.log(data))
//     //     // console.log("after then")
//     //     // }



//     //     // Using async/await........................................



//     //     // async function second() {

//     //     //     const ab= await fetch( afaaq)
//     //     //     const d= await ab.text()
//     //     //     return d
//     //     // } 
//     //     // let a=second();

//     //     // In return at bottom, we have a div with "then" corresponding to the async/await when promise is resolved


//     //     // const copiedVar=`{
//     //     //     "word": "example",
//     //     //     "results": [
//     //     //       {
//     //     //         "definition": "a representative form or pattern",
//     //     //         "partOfSpeech": "noun",
//     //     //         "synonyms": [
//     //     //           "model"
//     //     //         ],
//     //     //         "typeOf": [
//     //     //           "representation",
//     //     //           "internal representation",
//     //     //           "mental representation"
//     //     //         ],
//     //     //         "hasTypes": [
//     //     //           "prefiguration",
//     //     //           "archetype",
//     //     //           "epitome",
//     //     //           "guide",
//     //     //           "holotype",
//     //     //           "image",
//     //     //           "loadstar",
//     //     //           "lodestar",
//     //     //           "microcosm",
//     //     //           "original",
//     //     //           "paradigm",
//     //     //           "pilot",
//     //     //           "prototype",
//     //     //           "template",
//     //     //           "templet",
//     //     //           "type specimen"
//     //     //         ],
//     //     //         "derivation": [
//     //     //           "exemplify"
//     //     //         ],
//     //     //         "examples": [
//     //     //           "I profited from his example"
//     //     //         ]
//     //     //       },
//     //     //       {
//     //     //         "definition": "something to be imitated",
//     //     //         "partOfSpeech": "noun",
//     //     //         "synonyms": [
//     //     //           "exemplar",
//     //     //           "good example",
//     //     //           "model"
//     //     //         ],
//     //     //         "typeOf": [
//     //     //           "ideal"
//     //     //         ],
//     //     //         "hasTypes": [
//     //     //           "pacemaker",
//     //     //           "pattern",
//     //     //           "beauty",
//     //     //           "prodigy",
//     //     //           "beaut",
//     //     //           "pacesetter"
//     //     //         ],
//     //     //         "derivation": [
//     //     //           "exemplify",
//     //     //           "exemplary"
//     //     //         ]
//     //     //       },
//     //     //       {
//     //     //         "definition": "an occurrence of something",
//     //     //         "partOfSpeech": "noun",
//     //     //         "synonyms": [
//     //     //           "case",
//     //     //           "instance"
//     //     //         ],
//     //     //         "typeOf": [
//     //     //           "happening",
//     //     //           "natural event",
//     //     //           "occurrence",
//     //     //           "occurrent"
//     //     //         ],
//     //     //         "hasTypes": [
//     //     //           "clip",
//     //     //           "mortification",
//     //     //           "piece",
//     //     //           "time",
//     //     //           "humiliation",
//     //     //           "bit"
//     //     //         ],
//     //     //         "derivation": [
//     //     //           "exemplify"
//     //     //         ],
//     //     //         "examples": [
//     //     //           "but there is always the famous example of the Smiths"
//     //     //         ]
//     //     //       },
//     //     //       {
//     //     //         "definition": "an item of information that is typical of a class or group",
//     //     //         "partOfSpeech": "noun",
//     //     //         "synonyms": [
//     //     //           "illustration",
//     //     //           "instance",
//     //     //           "representative"
//     //     //         ],
//     //     //         "typeOf": [
//     //     //           "information"
//     //     //         ],
//     //     //         "hasTypes": [
//     //     //           "excuse",
//     //     //           "apology",
//     //     //           "specimen",
//     //     //           "case in point",
//     //     //           "sample",
//     //     //           "exception",
//     //     //           "quintessence",
//     //     //           "precedent"
//     //     //         ],
//     //     //         "derivation": [
//     //     //           "exemplify",
//     //     //           "exemplary"
//     //     //         ],
//     //     //         "examples": [
//     //     //           "this patient provides a typical example of the syndrome",
//     //     //           "there is an example on page 10"
//     //     //         ]
//     //     //       },
//     //     //       {
//     //     //         "definition": "punishment intended as a warning to others",
//     //     //         "partOfSpeech": "noun",
//     //     //         "synonyms": [
//     //     //           "deterrent example",
//     //     //           "lesson",
//     //     //           "object lesson"
//     //     //         ],
//     //     //         "typeOf": [
//     //     //           "monition",
//     //     //           "admonition",
//     //     //           "word of advice",
//     //     //           "warning"
//     //     //         ],
//     //     //         "derivation": [
//     //     //           "exemplary"
//     //     //         ],
//     //     //         "examples": [
//     //     //           "they decided to make an example of him"
//     //     //         ]
//     //     //       },
//     //     //       {
//     //     //         "definition": "a task performed or problem solved in order to develop skill or understanding",
//     //     //         "partOfSpeech": "noun",
//     //     //         "synonyms": [
//     //     //           "exercise"
//     //     //         ],
//     //     //         "typeOf": [
//     //     //           "lesson"
//     //     //         ],
//     //     //         "examples": [
//     //     //           "you must work the examples at the end of each chapter in the textbook"
//     //     //         ]
//     //     //       }
//     //     //     ],
//     //     //     "syllables": {
//     //     //       "count": 3,
//     //     //       "list": [
//     //     //         "ex",
//     //     //         "am",
//     //     //         "ple"
//     //     //       ]
//     //     //     },
//     //     //     "pronunciation": {
//     //     //       "all": "ɪɡ'zæmpəl"
//     //     //     },
//     //     //     "frequency": 4.67
//     //     //   }`


//     //     // const newVar=JSON.parse(copiedVar)
//     //     // let def=document.getElementById('myId')
//     //     // let newVar2=newVar["results"]

//     //     // let str="";
//     //     // newVar2.forEach(element => {
//     //     //     str+=`<li>${element.definition}</li>`


//     //     // });
//     //     // console.log(str)
//     //     // def.innerHTML=str;







//     //     // Learning regex and its various functions...............

//     //     // let reg = /Afaaq/g;

//     //     // let str = " is a great guy Afaaq and Afaaq is greatest afaaq afaaq afaaq afaaq";
//     //     // let p1=reg.exec(str)
//     //     // console.log(p1)


//     //     // let p2=reg.test(str)
//     //     // console.log(p2)

//     //     // let p3=str.match(reg)
//     //     // console.log(p3)

//     //     // let p4=str.replace(reg,"Majeed")
//     //     // console.log(p4)


//     //     // let p5=str.search(reg)
//     //     // console.log(p5)



//     //     // let reg = /zbc$/g;

//     //     // let str = "hello Aaaasasasdefdcsdefeed zbc";
//     //     // let f = reg.exec(str)
//     //     // console.log(f)
//     //     // ^
//     //     // $
//     //     // .
//     //     // *
//     //     // []


//     // Alarm clock program


//     // let oldDate = new Date("July 19 2022 14:27:22");
//     // let currTime = new Date()

//     // let result = oldDate - currTime
//     // console.log(result)

//     // var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');



//     // console.log("Input tag is ", myInput.value)


//     // function playingFunc() {

//     //     if (result >= 0) {
//     //         setTimeout(() => {

//     //             console.log("playing")
//     //             audio.play();

//     //         }, result);

//     //     }
//     //     else {
//     //         console.log("Waiting")
//     //     }

//     // }

//     // playingFunc()


//     //**************** */ Understanding the  for in loop and for of loop********************************

//     // let object = {
//     //     name: "Afaq",
//     //     age: 26
//     // }


//     // for (let key in object) {
//     //     console.log(object[key])
//     // }



//     //    ********      Creating a wall clock                *********** //
//     const hourMinuteSecond = new Date()
//     const hours = hourMinuteSecond.getHours()
//     const minutes = hourMinuteSecond.getMinutes()
//     const [seconds, setSeconds] = useState(hourMinuteSecond.getSeconds())
//     console.log(seconds)
//     // console.log(hours)
//     // console.log(minutes)


//     useEffect(() => {
//         setInterval(() => {

//             if (seconds <= 59) {
//                 setSeconds(seconds + 1)
//             }
//             else {
//                 setSeconds(60 - seconds)
//             }






//         }, 1000);


//     }, [seconds])
















//     return (
//         <>


//             {/* <input type="text" id="myInput" placeholder="Enter time" />
//             <button id="myButton" onClick={playingFunc}>SetAlarm</button> */}
//             {/* <div>
//     {
//     a.then((data)=>console.log(data))
//     }
//     </div> */}

//             {/* <div id='myId'>
//                 hello
//             </div> */}

//             <div>
//                 {`${hours}:${minutes}:${seconds}`}
//             </div>

//         </>
//     )
// }


// export default App

// // import { useRef, useEffect } from 'react';

// // const App = () => {
// //     const ref = useRef(null);
// //     const inputRef = useRef(null);
// //     var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
// //     let oldDateTime = new Date("July 19, 2022 1:05:00");
// //     let newDateTime = new Date()
// //     let noOfMilliSeconds = oldDateTime - newDateTime
// //     console.log(noOfMilliSeconds)

// //     useEffect(() => {

// //         const handleClick = event => {
// //             console.log('Button clicked');
// //             play()
// //         };
// //         const play = () => {

// //             if (noOfMilliSeconds >= 0) {
// //                 setTimeout(() => {

// //                     console.log("playing")
// //                     audio.play()


// //                 }, noOfMilliSeconds);

// //             }
// //             else {
// //                 console.log("Waiting")
// //             }
// //         }

// //         const element = ref.current;
// //         const element2 = inputRef.current.value;
// //         element.addEventListener('click', handleClick);

// //     }, [])

// //     return (
// //         <div>
// //             <button ref={ref}>Click</button>
// //             <input type="text" ref={inputRef} placeholder="Enter like July 19, 2022 11:39:00" />
// //         </div>
// //     );
// // };

// // export default App;




import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Profile from './Profile.js';
// import { useState } from 'react';
function App() {
    // const [bt, setbt] = useState(false);
    function check() {
        var checkBox = document.getElementById("flexCheckDefault1");
        var text = document.getElementById("text");
        if (checkBox.checked == true) {
            text.style.display = "block";
        } else {
            text.style.display = "none";
        }
    }
    function check2() {
        var checkBox = document.getElementById("flexCheckDefault2");
        var text = document.getElementById("text2");
        if (checkBox.checked == true) {
            text.style.display = "block";
        } else {
            text.style.display = "none";
        }
    }
    function check3() {
        var checkBox = document.getElementById("flexCheckDefault3");
        var text = document.getElementById("text3");
        if (checkBox.checked == true) {
            text.style.display = "block";
        } else {
            text.style.display = "none";
        }
    }
    function check4() {
        var checkBox = document.getElementById("flexCheckDefault4");
        var text = document.getElementById("text4");
        if (checkBox.checked == true) {
            text.style.display = "block";
        } else {
            text.style.display = "none";
        }
    }
    function check5() {
        var checkBox = document.getElementById("flexCheckDefault5");
        var text = document.getElementById("text5");
        if (checkBox.checked == true) {
            text.style.display = "block";
        } else {
            text.style.display = "none";
        }
    }
    function check6() {
        var checkBox = document.getElementById("flexCheckDefault6");
        var text = document.getElementById("text6");
        if (checkBox.checked == true) {
            text.style.display = "block";
        } else {
            text.style.display = "none";
        }
    }
    function check7() {
        var checkBox = document.getElementById("flexCheckDefault7");
        var text = document.getElementById("text7");
        if (checkBox.checked == true) {
            text.style.display = "block";
        } else {
            text.style.display = "none";
        }
    }
    function check8() {
        var checkBox = document.getElementById("flexCheckDefault8");
        var text = document.getElementById("text8");
        if (checkBox.checked == true) {
            text.style.display = "block";
        } else {
            text.style.display = "none";
        }
    }

    function check9() {
        var checkBox = document.getElementById("flexCheckDefault9");
        var text = document.getElementById("text9");
        if (checkBox.checked == true) {
            text.style.display = "block";
        } else {
            text.style.display = "none";
        }
    }
    function check10() {
        var checkBox = document.getElementById("flexCheckDefault10");
        var text = document.getElementById("text10");
        if (checkBox.checked == true) {
            text.style.display = "block";
        } else {
            text.style.display = "none";
        }
    }


    return (
        <>


            <div className="container">



                <div className="first">
                    <div class="alert alert-primary alert-dismissible fade show mt-2" role="alert">
                        <strong>Welcome! </strong> Click the checkbox on completion of Rak'at.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>



                    <table class="table table-dark table-striped" >
                        <thead >
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Surah</th>
                                <th scope="col">Checks</th>
                                <th scope="col">Remainder</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>alam-tara</td>
                                <td>        <div class="form-check">
                                    <input class="form-check-input" type="checkbox" onClick={check} value="" id="flexCheckDefault1" />
                                    <label class="form-check-label" for="flexCheckDefault1">

                                    </label>


                                </div></td>
                                <td id="text" style={{ display: "none", color: "white" }}>completed</td>

                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>li-laafi</td>
                                <td>        <div class="form-check">
                                    <input class="form-check-input" onClick={check2} type="checkbox" value="" id="flexCheckDefault2" />
                                    <label class="form-check-label" for="flexCheckDefault2">

                                    </label>


                                </div></td>
                                <td id="text2" style={{ display: "none", color: "white" }}>completed</td>

                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>arayat-al</td>
                                <td>        <div class="form-check">
                                    <input class="form-check-input" onClick={check3} type="checkbox" value="" id="flexCheckDefault3" />
                                    <label class="form-check-label" for="flexCheckDefault3">

                                    </label>


                                </div></td>
                                <td id="text3" style={{ display: "none", color: "white" }}>completed</td>

                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>inna-atayna</td>
                                <td>        <div class="form-check">
                                    <input class="form-check-input" onClick={check4} type="checkbox" value="" id="flexCheckDefault4" />
                                    <label class="form-check-label" for="flexCheckDefault4">

                                    </label>


                                </div></td>
                                <td id="text4" style={{ display: "none", color: "white" }}>completed</td>

                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>kaafirun</td>
                                <td>        <div class="form-check">
                                    <input class="form-check-input" onClick={check5} type="checkbox" value="" id="flexCheckDefault5" />
                                    <label class="form-check-label" for="flexCheckDefault5">

                                    </label>


                                </div></td>
                                <td id="text5" style={{ display: "none", color: "white" }}>completed</td>

                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>iza-jaa</td>
                                <td>        <div class="form-check">
                                    <input class="form-check-input" onClick={check6} type="checkbox" value="" id="flexCheckDefault6" />
                                    <label class="form-check-label" for="flexCheckDefault6">

                                    </label>


                                </div></td>
                                <td id="text6" style={{ display: "none", color: "white" }}>completed</td>

                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td>lahab</td>
                                <td>        <div class="form-check">
                                    <input class="form-check-input" onClick={check7} type="checkbox" value="" id="flexCheckDefault7" />
                                    <label class="form-check-label" for="flexCheckDefault7">

                                    </label>


                                </div></td>
                                <td id="text7" style={{ display: "none", color: "white" }}>completed</td>

                            </tr>
                            <tr>
                                <th scope="row">8</th>
                                <td>ahad</td>
                                <td>        <div class="form-check">
                                    <input class="form-check-input" onClick={check8} type="checkbox" value="" id="flexCheckDefault8" />
                                    <label class="form-check-label" for="flexCheckDefault8">

                                    </label>


                                </div></td>
                                <td id="text8" style={{ display: "none", color: "white" }}>completed</td>

                            </tr>
                            <tr>
                                <th scope="row">9</th>
                                <td>al-naas</td>
                                <td>        <div class="form-check">
                                    <input class="form-check-input" onClick={check9} type="checkbox" value="" id="flexCheckDefault9" />
                                    <label class="form-check-label" for="flexCheckDefault9">

                                    </label>


                                </div></td>
                                <td id="text9" style={{ display: "none", color: "white" }}>completed</td>

                            </tr>
                            <tr>
                                <th scope="row">10</th>
                                <td>al-feeel</td>
                                <td>        <div class="form-check">
                                    <input class="form-check-input" onClick={check10} type="checkbox" value="" id="flexCheckDefault10" />
                                    <label class="form-check-label" for="flexCheckDefault10">

                                    </label>


                                </div></td>
                                <td id="text10" style={{ display: "none", color: "white" }}>completed</td>

                            </tr>







                        </tbody>
                    </table>
                    <Link to="/Profile">See the Rak'at and corresponding Surah</Link>


                    {/* <button type="button" onClick={click} class="btn btn-primary p-1">First two</button> */}
                </div>

            </div>

        </>

    );
}

export default App;




// Working with the clock project**********************

// import React, { useState, useEffect } from 'react';
// function App() {
//     const t = new Date()
//     console.log(t.toLocaleTimeString())


//     const [date, setDate] = useState(new Date());

//     function refreshClock() {
//         setDate(new Date());
//     }
//     useEffect(() => {


//         setInterval(() => {
//             refreshClock()
//         }, 1000);

//     }, []);
//     return (
//         <span>
//             {date.toLocaleTimeString()}
//         </span>
//     );
// }
// export default App




// import React from 'react'

// import { DndProvider } from 'react-dnd'
// import { HTML5Backend } from 'react-dnd-html5-backend'
// import DragDrop from './components/DragDrop'


// const App = () => {
//     return (

//         <DndProvider backend={HTML5Backend}>
//             <div>Drag and drop an Image into the box</div>
//             <DragDrop />
//         </DndProvider>
//     )
// }

// export default App