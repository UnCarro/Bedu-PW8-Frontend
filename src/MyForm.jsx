import axios from "axios"

export function MyForm() {

    const handleSubmit = () => {
        axios.post("",
            {})
            .then()
            .catch();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Nombre de entrevistador:
                <input id="interviewerName" type="text" />
            </label>
        </form>
    )
}