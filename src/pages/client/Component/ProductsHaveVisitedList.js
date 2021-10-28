import React from "react";
import ProductCard from "./ProductCard";

const ProductsHaveVisitedList = () => {
  return (
    <div className="product-list-visited-container bg-white">
      <div className="product-list-visited-title">Sản phẩm đã xem</div>
      <div className="row m-0 p-0">
        <div className="col-lg col-md-3 col-sm-4 col-6 p-3">
          <ProductCard
            img={
              "https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_196417.jpg"
            }
            productName={"Where To Play"}
            productPrice={100000}
          ></ProductCard>
        </div>
        <div className="col-lg col-md-3 col-sm-4 col-6 p-3">
          <ProductCard
            img={
              "https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_196417.jpg"
            }
            productName={
              "Where To Play: 3 Bước Để Xác Định Thị Trường Đắt Giá Của Doanh Nghiệp"
            }
            productPrice={100000}
          ></ProductCard>
        </div>
        <div className="col-lg col-md-3 col-sm-4 col-6 p-3">
          <ProductCard
            img={
              "https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_196417.jpg"
            }
            productName={
              "Where To Play: 3 Bước Để Xác Định Thị Trường Đắt Giá Của Doanh Nghiệp"
            }
            productPrice={100000}
          ></ProductCard>
        </div>
        <div className="col-lg col-md-3 col-sm-4 col-6 p-3">
          <ProductCard
            img={
              "https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_196417.jpg"
            }
            productName={
              "Where To Play: 3 Bước Để Xác Định Thị Trường Đắt Giá Của Doanh Nghiệp"
            }
            productPrice={100000}
          ></ProductCard>
        </div>
        <div className="col-lg col-md-3 col-sm-4 col-6 p-3">
          <ProductCard
            img={
              "https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_196417.jpg"
            }
            productName={
              "Where To Play: 3 Bước Để Xác Định Thị Trường Đắt Giá Của Doanh Nghiệp"
            }
            productPrice={100000}
          ></ProductCard>
        </div>
      </div>
    </div>
  );
};

export default ProductsHaveVisitedList;
