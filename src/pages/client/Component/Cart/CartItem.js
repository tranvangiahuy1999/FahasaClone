import React, { useEffect, useState } from "react";
import Checkbox from '@material-ui/core/Checkbox';
import { formatCurrency } from "../../../../utils/format-string.util";
import { convertURL } from "../../../../utils/format-string.util";
const CartItem = (props) => {
    const { itemvalue, index, listvalue, ...other } = props;
    const handleOpenBackdrop = other.open;
    const handleCloseBackdrop = other.close;
    const handleChangeChecked = other.changeCheckbox;
    const setValue = other.setvalue;
    const checkProductExist = other.checkproductexist;
    const [checked, setChecked] = useState(itemvalue.checked);
    const handleChangeCheckbox = (event, index) => {
        setChecked(!checked);
        handleChangeChecked(index, !checked);
    };
    const deleteRowHandle = (index) => {
        let temp = listvalue;
        temp.splice(index, 1);
        setValue([...temp]);
        localStorage.setItem("Cart", JSON.stringify(temp));
    };
    const handleChangeQuantity = async (event, index) => {
        let temp = listvalue;
        handleOpenBackdrop();
        if (await checkProductExist(temp[index].id)) {
            if (event === "in") {
                temp[index].count += 1;
            } else {
                if (temp[index].count - 1 < 1) {
                    handleCloseBackdrop();
                    return;
                }
                temp[index].count -= 1;
            }
            setValue([...temp]);
            localStorage.setItem("Cart", JSON.stringify(temp));
        } else {
            alert({
                icon: "error",
                title: "Sản phẩm không tồn tại",
                msg: "Vui lòng xóa sản phẩm khỏi giỏ hàng",
            });
        }
        handleCloseBackdrop();
    };
    return (
        <div className="cart-list-items ">
            <div className="d-flex  align-items-center pb-2">
                <div className="cart-item  d-block d-md-flex align-items-center">
                    <div className="d-flex  my-3 align-items-center">
                        <div>
                            <Checkbox
                                checked={checked}
                                onClick={(event) => handleChangeCheckbox(event, index)}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                        </div>
                        <div className="d-flex align-items-center">
                            <a href={"/chi-tiet/" + convertURL(itemvalue.name) + "." + itemvalue.id} className="img">
                                <div className="img-product" style={{ backgroundImage: "url(" + (itemvalue.image) + ")" }}>
                                </div>
                            </a>
                            <div className="item-info px-3">
                                <a href={"/chi-tiet/" + convertURL(itemvalue.name) + "." + itemvalue.id} className="ten">
                                    {itemvalue.name}
                                    {itemvalue.nameParam ? <span className="text-danger"> || {itemvalue.nameParam} </span> : <></>}
                                </a>
                            </div>
                        </div>

                        {/* <div>
                        {itemvalue.nameParam ? (
                            <div className="type-product text-secondary">
                                <p>
                                    Phân loại hàng
                                </p>
                                <p>
                                    {itemvalue.nameParam}
                                </p>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div> */}
                    </div>
                    <div className="block-price ml-md-auto">
                        <p className="text-center">{formatCurrency(itemvalue.price)}đ</p>
                    </div>
                    <div className="block-number">
                        <div className="soluong mx-auto">
                            <div className="input-number input-group">
                                <div
                                    className="input-group-prepend"
                                    onClick={() => handleChangeQuantity("de", index)}
                                >
                                    <span className="input-group-text btn-spin btn-dec">
                                        -
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    style={{ height: "100%" }}
                                    value={itemvalue.count}
                                    readOnly={true}
                                    className="soluongsp  text-center"
                                />
                                <div
                                    className="input-group-append"
                                    onClick={() => handleChangeQuantity("in", index)}
                                >
                                    <span className="input-group-text btn-spin btn-inc">
                                        +
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" block-total-price">
                        <div className="item-price ml-auto d-flex flex-column align-items-end">
                            <div className="giamoi">
                                {formatCurrency(
                                    Number(itemvalue.price) * Number(itemvalue.count)
                                )}
                                ₫
                            </div>

                        </div>
                    </div>
                    <div className="block-delete d-none d-md-block">
                        <span className="remove mt-auto">
                            <i
                                onClick={() => deleteRowHandle(index)}
                                className="far fa-trash-alt"
                            />
                        </span>
                    </div>
                </div>
                <div className="block-delete d-md-none">
                    <span className="remove mt-auto">
                        <i
                            onClick={() => deleteRowHandle(index)}
                            className="far fa-trash-alt"
                        />
                    </span>
                </div>
            </div>

            <hr />
        </div>
    )
}
export default CartItem;