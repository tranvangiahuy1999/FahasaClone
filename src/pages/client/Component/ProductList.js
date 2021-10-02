import React, { useEffect, useState } from 'react';
import Nav from "./Nav";
import Footer from './Footer';
import shopApis from "../../../apis/ShopApis";
import { useParams,useLocation } from 'react-router';
import Pagination from "@material-ui/lab/Pagination";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const ProductList = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [productList,setProductList]=useState([]);
  const [productId1,setProductId1]=useState();
  const [productCateId,setProductCateId]=useState();
  const [productCateName,setProductCateName]=useState();
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const params = useParams();
  let query = useQuery();
  const [parentId, setParentId] = useState();
  useEffect(() => {
    getCategoryData();
    getProductData(1);
    const temp = new URLSearchParams(query);
    setParentId(temp.get("parentId"));
  }, []);

  

  const getProductData = async (page) => {
    try {
      console.log(page)
      const res = await shopApis.getProductByCate(page,params.id);
      
      if (res.status === 200) {
        setProductList(res.data.product)
        console.log(res.data.product);
      
      }
    }
    catch (e) {
      console.log(e);
    }
  }
  const pageChange = (event, page) => {
    getProductData(page);
    setPage(page);
  };
  const getCategoryData = async () => {
    try {
      const res = await shopApis.getCategoryList();
      // console.log(params.id);
      if (res.status === 200) {
        console.log(res.data)
        res.data.map((value, index) => {
         
          value.subCate.map((value, index) => {
            if(value._id===params.id){
              console.log(value.parent_cate)
              setProductId1(value.parent_cate)
            }
           
     
            value.subCate.map((value, index) => {
              if(value._id===params.id){
                console.log(value._id)
                setProductCateName(value.name);
                setProductCateId(value.parent_cate)
              }
            })
          })
        })
        setCategoryList(res.data);
      }
    } catch (e) {
      console.log(e);
    }

  };
  const chuyenDoiURL=(str) =>{
    str = str.toLowerCase();     

    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
 
    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');
 
    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');
 
    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');
 
    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');
 
    // return
    return str;
}
console.log(productList); 
// console.log(productId1);
// console.log(productCateId);


  return (
    <div className="all">
      <Nav />
      <section className="duoinavbar" style={{ background: '#F0F0F0' }}>
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

                          <li key={index}> <a href={"/danh-sach/"+chuyenDoiURL(value.name)+"."+ value._id } className="tieude" className="tieude"> {value.name}</a><i className="fa fa-chevron-right icon float-right" />
                            <ul className="categorydetail container">
                              <div className="row " style={{ height: '185px' }} >
                                {value.subCate.length ? (
                                  value.subCate
                                    .filter((item, idx) => idx < 6)
                                    .map((value, index) => (

                                      <div className="col-4" key={index}>
                                        <li className="liheader"><a href={"/danh-sach/"+chuyenDoiURL(value.name)+"."+ value._id}  className="header text-uppercase"> {value.name}
                                        </a></li>
                                        <div className="content trai">
                                          {value.subCate.length ? (
                                            value.subCate
                                              .filter((item, idx) => idx < 5)
                                              .map((value, index) => (
                                                <li key={index}><a href={"/danh-sach/"+chuyenDoiURL(value.name)+"."+ value._id }>{value.name}</a></li>
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
      <section className="breadcrumbbar" style={{ background: '#F0F0F0', paddingTop: '30px', height: '72px' }}>
        <div className="container">
          <ol className="breadcrumb mb-0 p-0 bg-transparent">
            <li className="breadcrumb-item"><a href="index.html">Trang chủ  </a></li>
            
                    {
                      categoryList.length ? (
                        categoryList
                          .filter((item, idx) => idx < 11)
                          .map((value, index) => (
                            <div>
                              {
                                value._id === params.id ? (
                                  
                                  <li className="breadcrumb-item active"><a  style={{paddingLeft:'10px',color:'orange'}}><span style={{color:'black',paddingRight:'10px'}}>/</span>{value.name}</a></li>   
                                   
                                ): (
                                  <></>
                                )
                            }
                            {
                                value._id === productId1 ? (
                                  
                                  <li className="breadcrumb-item phu" ><a style={{paddingLeft:'25px',color:'black'}} >{value.name}</a></li>   
                                   
                                ): (
                                  <></>
                                )
                            }
                            {
                                  value.subCate.map((value, index) => {
                                    // setProductId(value.parent_cate)    
                                  if(value._id === params.id){

                                    return(
                                  
                                      

                                      <li className="breadcrumb-item active"><a style={{paddingLeft:'120px',color:'orange'}}><span style={{color:'black',paddingRight:'10px'}}>/</span>{value.name}</a></li>    
                                    )
                                  }

                                            })
                            }
                              {
                                  value.subCate.map((value, index) => {
                                      
                                  if(value._id === productCateId){
                                    
                                        console.log(productCateName);
                                    return(
                                  
                                     
                                 
                                      <li className="breadcrumb-item active">
                                        <a style={{paddingLeft:'120px',color:'black'}}>
                                        <span style={{color:'black',paddingRight:'10px'}}>/</span>{value.name}</a>
                                        <a style={{paddingLeft:'120px',color:'orange'}}>
                                        <span style={{color:'black',paddingRight:'10px'}}>/</span>{productCateName}</a>
                                        </li>    
                                    )
                                  }

                                            })
                            }

                               
                            
                        
                              
                            
                            </div>

                          ))
                      ) : (
                        <></>
                      )}
         
          </ol>
        </div>
      </section>
      {/* ảnh banner  */}
      <section className="banner" style={{ background: '#F0F0F0', paddingBottom: '50px' }}>
        <div className="container text-center">
          <a href="sach-moi-tuyen-chon.html"><img src="/images/banner-sach-ktkn.jpg" alt="banner-sach-ktkn" className="img-fluid" /></a>
        </div>
      </section>
      {/* thể loại sách: kinh tế chính trị nhân vật bài học kinh doanh ( từng ô vuông) */}
      <section className="page-content my-3" style={{ background: '#F0F0F0', height: '280px' }}>
        <div className="container" style={{ background: 'white', marginTop: '-17px', width: '81%', paddingBottom: '10px' }}>
          <div>
            <h1 className="header text-uppercase">Sách Tiêu Biểu</h1>
          </div>
          <div className="the-loai-sach" style={{ paddingLeft: '46px' }}>
            <ul className="list-unstyled d-flex">
            {categoryList.length ? (
                      categoryList
                        .filter((item, idx) => idx < 11)
                        .map((value, index) => (
              <li>
                <a href={"/danh-sach/"+chuyenDoiURL(value.name)+"."+ value._id } className="danh-muc text-decoration-none">
                  <div className="img text-center">
                    <img src="/images/tls-kinh-te-chinh-tri.png" alt="tls-kinh-te-chinh-tri" />
                  </div>
                  <div className="ten">
                  {value.name}
                  </div>
                </a>
              </li>
                ))
                ) : (
                  <></>
                )}
           
            </ul>
          </div>
        </div>
      </section>
      {/* khối sản phẩm  */}
      <section className="content my-4" style={{ background: '#F0F0F0' }}>
        <div className="container contentList" style={{ marginTop: '-24px', width: '81%',marginBottom:'3%' }}>
          <div className="noidung bg-white" >
            {/* header của khối sản phẩm : tag(tác giả), bộ lọc và sắp xếp  */}

            {/* các sản phẩm  */}
            <div className="row" style={{ background: '#F0F0F0' }}>
              <div className='col-md-3 col-xs-12' style={{padding:'0%',paddingRight:'1%'}}>

                <div className="thongtinsach1" style={{ background: 'white', border: 'none',height:'auto' }}>
                  <h1 style={{ fontSize: '19px', marginTop: '6px', marginLeft: '3px', fontWeight: 'bold' }}>Nhóm Sản Phẩm</h1>
                  <h3 style={{ fontSize: '17px', marginLeft: '13px' }}>Tất Cả Sản Phẩm</h3>
                  <ul>
                    {
                      categoryList.length ? (
                        categoryList
                          .filter((item, idx) => idx < 11)
                          .map((value, index) => (
                            <div>
                              
                              {
                                value._id === params.id ? (

                                  <li key={index}><a href={"/danh-sach/"+chuyenDoiURL(value.name)+"."+ value._id } style={{ color: 'orange',marginLeft:'-7px' }}>{value.name}</a></li>        
                                
                                  
                                ): (
                                  <></>
                                )
                            }
                              {
                                value._id === params.id ? (

                               
                                  value.subCate.map((value, index) => (
                                    <li key={index}  ><a href={"/danh-sach/"+chuyenDoiURL(value.name)+"."+ value._id } style={{ color: 'black',marginLeft:'7px'}}>{value.name}</a></li>                                  
                                      
                                  ))
                                  
                                ): (
                                  <></>
                                )
                            }
                               {
                                value._id === productId1 ? (
                                  
                                  <li key={index}  ><a href={"/danh-sach/"+chuyenDoiURL(value.name)+"."+ value._id } style={{ color: 'black',marginLeft:'-5px'}}>{value.name}</a></li>    
                                   
                                ): (
                                  <></>
                                )
                            }
                            
                            {
                                value.subCate.map((value, index) => (
                                     value._id === params.id ? (

                               
                                    
                                    <li key={index}  ><a href={"/danh-sach/"+chuyenDoiURL(value.name)+"."+ value._id } style={{ color: 'orange',marginLeft:'5px'}}>{value.name}</a></li>                                  
                                      
                                
                                  
                                ): (
                                  <></>
                                )
                                ))
                            }
                             {
                                value.subCate.map((value, index) => (
                                  
                                     value._id === params.id ? (

                               
                                  value.subCate.map((value, index) => (
                                    
                                    <li key={index}  ><a style={{ color: 'black',marginLeft:'20px'}}>{value.name}</a></li>                                  
                                      
                                  ))
                                  
                                ): (
                                  <></>
                                )
                                ))
                            }
                              
                            
                            </div>

                          ))
                      ) : (
                        <></>
                      )}
                  </ul>

                </div>
              </div>
              <div className="col-md-9 col-xs-12" style={{ background: 'white' }}>
                <div className="header-khoi-sp d-flex">

                  <div className="sort d-flex ml-auto">
                    <div className="hien-thi">
                      <label htmlFor="hienthi-select"  className="label-select">Hiển thị :</label>
                      <select className="hienthi-select" style={{width:'85px',height:'25px'}}>
                        <option value={30}>30</option>
                        <option value={60}>60</option>
                      </select>
                    </div>
                    <div className="sap-xep">
                      <label htmlFor="sapxep-select" className="label-select">Sắp xếp : </label>
                      <select className="sapxep-select" style={{width:'140px',height:'25px'}} >
                        <option value="moinhat">Mới nhất</option>
                        <option value="thap-cao">Giá: Thấp - Cao</option>
                        <option value="cao-thap">Giá: Cao - Thấp</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="items" style={{marginLeft :'-2%'}}>
                  <div className="row" style={{overflow:'hidden'}}>
                    {productList.map((value, index) => (
                    <div className="col-lg-3 col-md-4 col-xs-6 item DeanGraziosi">
                    <div className="card list">
                      <a href={"/chi-tiet/"+chuyenDoiURL(value.name)+"."+ value._id } className="motsanpham" style={{ textDecoration: 'none', color: 'black' }} data-toggle="tooltip" data-placement="bottom" title="Lập Kế Hoạch Kinh Doanh Hiệu Quả">
                      {value.image.length ? value.image
                      .filter((item, idx) => idx < 1)
                      .map((value, index) => (
                        
                        <img className="card-img-top anh" src={value.url} alt="lap-ke-hoach-kinh-doanh-hieu-qua" />
                        )):
                        <img className="card-img-top anh" src="/images/lap-ke-hoach-kinh-doanh-hieu-qua.jpg" alt="lap-ke-hoach-kinh-doanh-hieu-qua" />
                        }

                        <div className="card-body noidungsp mt-3">
                          <h6 className="card-title ten">{value.name}</h6>
                          <small className="tacgia text-muted" dangerouslySetInnerHTML={{ __html: value.description }}></small>
                          <div className="gia d-flex align-items-baseline">
                             {value.parameters
                                .filter((item, idx) => idx < 1)
                                .map((value, index) => (
                              <div className="giamoi">{value.price}đ</div>
                             
                             ))}
                           
                            {/* <div className="sale List">-20%</div> */}
                          </div>

                        </div>
                      </a>
                    </div>
                    </div>

                    ))}
               
                  </div>
                </div>
                {/* pagination bar */}
                <div className="pagination-bar my-3">
                  <div className="row">
                    <div className="col-12">
                      <nav>
                      <Pagination
                          count={totalPage}
                          page={page}
                          onChange={pageChange}
                          variant="outlined"
                          shape="rounded"
                        />
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
      <section className="abovefooter text-white" style={{background:'#F0F0F0',marginTop:'-3%'}} >
              <div className="container nearbottom"style={{backgroundColor: '#64ae55',width:'81%'}}>
                <div className="row">
                  <div className="col-lg-3 col-sm-6">
                    <div className="dichvu d-flex align-items-center">
                      <img src="/images/icon-books.png" alt="icon-books" />
                      <div className="noidung">
                        <h6 className="tieude font-weight-bold">HƠN 14.000 TỰA SÁCH HAY</h6>
                        <p className="detail">Tuyển chọn bởi DealBooks</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="dichvu d-flex align-items-center">
                      <img src="/images/icon-ship.png" alt="icon-ship" />
                      <div className="noidung">
                        <h6 className="tieude font-weight-bold">MIỄN PHÍ GIAO HÀNG</h6>
                        <p className="detail">Từ 150.000đ ở TP.HCM</p>
                        <p className="detail">Từ 300.000đ ở tỉnh thành khác</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="dichvu d-flex align-items-center">
                      <img src="/images/icon-gift.png" alt="icon-gift" />
                      <div className="noidung">
                        <h6 className="tieude font-weight-bold">QUÀ TẶNG MIỄN PHÍ</h6>
                        <p className="detail">Tặng Bookmark</p>
                        <p className="detail">Bao sách miễn phí</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="dichvu d-flex align-items-center">
                      <img src="/images/icon-return.png" alt="icon-return" />
                      <div className="noidung">
                        <h6 className="tieude font-weight-bold">ĐỔI TRẢ NHANH CHÓNG</h6>
                        <p className="detail">Hàng bị lỗi được đổi trả nhanh chóng</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="new" style={{marginTop:'-16px',background:'#F0F0F0'}}>
            <footer>
              <div className="container py-4"style={{background:'white',width:'81%'}}>
                <div className="row">
                  <div className="col-md-6 col-xs-6">
                    <div className="gioithieu">
                      <h3 className="header text-uppercase font-weight-bold">Về DealBook</h3>
                      <a href="#">Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP HCM Công Ty Cổ Phần Phát Hành Sách - FAHASA60 - 62 Lê Lợi, Quận 1, TP. HCM</a>
                      <a href="#">Fahasa.com nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng cũng như tất cả Hệ Thống Fahasa trên toàn quốc.</a>
                      <a href="#"><img src="/images/dang-ky-bo-cong-thuong.png" alt="jcb-payment" /></a>
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
                    
                      <a href="#"><img className="anhfanpage" src="/images/footer_icon1.png" style={{marginLeft:'-10px'}} alt="jcb-payment" /></a>
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