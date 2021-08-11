function Ticket({description, id, removeTicket}) {

    return (
        <div>
            <div onClick={() => removeTicket(id)}>X</div>
            <div>{description}</div>
        </div>
    )
}

export default Ticket;