import Ticket from "./Ticket";
import { useState } from "react";

function BoardSection(props) {
    const initialTickets = [{id:1, description:"test description"},{id:2, description:"banana"}];

    const [tickets, updateTickets] = useState(initialTickets);

    function remove(id) {
        let newTickets = tickets.filter(t => t.id != id);
        updateTickets(newTickets);
    }

    return (
        <div class="flex-child">
            <h2>{props.name}</h2>
            {tickets.map(t => <Ticket {...t} remove={remove}></Ticket>)}
        </div>
    )
}

export default BoardSection;