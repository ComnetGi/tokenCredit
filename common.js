var totalprice = 0;

function calc_price_total() {
    
    unitprice = document.getElementById("lbUnitPrice").innerHTML;
    licensenum = document.getElementById("tbxLicenseNum").value;



    document.getElementById("lbLicenseNum").innerHTML = licensenum;
    totalprice = licensenum * unitprice;
    document.getElementById("lbTotalPrice").innerHTML = totalprice.toLocaleString() + "  円 (税抜き)";

    var today = new Date();
    var billingDay = today.getDate();
    today.setDate(today.getDay() + 7);
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDate() ;
    var billingStartDay =  year + "/" + month + "/" + day;

    console.log(billingDay);
    console.log(billingStartDay);

}

// カード情報入力フォーム表示
function doPurchase() {
     
    var today = new Date();
    var billingDay = today.getDate();
    today.setDate(today.getDay() + 7);
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDate() ;
    var billingStartDay =  year + "/" + month + "/" + day;

    console.log(billingDay);
    console.log(billingStartDay);
    document.getElementById("ac1").value = billingDay;
    document.getElementById("ac4").value = billingStartDay;
    document.getElementById("acam").value = totalprice;
    document.getElementById("actx").value = totalprice * 0.1;

    //CP非同期通信よりカード番号入力画面を表示する
    CPToken.CardInfo (
        {
            aid: '119502' //固定値
        },
        execPurchase
    );
}

function execPurchase(resultCode, errMsg) {
    if (resultCode != "Success") {
        // 戻り値がSuccess以外の場合はエラーメッセージを表示
        window.alert(errMsg);
    } else {
        window.alert("購入成功");
        // 成功したら、RobotpaymentにPOSTする
        $("#mainform").submit();
    }
}

