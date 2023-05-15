function main() {
    console.log("nicks-cors-test");
    $.ajax
        ({
            url: "https://rm-spa-static.internal.realmadrid.es/sobre-el-real-madrid/historia",
            success: function (data) {
                console.log(data);
            }
        });
}
