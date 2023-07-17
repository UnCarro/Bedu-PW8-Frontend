import axios from "axios"
import { useState } from "react";

export function MyForm() {

    const [interviewerName, setInterviewerName] = useState("");
    const [interviewerLastName, setInterviewerLastName] = useState("");
    const [interviewerEmail, setInterviewerEmail] = useState("");

    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const interviewerWrapper = {
        name: "",
        lastName: "",
        email: "",
        isActive: false
    }

    const handleOnChangeName = (event) => {
        setInterviewerName(
            event.target.value
        )

    }

    const handleOnChangeLastName = (event) => {
        setInterviewerLastName(
            event.target.value
        )

    }


    const handleOnChangeEmail = (event) => {
        setInterviewerEmail(
            event.target.value
        )

    }


    const handleSubmit = () => {

        interviewerWrapper.name = interviewerName;
        interviewerWrapper.lastName = interviewerLastName;
        interviewerWrapper.email = interviewerEmail;

        axios({
            url: "http://localhost:8080/add-interviewer",
            method: "post",
            data: interviewerWrapper
        })
            .then(response => {
                setIsSuccess(true);
                setTimeout(() => {
                    setIsSuccess(false)
                }, 5000)
            }
            )
            .catch(
                e => {

                    setIsError(true);
                    setErrorMessage(e.response.data.message);
                    setTimeout(() => {
                        setIsError(false)
                    }, 5000)
                }
            );
    }

    return (
        <>
            <div>

                {isSuccess && <div className="success">Success!</div>}
                {isError && <div className="error">{errorMessage}.<br /> Please try again.</div>}


                <div>
                    <form onSubmit={handleSubmit}>
                        <label>Nombre del entrevistador:
                            <input id="interviewerName" onChange={handleOnChangeName} type="text" placeholder="enter interviewer name" />
                        </label>
                        <br />
                        <label>Apellido del entrevistador:
                            <input id="interviewerLastName" onChange={handleOnChangeLastName} type="text" placeholder="enter interviewer Last name" />
                        </label>
                        <br />
                        <label>Email del entrevistador:
                            <input id="interviewerEmail" onChange={handleOnChangeEmail} type="email" placeholder="enter interviewer Email" />
                        </label>

                    </form>
                    <br />
                    <button onClick={handleSubmit}>Submit</button>
                </div>

            </div>

        </>
    )
}