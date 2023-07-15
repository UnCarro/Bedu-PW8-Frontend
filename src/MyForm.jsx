import axios from "axios"
import { useState } from "react";

export function MyForm() {


    const [interviewerName, setInterviewerName] = useState("");

    const handleOnChange = (event) => {
        setInterviewerName(
            event.target.value
        )

        console.log(interviewerName);
    }

    const handleSubmit = () => {

        console.log(interviewerName);
        // axios.post("/test",
        //     { a: event.target.value })
        //     .then(response => {
        //         console.log(response);
        //     }
        //     )
        //     .catch(
        //         e => {
        //             console.log(e);
        //         }
        //     );
    }

    return (
        <>
            <form >
                <label>Nombre de entrevistador:
                    <input id="interviewerName" onChange={handleOnChange} defaultValue="" value={interviewerName} type="text" placeholder="enter interviewer name" />
                </label>
            </form>
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}