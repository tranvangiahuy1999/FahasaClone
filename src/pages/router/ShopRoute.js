import React, { Component } from 'react';
import {
    Route,
    Switch  
} from "react-router-dom";

import Homepage from '../client/Index';
import Receipt  from '../client/Component/Receipt';
import ProductDetail from '../client/Component/ProductDetail';
import ProductList from '../client/Component/ProductList';


class ShopRoute extends Component {
    render() {
        return (
            <Switch> 
                <Route exact path="/"  component={Homepage}/>
                <Route exact path="/gio-hang"  component={Receipt}/>
                <Route exact path="/chi-tiet"  component={ProductDetail}/>
                <Route exact path="/danh-sach"  component={ProductList}/>
              
           
            </Switch>
        );
    }
}

export default ShopRoute;