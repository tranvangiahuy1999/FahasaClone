import React, { Component } from 'react';
import {useParams } from 'react-router'
import {
    Route,
    Switch  
} from "react-router-dom";

import Homepage from '../client/Index';
import Receipt  from '../client/Component/Receipt';
import ProductDetail from '../client/Component/ProductDetail';
import ProductList from '../client/Component/ProductList';
import ProductSeachList from '../client/Component/ProductSearchList';

const ShopRoute =()=> {
    
   
        
        return (
            <Switch> 
                <Route exact path="/"  component={Homepage}/>
                <Route exact path="/gio-hang"  component={Receipt}/>
                <Route exact path="/chi-tiet"  component={ProductDetail}/>
                <Route  path="/chi-tiet/:slug.:id"  component={ProductDetail}/>
                <Route exact path="/danh-sach"  component={ProductList}/>
                <Route  path="/danh-sach/:slug.:id"  component={ProductList}/>
                <Route exact path="/ket-qua/:name"  component={ProductSeachList}/>
            </Switch>
        );
    
}

export default ShopRoute;