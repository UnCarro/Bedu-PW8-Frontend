import axios from "axios"
import { useState } from "react";

export function MyForm() {

    const [interviewerName, setInterviewerName] = useState("");
    const [interviewerLastName, setInterviewerLastName] = useState("");
    const [interviewerEmail, setInterviewerEmail] = useState("");

    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("Unexpected Error");

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
                        setErrorMessage("Unexpected Error")
                    }, 5000)
                }
            );
    }

    return (
        <> 
        <div class="image-container">                
            <img src="https://cdn-icons-png.flaticon.com/512/2179/2179306.png" alt="InTecViewLogo" />
            <h3>Interviewers Registration</h3>
        </div>
        
            <div class="form-wrapper dark">  
           
                <div >
                    <form onSubmit={handleSubmit}>
                        <label class="text"><span>Name:</span>
                        <div class="input-wrapper">
                            <input id="interviewerName" onChange={handleOnChangeName} type="text" placeholder="Enter interviewer name" />
                            </div>
                        </label>
                        <br />
                        <label class="text"><span>Last name:</span>
                        <div class="input-wrapper">
                            <input id="interviewerLastName" onChange={handleOnChangeLastName} type="text" placeholder="Enter interviewer Last name" />
                            </div>
                        </label>
                        <br />
                        <label class="text"><span>Email:</span>
                        <div class="input-wrapper">
                            <input id="interviewerEmail" onChange={handleOnChangeEmail} type="email" placeholder="Enter interviewer Email" />
                            </div>
                        </label>
                        
                    </form>
                    <br />
                    <div class="result-wrapper">
                        {isSuccess && <div className="success">Success!</div>}
                        {isError && <div className="error">We are having issues processing your request. <br />Reason: {errorMessage}</div>}
                    </div>
                    <br />
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </>
    )
}