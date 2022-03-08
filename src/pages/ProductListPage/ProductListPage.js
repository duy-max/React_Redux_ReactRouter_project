
import React, { Component } from "react";
import ProductList from "./../../components/ProductList/ProductList";
import ProductItem from "./../../components/ProductItem/ProductItem";
import { connect } from 'react-redux';
import callApi from './../../utils/apiCaller';
class ProductListPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {   //Được gọi khi component render lần đầu tiên

        callApi('products', 'GET', null).then(res => {
            this.setState({   //khi gọi hàm setState() thì hàm render() chạy lại lần nữa lúc này thì đã có dữ liệu data gọi từ server trả về
                products: res.data
            })
        })
    }


    render() {
        // var {products} =this.props;
        var { products } = this.state;

        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button type="button" className="btn btn-info mb-10">Add product</button>
                <ProductList>
                    {this.showProducts(products)}
                </ProductList>
            </div>
        );
    }

    showProducts = (products) => {
        var result = null;

        if (products.length > 0) {
            result = products.map((product, index) => {
                return (<ProductItem
                    key={index}
                    product={product}
                    index={index}
                />
                )
            })

        }
        return result;

    }
}


const mapStateToProps = state => {

    return {
        products: state.products
    }
}



export default connect(mapStateToProps, null)(ProductListPage);
