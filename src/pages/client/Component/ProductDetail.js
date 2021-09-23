import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Header from './Header';
import shopApis from "../../../apis/ShopApis";
const ProductDetail=()=> {
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
                <section className="duoinavbar">
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
                    <li  key={index}> <a href="/danh-sach"className="tieude"> {value.name}</a><i className="fa fa-chevron-right icon float-right" />
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
        {/* breadcrumb  */}
        <section className="breadcrumbbar">
          <div className="container">
            <ol className="breadcrumb mb-0 p-0 bg-transparent">
              <li className="breadcrumb-item"><a href="index.html">Trang chủ</a></li>
              <li className="breadcrumb-item"><a href="#">Sách kinh tế</a></li>
              <li className="breadcrumb-item active"><a href="#">Sách kỹ năng làm việc</a></li>
            </ol>
          </div>
        </section>
        {/* nội dung của trang  */}
        <section className="product-page mb-4">
          <div className="container">
            {/* chi tiết 1 sản phẩm */}
            <div className="product-detail bg-white p-4">
              <div className="row">
                {/* ảnh  */}
                <div className="col-md-5 khoianh">
                  <div className="anhto mb-4">
                    <a className="active" href="/chi-tiet#thumb-img-1" data-fancybox="thumb-img">
                      <img className="product-image" src="images/lap-ke-hoach-kinh-doanh-hieu-qua-mt.jpg" alt="lap-ke-hoach-kinh-doanh-hieu-qua-mt" style={{width: '100%'}} />
                    </a>
                    <a href="images/lap-ke-hoach-kinh-doanh-hieu-qua-ms.jpg" data-fancybox="thumb-img" />
                  </div>
                  <div className="list-anhchitiet d-flex mb-4" style={{marginLeft: '90px'}}>
                    <img className="thumb-img thumb1 mr-3" src="images/lap-ke-hoach-kinh-doanh-hieu-qua-mt.jpg" alt="lap-ke-hoach-kinh-doanh-hieu-qua-mt" />
                    <img className="thumb-img thumb2" src="images/lap-ke-hoach-kinh-doanh-hieu-qua-ms.jpg" alt="lap-ke-hoach-kinh-doanh-hieu-qua-ms" />
                  </div>
                </div>
                {/* thông tin sản phẩm: tên, giá bìa giá bán tiết kiệm, các khuyến mãi, nút chọn mua.... */}
                <div className="col-md-7 khoithongtin">
                  <div className="row">
                    <div className="col-md-12 header">
                      <h4 className="ten">Lập Kế Hoạch Kinh Doanh Hiệu Quả</h4>
                      
                      <hr />
                    </div>
                    <div className="col-md-7">
                      <div className="gia">
                        <div className="giabia">Giá bìa:<span className="giacu ml-2">139.000 ₫</span></div>
                        <div className="giaban">Giá bán tại DealBooks: <span className="giamoi font-weight-bold">111.200 </span><span className="donvitien">₫</span></div>
                        <div className="tietkiem">Tiết kiệm: <b>27.800 ₫</b> <span className="sale">-20%</span>
                        </div>
                      </div>
                      <div className="uudai my-3">
                        <h6 className="header font-weight-bold">Tại DealBook:</h6>
                        <ul>
                          <li><b>Giao hàng </b>cho đơn hàng ở TP.HCM và ở
                            Tỉnh/Thành khác </li>
                          <li><b>Combo sách HOT - GIẢM 25% </b><a href="#">&gt;&gt;Xem ngay</a></li>
                         
                        </ul>
                      </div>
                      <div className="soluong d-flex">
                        <label className="font-weight-bold">Số lượng: </label>
                        <div className="input-number input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text btn-spin btn-dec">-</span>
                          </div>
                          <input type="text" defaultValue={1} className="soluongsp  text-center" />
                          <div className="input-group-append">
                            <span className="input-group-text btn-spin btn-inc">+</span>
                          </div>
                        </div>
                      </div>
                      <div className="nutmua btn w-100 text-uppercase">Chọn mua</div>
                      <a className="huongdanmuahang text-decoration-none" href="#">(Vui lòng xem hướng dẫn mua
                        hàng)</a>
                
                      <div className="fb-like" data-href="https://www.facebook.com/DealBook-110745443947730/" data-width="300px" data-layout="button" data-action="like" data-size="small" data-share="true" />
                    </div>
                    {/* thông tin khác của sản phẩm:  tác giả, ngày xuất bản, kích thước ....  */}
                  
                  </div>
                </div>
                {/* decripstion của 1 sản phẩm: giới thiệu , đánh giá độc giả  */}
                <div className="product-description col-md-12">
                  {/* 2 tab ở trên  */}
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a className="nav-item nav-link active text-uppercase" id="nav-gioithieu-tab" data-toggle="tab" href="#nav-gioithieu" role="tab" aria-controls="nav-gioithieu" aria-selected="true">Giới thiệu</a>
                     
                    </div>
                  </nav>
                  {/* nội dung của từng tab  */}
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active ml-3 " id="nav-gioithieu" role="tabpanel" aria-labelledby="nav-gioithieu-tab">
                    <div className="row">
     
        <div className="col-md-5 giua ">
           <h3 style={{marginLeft:'-85px',marginBottom:'25px'}}>Chi Tiết Sản Phẩm</h3>
          <div className="tonggiatien">
            <div className="group d-flex justify-content-between">
              <p className="label">Tác giả:</p>
              <p className="tamtinh"><a href="#" className="tacgia">Brian Finch</a></p>
            </div>
            <div className="group d-flex justify-content-between">
              <p className="label">Ngày xuất bản:</p>
              <p className="giamgia"> <b>04-2020</b></p>
            </div>
            <div className="group d-flex justify-content-between">
              <p className="label"><b>Dịch Giả:</b></p>
              <p className="phivanchuyen"><a href="#" className="tacgia">Skye Phan</a></p>
            </div>
            <div className="group d-flex justify-content-between">
              <p className="label">Kích thước:</p>
              <p className="phidicvu"> <b>20.5 x 13.5 cm</b></p>
            </div>
            <div className="group d-flex justify-content-between">
              <p className="label">Nhà xuất bản: </p>
              <p className="phidicvu"><b>Nhà Xuất Bản Thanh Niên</b></p>
            </div>
            <div className="group d-flex justify-content-between">
              <p className="label">Hình thức bìa:</p>
              <p className="phidicvu"><b>Bìa mềm</b></p>
            </div>
            <div className="group d-flex justify-content-between">
              <p className="label">Số Trang:</p>
              <p className="phidicvu"><b>334</b></p>
            </div>
            <div className="group d-flex justify-content-between">
              <p className="label">Cân Nặng:</p>
              <p className="phidicvu"><b>30g</b></p>
            </div>
          </div>
        </div>
      </div>
      <hr style={{marginTop:'50px'}}/>
      <h3>Mô Tả Sản Phẩm</h3>
                      <h6 className="tieude font-weight-bold">Lập Kế Hoạch Kinh Doanh Hiệu Quả</h6>
                      <p>
                        <span>Khi bắt đầu thành lập doanh nghiệp hay mở rộng quy mô hoạt động, lập ra một
                          bản kế hoạch kinh doanh là bước đi đầu tiên không thể thiếu. Bản kế hoạch kinh
                          doanh càng được chuẩn bị kỹ lưỡng và lôi cuốn bao nhiêu, cơ hội ghi điểm trước
                          các nhà đầu tư càng lớn bấy nhiêu. Phải chăng, thông qua bản kế hoạch kinh
                          doanh, bạn muốn người đọc:
                        </span>
                      </p>
                      <p>
                        <span>- Đầu tư vào một ý tưởng kinh doanh mới hay một doanh nghiệp đang hoạt
                          động?</span>
                      </p>
                      <p>
                        <span>- Mua lại doanh nghiệp của bạn?</span>
                      </p>
                      <p>
                        <span>- Tham gia liên doanh với bạn?</span>
                      </p>
                      <p>
                        <span>- Chấp nhận đề nghị của bạn để thực hiện hợp đồng?</span>
                      </p>
                      <p>
                        <span>- Cấp cho bạn một khoản hỗ trợ hoặc phê duyệt theo quy định?</span>
                      </p>
                      <p>
                        <span>- Thuyết phục hội đồng quản trị thay đổi phương hướng hoạt động doanh nghiệp
                          của bạn?</span>
                      </p>
                      <p>
                        <span>Cuốn sách “Lập kế hoạch kinh doanh hiệu quả” sẽ hướng dẫn bạn cách để tạo ra
                          bản kế hoạch kinh doanh thu hút mọi tổ chức tài chính, khiến họ phải đáp ứng
                          mong muốn của bạn và hỗ trợ bạn tới cùng trong công việc kinh doanh. Thông qua
                          cuốn sách, bạn sẽ biết cách:</span>
                      </p>
                      <p>
                        <span>Tạo ra bản kế hoạch kinh doanh hoàn chỉnh Xây dựng chiến lược hoạt động cho
                          doanh nghiệp.</span>
                      </p>
                      <p>
                        <span>Đưa ra dự báo kinh doanh sát với thực tế.</span>
                      </p>
                      <p>
                        <span>Nắm rõ các thông tin tài chính ảnh hưởng lớn tới doanh nghiệp.</span>
                      </p>
                      <p>
                        <span>Trong quá trình xây dựng kế hoạch, việc tham khảo ý kiến chuyên gia là điều
                          cần thiết nhưng bạn phải là người đóng góp chính và hiểu tường tận mỗi chi tiết
                          có trong đó. Hãy xem việc lập kế hoạch giống như việc truyền đạt câu chuyện của
                          mình nhằm thuyết phục người đọc đồng hành cùng bạn trên con đường chinh phục mục
                          tiêu kinh doanh.</span>
                      </p>
                      <p>
                        <span>Bạn chỉ có một cơ hội duy nhất để tạo ấn tượng đầu tiên tốt đẹp. Đừng để nó
                          vụt mất. Hãy trình bày một văn bản có tính thuyết phục cao, bố cục đẹp mắt,
                          không mắc lỗi chính tả, ngữ pháp, bao gồm các vấn đề trọng tâm và cuối cùng là
                          chứa các thông tin bổ trợ cần thiết.</span>
                      </p>
                      <p>
                        <span>Bằng kiến thức, kinh nghiệm của mình, Brian Finch - một chuyên gia trong lĩnh
                          vực tư vấn lập kế hoạch kinh doanh và quản lý tài chính - chắc chắn sẽ giúp bạn
                          xây dựng thành công kế hoạch kinh doanh của riêng mình.</span>
                      </p>
                    </div>
                   
                    <hr />
                    {/* het tab nav-danhgia  */}
                  </div>
                  {/* het tab-content  */}
                </div>
                {/* het product-description */}
              </div>
              {/* het row  */}
            </div>
            {/* het product-detail */}
          </div>
          {/* het container  */}
        </section>
        {/* het product-page */}
        {/* khối sản phẩm tương tự */}
        <section className="_1khoi sachmoi">
          <div className="container">
            <div className="noidung bg-white" style={{width: '100%'}}>
              <div className="row">
                {/*header*/}
                <div className="col-12 d-flex justify-content-between align-items-center pb-2 bg-light pt-2">
                  <h5 className="header text-uppercase" style={{fontWeight: 400}}>Sản phẩm tương tự</h5>
                  <a href="sach-moi-tuyen-chon.html" className="btn btn-warning btn-sm text-white">Xem tất cả</a>
                </div>
              </div>
              <div className="khoisanpham" style={{paddingBottom: '2rem'}}>
                {/* 1 sản phẩm */}
                <div className="card">
                  <a href="Lap-trinh-ke-hoach-kinh-doanh-hieu-qua.html" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Lập Kế Hoạch Kinh Doanh Hiệu Quả">
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
                <div className="card">
                  <a href="Ma-bun-luu-manh-va-nhung-cau-chuyen-khac-cua-nguyen-tri.html" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Ma Bùn Lưu Manh Và Những Câu Chuyện Khác Của Nguyễn
                        Trí">
                    <img className="card-img-top anh" src="images/ma-bun-luu-manh.jpg" alt="ma-bun-luu-manh" />
                    <div className="card-body noidungsp mt-3">
                      <h6 className="card-title ten">Ma Bùn Lưu Manh Và Những Câu Chuyện Khác Của Nguyễn
                        Trí</h6>
                      <small className="tacgia text-muted">Nguyễn Trí</small>
                      <div className="gia d-flex align-items-baseline">
                        <div className="giamoi">68.000 ₫</div>
                        <div className="giacu text-muted">85.000 ₫</div>
                        <div className="sale">-20%</div>
                      </div>
                      
                    </div>
                  </a>
                </div>
                <div className="card">
                  <a href="#" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Bank 4.0 - Giao dịch mọi nơi, không chỉ là ngân hàng">
                    <img className="card-img-top anh" src="images/bank-4.0.jpg" alt="bank-4.0" />
                    <div className="card-body noidungsp mt-3">
                      <h6 className="card-title ten">Bank 4.0 - Giao dịch mọi nơi, không chỉ là ngân hàng
                      </h6>
                      <small className="tacgia text-muted">Brett King</small>
                      <div className="gia d-flex align-items-baseline">
                        <div className="giamoi">111.200 ₫</div>
                        <div className="giacu text-muted">139.000 ₫</div>
                        <div className="sale">-20%</div>
                      </div>
                   
                    </div>
                  </a>
                </div>
                <div className="card">
                  <a href="#" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Bộ Sách 500 Câu Chuyện Đạo Đức - Những Câu Chuyện
                        Tình Thân (Bộ 8 Cuốn)">
                    <img className="card-img-top anh" src="images/bo-sach-500-cau-chuyen-dao-duc.jpg" alt="bo-sach-500-cau-chuyen-dao-duc" />
                    <div className="card-body noidungsp mt-3">
                      <h6 className="card-title ten">Bộ Sách 500 Câu Chuyện Đạo Đức - Những Câu Chuyện
                        Tình Thân (Bộ 8 Cuốn)</h6>
                      <small className="tacgia text-muted">Nguyễn Hạnh - Trần Thị Thanh Nguyên</small>
                      <div className="gia d-flex align-items-baseline">
                        <div className="giamoi">111.200 ₫</div>
                        <div className="giacu text-muted">139.000 ₫</div>
                        <div className="sale">-20%</div>
                      </div>
                    
                    </div>
                  </a>
                </div>
                <div className="card">
                  <a href="#" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Lịch Sử Ung Thư - Hoàng Đế Của Bách Bệnh">
                    <img className="card-img-top anh" src="images/ung-thu-hoang-de-cua-bach-benh.jpg" alt="ung-thu-hoang-de-cua-bach-benh" />
                    <div className="card-body noidungsp mt-3">
                      <h6 className="card-title ten">Lịch Sử Ung Thư - Hoàng Đế Của Bách Bệnh</h6>
                      <small className="tacgia text-muted">Siddhartha Mukherjee</small>
                      <div className="gia d-flex align-items-baseline">
                        <div className="giamoi">111.200 ₫</div>
                        <div className="giacu text-muted">139.000 ₫</div>
                        <div className="sale">-20%</div>
                      </div>
                   
                    </div>
                  </a>
                </div>
                <div className="card">
                  <a href="#" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Cuốn Sách Khám Phá: Trời Đêm Huyền Diệu">
                    <img className="card-img-top anh" src="images/troi-dem-huyen-dieu.jpg" alt="troi-dem-huyen-dieu" />
                    <div className="card-body noidungsp mt-3">
                      <h6 className="card-title ten">Cuốn Sách Khám Phá: Trời Đêm Huyền Diệu</h6>
                      <small className="tacgia text-muted">Disney Learning</small>
                      <div className="gia d-flex align-items-baseline">
                        <div className="giamoi">111.200 ₫</div>
                        <div className="giacu text-muted">139.000 ₫</div>
                        <div className="sale">-20%</div>
                      </div>
                    
                    </div>
                  </a>
                </div>
                <div className="card">
                  <a href="#" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Bộ Sách Những Câu Chuyện Cho Con Thành Người Tử Tế (Bộ 5 Cuốn)">
                    <img className="card-img-top anh" src="images/bo-sach-nhung-cau-chuyen-cho-con-thanh-nguoi-tu-te.jpg" alt="bo-sach-nhung-cau-chuyen-cho-con-thanh-nguoi-tu-te" />
                    <div className="card-body noidungsp mt-3">
                      <h6 className="card-title ten">Bộ Sách Những Câu Chuyện Cho Con Thành Người Tử Tế (Bộ 5
                        Cuốn)</h6>
                      <small className="tacgia text-muted">Nhiều Tác Giả</small>
                      <div className="gia d-flex align-items-baseline">
                        <div className="giamoi">111.200 ₫</div>
                        <div className="giacu text-muted">139.000 ₫</div>
                        <div className="sale">-20%</div>
                      </div>
                      <div className="danhgia">
                        <ul className="d-flex" style={{listStyle: 'none'}}>
                          <li className="active"><i className="fa fa-star" /></li>
                          <li className="active"><i className="fa fa-star" /></li>
                          <li className="active"><i className="fa fa-star" /></li>
                          <li className="active"><i className="fa fa-star" /></li>
                          <li><i className="fa fa-star" /></li>
                          <li><span className="text-muted">0 nhận xét</span></li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="card">
                  <a href="#" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Lịch Sử Thế Giới">
                    <img className="card-img-top anh" src="images/lich-su-the-gioi.jpg" alt="lich-su-the-gioi" />
                    <div className="card-body noidungsp mt-3">
                      <h6 className="card-title ten">Lịch Sử Thế Giới</h6>
                      <small className="tacgia text-muted">Nam Phong tùng thư - Phạm Quỳnh chủ nhiệm</small>
                      <div className="gia d-flex align-items-baseline">
                        <div className="giamoi">111.200 ₫</div>
                        <div className="giacu text-muted">139.000 ₫</div>
                        <div className="sale">-20%</div>
                      </div>
                      <div className="danhgia">
                        <ul className="d-flex" style={{listStyle: 'none'}}>
                          <li className="active"><i className="fa fa-star" /></li>
                          <li className="active"><i className="fa fa-star" /></li>
                          <li className="active"><i className="fa fa-star" /></li>
                          <li className="active"><i className="fa fa-star" /></li>
                          <li><i className="fa fa-star" /></li>
                          <li><span className="text-muted">0 nhận xét</span></li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* khối sản phẩm đã xem  */}
      
        {/* thanh cac dich vu :mien phi giao hang, qua tang mien phi ........ */}
        <section className="abovefooter text-white mt-3" >
          <div className="container"style={{backgroundColor: '#64ae55'}}>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="dichvu d-flex align-items-center">
                  <img src="images/icon-books.png" alt="icon-books" />
                  <div className="noidung">
                    <h6 className="tieude font-weight-bold">HƠN 14.000 TỰA SÁCH HAY</h6>
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
                    <p className="detail">Từ 300.000đ ở tỉnh thành khác</p>
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
        <Footer/>
      </div>
        
        );
    }


export default ProductDetail;