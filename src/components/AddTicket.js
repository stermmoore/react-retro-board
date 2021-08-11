import { useState } from "react";

function AddTicket({ addTicket }) {

    const [newTicketText, setNewTicketText] = useState("");

    const onAddTicketCallback = () => {
        setNewTicketText("");
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(newTicketText.length<1)
            return;


        addTicket(newTicketText, onAddTicketCallback)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <textarea value={newTicketText} onChange={e => setNewTicketText(e.target.value)} />
            </label>
            <input type="submit" value="Add" />
        </form>
    )
}

export default AddTicket;