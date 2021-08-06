import BoardSection from "./BoardSection";

function Board(props) {

    return (
        <div class="flex-container">
            <BoardSection name="Start"></BoardSection>
            <BoardSection name="Stop"></BoardSection>
            <BoardSection name="Continue"></BoardSection>
        </div>
    )
}

export default Board;