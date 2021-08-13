import Ticket from "./Ticket";
import AddTicket from "./AddTicket";
import { useState, useContext } from "react";
import { ColourThemeContext } from "../contexts/ColourThemeProvider"



function BoardSection(props) {
    const initialTickets = [];

    const [tickets, updateTickets] = useState(initialTickets);
    const {theme} = useContext(ColourThemeContext);

    function removeTicket(id) {
        let newTickets = tickets.filter(t => t.id !== id);
        updateTickets(newTickets);
    }

    function addTicket(newTicketText, addNewTicketCallback) {
        const newTicketId = tickets.length === 0? 1 : Math.max(...tickets.map(t => t.id)) + 1;
        const newTickets = [...tickets, {id:newTicketId, description:newTicketText}];
        updateTickets(newTickets);
        if(addNewTicketCallback)
        {
            addNewTicketCallback();
        }
    }

    return (
        <div className="flex-child">
            <h2>{props.name}</h2>
            {tickets.map(t => <Ticket key={t.id} {...t} removeTicket={removeTicket}></Ticket>)}
            <AddTicket addTicket={addTicket}></AddTicket>
        </div>
    )
}

export default BoardSection;