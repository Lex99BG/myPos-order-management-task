import { Link } from 'react-router-dom';
import error404 from '../../assets/error404.jpg'
function PageNotFound() {
    return (
        <div className="container">
            <div className="row flex-column py-3">
                <div className="col-md-6">
                    <h3 className="text-center h1 text-danger">Page Not Found</h3>
                </div>
                <div className="col-md-6">
                    <img src={error404} alt="ERROR-404" className="img-fuild"  style={{ width: "100%" }}/>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <Link to="/" className="px-2 btn btn-lg btn-outline-danger text-center" style={{width: "300px"}}>Home</Link>
                </div>
            </div>
        </div>
    );
}
export default PageNotFound;