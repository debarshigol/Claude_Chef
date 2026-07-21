export function MainBody(){
    return (
        <div className="take-ingredients">
            <h2 className="message">Generate your <span className="word-highlight">Recipe</span> with claude</h2>
            <form action="submit" className="display-from">
                <input type="text"
                placeholder="eg: Milk"
                className="input-sec" />
            <button className="add-button">+ Add Ingredients</button>
        </form>
    </div>
    )
}