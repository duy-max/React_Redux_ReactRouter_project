
import { Component } from "react";
class ProductActionPage extends Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form action="" method="POST" role="form">
                    <div className="form-group">
                        <label >Name</label>
                        <input type="text" className="form-control" placeholder="Input field" />
                    </div>
                    <div className="form-group">
                        <label >Price</label>
                        <input type="number" className="form-control" placeholder="Input field" />
                    </div>
                    <div className="form-group">
                        <label >
                            <input type="checkbox"></input>
                            Available</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        );
    }

}

export default ProductActionPage;
