import axios from "axios"

export function MyForm() {

    const handleSubmit = (event) => {
        console.log(event);
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
                    <input id="interviewerName" type="text" />
                </label>
            </form>
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}