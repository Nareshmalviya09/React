

let Navbar=({link1,link2,link3,link4})=>{

    return(
        <div className="flex flex-row justify-between p-4 bg-gray-400">
            <h1>Navbar</h1>
            <ul className="flex flex-row space-x-4">
                <li>{link1}</li>
                <li>{link2}</li>
                <li>{link3}</li>
                <li>{link4}</li>
            </ul>
        </div>
    )
}
export default Navbar