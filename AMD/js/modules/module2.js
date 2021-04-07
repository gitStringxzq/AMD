define(['module1'],function (module1) {
    let msg = 'aiguigu'

    function getData() {
        return module1.GetUP + msg
    }
    return getData;
})

// define(['module1'],function (module1) {
//     let msg = '0719就业顺利！'
//
//     //获取module1中的data和module2中的msg
//     function getDataAndMsg() {
//         return module1.GetUP() + msg
//     }
//
//     return getDataAndMsg
// })
