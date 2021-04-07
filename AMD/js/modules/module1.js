define(function () {
    let data = 'xzq'
    function GetUP(){
        return data.toUpperCase();
    }
    function GetL() {
        return data.toLowerCase();
    }
    return {GetUP,GetL};
})