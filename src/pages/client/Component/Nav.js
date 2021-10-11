
import React, { useEffect, useState } from 'react';
import Receipt from './Receipt';
import Input from '@material-ui/core/Input';

const Nav=()=> {
  const [valueProduct, setValueProduct] = useState();

  const inputChange = (e) => {
    // prepare value
    let { target: { name: fieldName, value } } = e;   
     setValueProduct(value)
    console.log("value", value);
  };

        return (
            <nav className="navbar navbar-expand-md bg-white navbar-light">
        <div className="container">
          {/* logo  */}
          <a className="navbar-brand" href="/" style={{color: '#64ae55',marginLeft:'45px'}}><b>DealBook</b>.xyz</a>
          {/* navbar-toggler  */}
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            {/* form tìm kiếm  */}
            <form className="form-inline ml-auto my-2 my-lg-0 mr-3">
              <div className="input-group" style={{width: '630px'}}>
                {/* <input type="text" className="form-control" aria-label="Small" value={valueProduct} placeholder="Nhập sách cần tìm kiếm..." /> */}
                <Input    type="text"
                          name="name"
                          className="form-control" aria-label="Small"
                          placeholder="Nhập sách cần tìm kiếm..."
                          onChange={inputChange}
                          value={valueProduct}/>
                <div className="input-group-append">
                  <a type="button" className="btn" href={"/ket-qua/"+valueProduct} style={{backgroundColor: '#64ae55', color: 'white'}}>
                    <i className="fa fa-search" />
                  </a>
                  {/* <ProductSearchList value={valueProduct}></ProductSearchList> */}
                </div>
              </div>
            </form>
            {/* ô đăng nhập đăng ký giỏ hàng trên header  */}
            <ul className="navbar-nav mb-1 ml-auto">
            
              <li className="nav-item giohang">
                <a href="/gio-hang" className="btn btn-secondary rounded-circle">
                  <i className="fa fa-shopping-cart" />
                  <div className="cart-amount">0</div>
                </a>
                <a className="nav-link text-dark giohang text-uppercase" href="/gio-hang" style={{display: 'inline-block'}}>Giỏ
                  Hàng</a>
              </li>
            </ul>
            

            
          </div>
        </div>
      </nav>
        
        );
    }


export default Nav;