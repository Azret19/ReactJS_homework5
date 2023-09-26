import React from "react";
import {useState} from "react";

export default function PrototypeForm() {
    const [person, setPerson] = useState({
        key1: 'Barbara',
        key2: 'Hepworth',
        key3: 'bhepworth@react.com',
        key4: 'love cats'
    })

    function handleFirstNameChange(e) {
        setPerson({
            ...person,
            key1: e.target.value
        })
    }

    function handleLastNameChange(e) {
        setPerson({
            ...person,
            key2: e.target.value
        })
    }

    function handleUrlChange(e) {
        setPerson({
            ...person,
            key3: e.target.value
        })
    }

    function handlePreferenceChange(e) {
        setPerson({
            ...person,
            key4: e.target.value
        })
    }
    return (
        <div style={{
            marginLeft: "500px",
            marginRight: "500px",
        }}>
            <form style={{
                gap: "20px",
                backgroundColor: "peachpuff",
                marginTop: "100px",
                paddingTop: "100px",
                border: "solid",
                borderRadius: "16px",
                display: "flex",
                overflow: "hidden",
                flexDirection: "column",
                alignItems: "center",
                height: "400px",


            }}>
                <label style={{width: "250px"}}>
                    Firstname:
                    <input style={
                        {
                            backgroundColor: "lightyellow",
                            height: "2em",
                            maxWidth: "250px",
                        }
                    }
                           value={person.key1}
                           onChange={handleFirstNameChange}/>
                </label>
                <label style={{width: "250px"}}>
                    Lastname:
                    <input style={
                        {
                            backgroundColor: "lightyellow",
                            height: "2em",
                            maxWidth: "250px",
                        }
                    }
                           value={person.key2}
                           onChange={handleLastNameChange}/>
                </label>
                <label style={{width: "221px"}}>
                    Link to:
                    <input style={
                        {
                            backgroundColor: "lightyellow",
                            height: "2em",
                            maxWidth: "250px",
                        }
                    }
                           value={person.key3}
                           onChange={handleUrlChange}/>
                </label>
                <label style={{width: "263px"}}>
                    Preference:
                    <input style={
                        {
                            backgroundColor: "lightyellow",
                            height: "2em",
                            maxWidth: "250px",
                        }
                    }
                           value={person.key4}
                           onChange={handlePreferenceChange}
                    />
                </label>
                <p style={{textAlign: "center"}}>
                    <i>{person.key1}</i>
                    <br/>
                    <i>{person.key2}</i>
                    <br/>
                    <a href={person.key3}>{person.key3}</a>
                    <br/>
                    <i>{person.key4}</i>
                </p>
            </form>
        </div>
    )
}