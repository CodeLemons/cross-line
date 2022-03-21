import { useState } from "react";

const Home = () => {
    const [items, setItems] = useState('');
    const [list, setList] = useState([]);
    const groceryItem = {items};

    const handleSubmit = (e) => {
        e.preventDefault();
        addItemToArray(groceryItem);
        console.log(list);
        setItems('');
    };

    const addItemToArray = (item) => {
        setList(oldValue => [...oldValue, item]);
    };

    const crossLine = (e) => {
        const element = e.target;
        element.classList.toggle("crossed-line");
    };

    
    return ( 
        <div className="home-page">
            <div className="add-form">
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text"
                    id="form-box" 
                    value={items}
                    onChange={(e) => setItems(e.target.value)}
                    />
                    <button>Add</button>
                </form>
            </div>
            <div className="item-list">
                {list.map((listItems) => {
                    return (
                        <li onClick={crossLine} key={listItems.uniqueId}>{listItems.items}</li>
                    )
                })}
            </div>
        </div>
     );
}
 
export default Home;