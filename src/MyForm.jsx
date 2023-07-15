import axios from "axios"
import { useState } from "react";

export function MyForm() {


    const [interviewerName, setInterviewerName] = useState("");
    const [interviewerLastName, setInterviewerLastName] = useState("");
    const [interviewerEmail, setInterviewerEmail] = useState("");

    const interviewerWrapper = {
        name: "",
        lastName: "",
        email: ""
    }

    const handleOnChangeName = (event) => {
        setInterviewerName(
            event.target.value
        )

        console.log(interviewerName);
    }

    const handleOnChangeLastName = (event) => {
        setInterviewerLastName(
            event.target.value
        )

        console.log(interviewerLastName);
    }


    const handleOnChangeEmail = (event) => {
        setInterviewerEmail(
            event.target.value
        )

        console.log(interviewerEmail);
    }

    const handleSubmit = () => {

        interviewerWrapper.name = interviewerName;
        interviewerWrapper.lastName = interviewerLastName;
        interviewerWrapper.email = interviewerEmail;


        console.log(interviewerWrapper);
        axios.post("http://localhost:8080/add-interviewer", { interviewerWrapper }
        )
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
                <label>Nombre del entrevistador:
                    <input id="interviewerName" onChange={handleOnChangeName} type="text" placeholder="enter interviewer name" />
                </label>
                <label>Apellido del entrevistador:
                    <input id="interviewerLastName" onChange={handleOnChangeLastName} type="text" placeholder="enter interviewer Last name" />
                </label>
                <label>Email del entrevistador:
                    <input id="interviewerEmail" onChange={handleOnChangeEmail} type="text" placeholder="enter interviewer Email" />
                </label>


            </form>
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}