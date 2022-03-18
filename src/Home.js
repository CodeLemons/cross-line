const Home = () => {

    const crossLine = (e) => {
        const element = e.target;
        element.classList.toggle("crossed-line");
    };

    return ( 
        <div className="home-page">
            <p onClick={crossLine}>Apples</p>
            <p onClick={crossLine}>Bread</p>
            <p onClick={crossLine}>Honey</p>
            <p onClick={crossLine}>Milk</p>
            <p onClick={crossLine}>Toast</p>
        </div>
     );
}
 
export default Home;