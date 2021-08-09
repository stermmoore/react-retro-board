function Ticket(props) {

    return (
        <div>
            <div onClick={() => props.remove(props.id)}>X</div>
            <div>{props.description}</div>
        </div>
    )
}

export default Ticket;