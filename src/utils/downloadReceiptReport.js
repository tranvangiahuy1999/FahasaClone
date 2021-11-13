import React from 'react'
import fileDownload from 'js-file-download'
import axios from 'axios'

const downloadReceiptReport = async () => {
    const url = process.env.REACT_APP_EXPORT_RECEIPT_URL;
    await axios.get(url, {
        responseType: 'blob',
    })
        .then((res) => {
            fileDownload(res.data, "hoa-don.xlsx")
        })
}

export default downloadReceiptReport