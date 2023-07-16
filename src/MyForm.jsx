import axios from "axios"
import { useState } from "react";

export function MyForm() {


    const [interviewerName, setInterviewerName] = useState("");
    const [interviewerLastName, setInterviewerLastName] = useState("");
    const [interviewerEmail, setInterviewerEmail] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

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
        axios({
            url: "http://localhost:8080/add-interviewer",
            method: "post",
            data: interviewerWrapper
        })
            .then(response => {
                console.log("Success! " + response);
                setIsSuccess(true);
                setTimeout(() => {
                    setIsSuccess(false)
                }, 5000)
            }
            )
            .catch(
                e => {
                    setIsError(true);
                    setTimeout(() => {
                        setIsError(false)
                    }, 5000)
                    console.log("Error:" + e);
                }
            );
    }

    return (
        <>

            <div>
                <form onSubmit={handleSubmit}>
                    <label>Nombre del entrevistador:
                        <input id="interviewerName" onChange={handleOnChangeName} type="text" placeholder="enter interviewer name" />
                    </label>
                    <label>Apellido del entrevistador:
                        <input id="interviewerLastName" onChange={handleOnChangeLastName} type="text" placeholder="enter interviewer Last name" />
                    </label>
                    <label>Email del entrevistador:
                        <input id="interviewerEmail" onChange={handleOnChangeEmail} type="email" placeholder="enter interviewer Email" />
                    </label>

                </form>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <div>
                {isSuccess && <div className="success">Success!</div>}
                {isError && <div className="error">Something went wrong! Please try again.</div>}
            </div>
        </>
    )
}