import axios from "axios"
import { useState } from "react";

export function MyForm() {


    const [interviewerName, setInterviewerName] = useState({});

    const handleOnChange = (event) => {
        setInterviewerName(
            {
                Name: event.target.value,
                lastName: "",
                email: "",
                isActive: ""
            }
        )

        console.log(interviewerName);
    }

    const handleSubmit = () => {

        console.log(interviewerName);
        axios.post("http://localhost:8080/add-interviewer",
            {
                interviewerName
            })
            .then(response => {
                console.log(response);
            }
            )
            .catch(
                e => {
                    console.log(e);
                }
            );
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Nombre de entrevistador:
                    <input id="interviewerName" onChange={handleOnChange} type="text" placeholder="enter interviewer name" />
                </label>

            </form>
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}