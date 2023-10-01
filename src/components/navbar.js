function Navbar(props){
    return(
        <div>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">{props.contact}</a></li>
            </ul>
        </div>
    )
}
export default Navbar;