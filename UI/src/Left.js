import { Link } from "react-router-dom";

function Left() {
    return ( 
        <div className="col-md-3 mt-5">
        <Link to='/adminmoviemanage'><button className="btn btn-info b1">Movies Management</button></Link>
        <Link to='/admincategory'><button className="btn btn-info mt-2 b1">Movies Category</button></Link>
    </div>
     );
}

export default Left;