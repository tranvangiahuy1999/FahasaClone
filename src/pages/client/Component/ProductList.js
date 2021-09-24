import React, { useEffect, useState  } from 'react';
import Nav from "./Nav";
import Footer from './Footer';
import shopApis from "../../../apis/ShopApis";
const ProductList=()=> {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryData();
  }, []);

  const getCategoryData = async () => {
    try {
      const res = await shopApis.getCategoryList();
      console.log(res);
      if (res.status === 200) {
        setCategoryList(res.data);
      }
    } catch (e) {
      console.log(e);
    }
    
  };   
        return (
            <div>
                <Nav/>
                <section className="duoinavbar"style={{background:'#F0F0F0'}}>
        <div className="container text-white">
          <div className="row justify">
            <div className="col-lg-3 col-md-5">
              <div className="categoryheader">
                <div className="noidungheader text-white">
                  <i className="fa fa-bars" />
                  <span className="text-uppercase font-weight-bold ml-1">Danh mục sách</span>
                </div>

                {/* CATEGORIES */}
                <div className="categorycontent1" >
                  <ul >
                  {categoryList.length ? (
                    categoryList
                      .filter((item, idx) => idx < 11)
                      .map((value, index) => (
                    <li  key={index}> <a href="/danh-sach" className="tieude"> {value.name}</a><i className="fa fa-chevron-right icon float-right" />
                      <ul className="categorydetail container">
                      <div className="row " style={{height:'185px'}} >
                      {value.subCate.length ? (
                              value.subCate
                                .filter((item, idx) => idx < 6)
                                .map((value, index) => (
                       
                          <div className="col-4"key={index}>
                          <li className="liheader"><a href="/danh-sach" className="header text-uppercase"> {value.name}
                          </a></li>
                        <div className="content trai">
                        {value.subCate.length ? (
                                        value.subCate
                                          .filter((item, idx) => idx < 5)
                                          .map((value, index) => (
                          <li key={index}><a href="/danh-sach">{value.name}</a></li>
                          ))
                          ) : (
                            <></>
                          )}
                        </div>
                          </div>
                           
                          
                      
                           ))
                           ) : (
                             <></>
                           )}
                          </div>

                        
                      </ul>
                    </li>
                       ))
                       ) : (
                         <></>
                       )}
                    
                  
                  
                
                   
                   
               
                  
                  
                  </ul>
                </div>

              </div>
            </div>
         
          </div>
        </div>
      </section>
        <section className="breadcrumbbar"style={{background:'#F0F0F0',paddingTop:'10px',height:'72px'}}>
          <div className="container">
            <ol className="breadcrumb mb-0 p-0 bg-transparent">
              <li className="breadcrumb-item"><a href="index.html">Trang chủ</a></li>
              <li className="breadcrumb-item active"><a href="sach-kinh-te.html">Sách kinh tế - kỹ năng</a></li>
            </ol>
          </div>
        </section>
        {/* ảnh banner  */}
        <section className="banner"style={{background:'#F0F0F0',paddingBottom:'50px'}}>
          <div className="container text-center">
            <a href="sach-moi-tuyen-chon.html"><img src="images/banner-sach-ktkn.jpg" alt="banner-sach-ktkn" className="img-fluid" /></a>
          </div>
        </section>
        {/* thể loại sách: kinh tế chính trị nhân vật bài học kinh doanh ( từng ô vuông) */}
        <section className="page-content my-3"style={{background:'#F0F0F0',height:'280px'}}>
          <div className="container"style={{background:'white',marginTop:'-17px',width:'84%',paddingBottom:'10px'}}>
            <div>
              <h1 className="header text-uppercase">sách kinh tế - kỹ năng</h1>
            </div>
            <div className="the-loai-sach" style={{paddingLeft:'46px'}}>
              <ul className="list-unstyled d-flex">
                <li>
                  <a href="#" className="danh-muc text-decoration-none">
                    <div className="img text-center">
                      <img src="images/tls-kinh-te-chinh-tri.png" alt="tls-kinh-te-chinh-tri" />
                    </div>
                    <div className="ten">
                      Kinh tế - chính trị
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="danh-muc text-decoration-none">
                    <div className="img text-center">
                      <img src="images/tls-nhan-vat-bai-hoc-kinh-doanh.png" alt="tls-kinh-te-chinh-tri" />
                    </div>
                    <div className="ten">
                      Nhân vật - Bài học kinh doanh
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="danh-muc text-decoration-none">
                    <div className="img text-center">
                      <img src="images/tls-sach-khoi-nghiep.png" alt="tls-kinh-te-chinh-tri" />
                    </div>
                    <div className="ten">
                      Sách Khởi Nghiệp
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="danh-muc text-decoration-none">
                    <div className="img text-center">
                      <img src="images/tls-sach-quan-tri-lanh-dao.png" alt="tls-kinh-te-chinh-tri" />
                    </div>
                    <div className="ten">
                      Sách Quản trị - Lãnh đạo
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="danh-muc text-decoration-none">
                    <div className="img text-center">
                      <img src="images/tls-sach-tai-chinh-ke-toan.png" alt="tls-kinh-te-chinh-tri" />
                    </div>
                    <div className="ten">
                      Sách tài chính - kế toán
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="danh-muc text-decoration-none">
                    <div className="img text-center">
                      <img src="images/tls-sach-kinh-te-hoc.png" alt="tls-kinh-te-chinh-tri" />
                    </div>
                    <div className="ten">
                      Sách Kinh tế học
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="danh-muc text-decoration-none">
                    <div className="img text-center">
                      <img src="images/tls-sach-quan-tri-nhan-su.png" alt="tls-kinh-te-chinh-tri" />
                    </div>
                    <div className="ten">
                      Sách quản trị nhân sự
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="danh-muc text-decoration-none">
                    <div className="img text-center">
                      <img src="images/tls-sach-chung-khoan-bat-dong-san-dau-tu.png" alt="tls-kinh-te-chinh-tri" />
                    </div>
                    <div className="ten">
                      Sách chứng khoán - bất động sản
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="danh-muc text-decoration-none">
                    <div className="img text-center">
                      <img src="images/tls-sach-ky-nang-lam-viec.png" alt="tls-kinh-te-chinh-tri" />
                    </div>
                    <div className="ten">
                      Sách kỹ năng làm việc
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="danh-muc text-decoration-none">
                    <div className="img text-center">
                      <img src="images/tls-sach-marketing-ban-hang.png" alt="tls-kinh-te-chinh-tri" />
                    </div>
                    <div className="ten">
                      Sách marketing - bán hàng
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* khối sản phẩm  */}
        <section className="content my-4"style={{background:'#F0F0F0'}}>
          <div className="container"style={{marginTop:'-24px',width:'84%',marginLeft:'108px'}}>
            <div className="noidung bg-white" style={{width: '101%'}}>
              {/* header của khối sản phẩm : tag(tác giả), bộ lọc và sắp xếp  */}
             
              {/* các sản phẩm  */}
              <div className="row"style={{background:'#F0F0F0',marginBottom:'-35px'}}>
                <div className='col-3' >
                    
                      <div className="thongtinsach1"style={{background:'white',border:'none'}}>  
                        <h1 style={{fontSize:'19px',marginTop:'6px',marginLeft:'3px',fontWeight:'bold'}}>Nhóm Sản Phẩm</h1>
                        <h3  style={{fontSize:'17px',marginLeft:'13px'}}>Tất Cả Sản Phẩm</h3>
                        <ul>
                        {categoryList.length ? (
                    categoryList
                      .filter((item, idx) => idx < 11)
                      .map((value, index) => (
                          <li  key={index}><a href="#" style={{color:'black'}}>{value.name}</a></li>
                          ))
                          ) : (
                            <></>
                          )}
                        </ul>
                    
                    </div>
                </div>
                <div className="col-9" style={{background:'white'}}> 
                <div className="header-khoi-sp d-flex">
             
             <div className="sort d-flex ml-auto">
               <div className="hien-thi">
                 <label htmlFor="hienthi-select" className="label-select">Hiển thị :</label>
                 <select className="hienthi-select">
                   <option value={30}>30</option>
                   <option value={60}>60</option>
                 </select>
               </div>
               <div className="sap-xep">
                 <label htmlFor="sapxep-select" className="label-select">Sắp xếp : </label>
                 <select className="sapxep-select">
                   <option value="moinhat">Mới nhất</option>
                   <option value="thap-cao">Giá: Thấp - Cao</option>
                   <option value="cao-thap">Giá: Cao - Thấp</option>
                 </select>
               </div>
             </div>
           </div>
                <div className="items">
                <div className="row" style={{marginRight:'25px'}}>
                  <div className="col-lg-3 col-md-4 col-xs-6 item DeanGraziosi">
                    <div className="card list">
                      <a href="product-item.html" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Lập Kế Hoạch Kinh Doanh Hiệu Quả">
                        <img className="card-img-top anh" src="images/lap-ke-hoach-kinh-doanh-hieu-qua.jpg" alt="lap-ke-hoach-kinh-doanh-hieu-qua" />
                        <div className="card-body noidungsp mt-3">
                          <h6 className="card-title ten">Lập Kế Hoạch Kinh Doanh Hiệu Quả</h6>
                          <small className="tacgia text-muted">Brian Finch</small>
                          <div className="gia d-flex align-items-baseline">
                            <div className="giamoi">111.200 ₫</div>
                            <div className="giacu text-muted">139.000 ₫</div>
                            <div className="sale">-20%</div>
                          </div>
                        
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-xs-6 item DeanGraziosi">
                    <div className="card list ">
                      <a href="product-item.html" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Lập Kế Hoạch Kinh Doanh Hiệu Quả">
                        <img className="card-img-top anh" src="images/lap-ke-hoach-kinh-doanh-hieu-qua.jpg" alt="lap-ke-hoach-kinh-doanh-hieu-qua" />
                        <div className="card-body noidungsp mt-3">
                          <h6 className="card-title ten">Lập Kế Hoạch Kinh Doanh Hiệu Quả</h6>
                          <small className="tacgia text-muted">Brian Finch</small>
                          <div className="gia d-flex align-items-baseline">
                            <div className="giamoi">111.200 ₫</div>
                            <div className="giacu text-muted">139.000 ₫</div>
                            <div className="sale">-20%</div>
                          </div>
                         
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-xs-6 item MarieForleo">
                    <div className="card list ">
                      <a href="product-item.html" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Lập Kế Hoạch Kinh Doanh Hiệu Quả">
                        <img className="card-img-top anh" src="images/lap-ke-hoach-kinh-doanh-hieu-qua.jpg" alt="lap-ke-hoach-kinh-doanh-hieu-qua" />
                        <div className="card-body noidungsp mt-3">
                          <h6 className="card-title ten">Lập Kế Hoạch Kinh Doanh Hiệu Quả</h6>
                          <small className="tacgia text-muted">Brian Finch</small>
                          <div className="gia d-flex align-items-baseline">
                            <div className="giamoi">111.200 ₫</div>
                            <div className="giacu text-muted">139.000 ₫</div>
                            <div className="sale">-20%</div>
                          </div>
                       
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-xs-6 item MarieForleo">
                    <div className="card list">
                      <a href="product-item.html" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Lập Kế Hoạch Kinh Doanh Hiệu Quả">
                        <img className="card-img-top anh" src="images/lap-ke-hoach-kinh-doanh-hieu-qua.jpg" alt="lap-ke-hoach-kinh-doanh-hieu-qua" />
                        <div className="card-body noidungsp mt-3">
                          <h6 className="card-title ten">Lập Kế Hoạch Kinh Doanh Hiệu Quả</h6>
                          <small className="tacgia text-muted">Brian Finch</small>
                          <div className="gia d-flex align-items-baseline">
                            <div className="giamoi">111.200 ₫</div>
                            <div className="giacu text-muted">139.000 ₫</div>
                            <div className="sale">-20%</div>
                          </div>
                      
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-xs-6 item DavikClark">
                    <div className="card list ">
                      <a href="product-item.html" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Lập Kế Hoạch Kinh Doanh Hiệu Quả">
                        <img className="card-img-top anh" src="images/lap-ke-hoach-kinh-doanh-hieu-qua.jpg" alt="lap-ke-hoach-kinh-doanh-hieu-qua" />
                        <div className="card-body noidungsp mt-3">
                          <h6 className="card-title ten">Lập Kế Hoạch Kinh Doanh Hiệu Quả</h6>
                          <small className="tacgia text-muted">Brian Finch</small>
                          <div className="gia d-flex align-items-baseline">
                            <div className="giamoi">111.200 ₫</div>
                            <div className="giacu text-muted">139.000 ₫</div>
                            <div className="sale">-20%</div>
                          </div>
                       
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-xs-6 item TSLêThẩmDương">
                    <div className="card list">
                      <a href="product-item.html" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Lập Kế Hoạch Kinh Doanh Hiệu Quả">
                        <img className="card-img-top anh" src="images/lap-ke-hoach-kinh-doanh-hieu-qua.jpg" alt="lap-ke-hoach-kinh-doanh-hieu-qua" />
                        <div className="card-body noidungsp mt-3">
                          <h6 className="card-title ten">Lập Kế Hoạch Kinh Doanh Hiệu Quả</h6>
                          <small className="tacgia text-muted">Brian Finch</small>
                          <div className="gia d-flex align-items-baseline">
                            <div className="giamoi">111.200 ₫</div>
                            <div className="giacu text-muted">139.000 ₫</div>
                            <div className="sale">-20%</div>
                          </div>
                      
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-xs-6 item SimonSinek">
                    <div className="card list">
                      <a href="product-item.html" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Lập Kế Hoạch Kinh Doanh Hiệu Quả">
                        <img className="card-img-top anh" src="images/lap-ke-hoach-kinh-doanh-hieu-qua.jpg" alt="lap-ke-hoach-kinh-doanh-hieu-qua" />
                        <div className="card-body noidungsp mt-3">
                          <h6 className="card-title ten">Lập Kế Hoạch Kinh Doanh Hiệu Quả</h6>
                          <small className="tacgia text-muted">Brian Finch</small>
                          <div className="gia d-flex align-items-baseline">
                            <div className="giamoi">111.200 ₫</div>
                            <div className="giacu text-muted">139.000 ₫</div>
                            <div className="sale">-20%</div>
                          </div>
                      
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-xs-6 item SimonSinek">
                    <div className="card list">
                      <a href="product-item.html" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Lập Kế Hoạch Kinh Doanh Hiệu Quả">
                        <img className="card-img-top anh" src="images/lap-ke-hoach-kinh-doanh-hieu-qua.jpg" alt="lap-ke-hoach-kinh-doanh-hieu-qua" />
                        <div className="card-body noidungsp mt-3">
                          <h6 className="card-title ten">Lập Kế Hoạch Kinh Doanh Hiệu Quả</h6>
                          <small className="tacgia text-muted">Brian Finch</small>
                          <div className="gia d-flex align-items-baseline">
                            <div className="giamoi">111.200 ₫</div>
                            <div className="giacu text-muted">139.000 ₫</div>
                            <div className="sale">-20%</div>
                          </div>
                      
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* pagination bar */}
              <div className="pagination-bar my-3">
                <div className="row">
                  <div className="col-12">
                    <nav>
                      <ul className="pagination justify-content-center">
                        {/* <li class="page-item disabled">
                                        <a class="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                    </li> */}
                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">›</span>
                            <span className="sr-only">Next</span>
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">»</span>
                            <span className="sr-only">Next</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              {/*het khoi san pham*/}
                </div>
              
              </div>
           
            </div>
            {/*het div noidung*/}
          </div>
          {/*het container*/}
        </section>
        {/*het _1khoi*/}
        <section className="abovefooter text-white"style={{background:'#F0F0F0' ,paddingTop:'35px'  }} >
          <div className="container"style={{backgroundColor: '#64ae55',width:'84%'}}>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="dichvu d-flex align-items-center">
                  <img src="images/icon-books.png" alt="icon-books" />
                  <div className="noidung">
                    <h6 className="tieude font-weight-bold">HƠN 14.000 TỰA SÁCH </h6>
                    <p className="detail">Tuyển chọn bởi DealBooks</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="dichvu d-flex align-items-center">
                  <img src="images/icon-ship.png" alt="icon-ship" />
                  <div className="noidung">
                    <h6 className="tieude font-weight-bold">MIỄN PHÍ GIAO HÀNG</h6>
                    <p className="detail">Từ 150.000đ ở TP.HCM</p>
                    <p className="detail">Từ 300.000đ ở TP.HN</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="dichvu d-flex align-items-center">
                  <img src="images/icon-gift.png" alt="icon-gift" />
                  <div className="noidung">
                    <h6 className="tieude font-weight-bold">QUÀ TẶNG MIỄN PHÍ</h6>
                    <p className="detail">Tặng Bookmark</p>
                    <p className="detail">Bao sách miễn phí</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="dichvu d-flex align-items-center">
                  <img src="images/icon-return.png" alt="icon-return" />
                  <div className="noidung">
                    <h6 className="tieude font-weight-bold">ĐỔI TRẢ NHANH CHÓNG</h6>
                    <p className="detail">Hàng bị lỗi được đổi trả nhanh chóng</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div  style={{background:'#F0F0F0'}} >

        <footer>
              <div className="container py-4" style={{background:'white',width:'84%'}}>
                <div className="row">
                  <div className="col-md-6 col-xs-6">
                    <div className="gioithieu">
                      <h3 className="header text-uppercase font-weight-bold">Về DealBook</h3>
                      <a href="#">Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP HCM Công Ty Cổ Phần Phát Hành Sách - FAHASA60 - 62 Lê Lợi, Quận 1, TP. HCM</a>
                      <a href="#">Fahasa.com nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng cũng như tất cả Hệ Thống Fahasa trên toàn quốc.</a>
                      <a href="#"><img src="images/dang-ky-bo-cong-thuong.png" alt="jcb-payment" /></a>
                      <div className="fb-like" data-href="https://www.facebook.com/DealBook-110745443947730/" data-width="300px" data-layout="button" data-action="like" data-size="small" data-share="true" />
                    </div>
                  </div>
                  <div className="col-md-3 col-xs-6">
                    <div className="hotrokh">
                      <h3 className="header text-uppercase font-weight-bold">HỖ TRỢ KHÁCH HÀNG</h3>
                      <a href="#">Hướng dẫn đặt hàng</a>
                      <a href="#">Phương thức thanh toán</a>
                      <a href="#">Phương thức vận chuyển</a>
                      <a href="#">Chính sách đổi trả</a>
                    
                    </div>
                  </div>
                
                  <div className="col-md-3 col-xs-6">
                    <div className="ptthanhtoan">
                    
                      <a href="#"><img src="images/footer_icon1.png" alt="jcb-payment" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            {/* nut cuon len dau trang */}
            <div className="fixed-bottom">
              <div className="btn btn-warning float-right rounded-circle nutcuonlen" id="backtotop" href="#" style={{background: '#64ae55'}}><i className="fa fa-chevron-up text-white" /></div>
            </div>
        </div>
      </div>
        );
    }


export default ProductList;