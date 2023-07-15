import axios from "axios"



export function MyForm() {

    const handleSubmit = () => {
        axios.post()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input type="text" />
            </label>
        </form>
    )
}