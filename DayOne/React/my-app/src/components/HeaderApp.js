

// no lifecycle here and no state
// makes it faster

function Header(props){
    return (
        <div>
            <p>{props.data}</p>
        </div>
    )
}

export default Header;