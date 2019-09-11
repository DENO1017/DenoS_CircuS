
$(document).ready(function(){
    var strName = localStorage.getItem('keyName');

    var strPass = localStorage.getItem('keyPass');

    if(strName){
        $('#user').val(strName);
    }
    if(strPass){
        $('#pass').val(strPass);
        $('#isRemember').attr('checked',true);
    }



});

function loginBtn_click(){
    console.log("loginBtnClicked");
    if($('#isRemember').is(':checked')){

        var strName = $('#user').val();

        var strPass = $('#pass').val();

        localStorage.setItem('keyName',strName);

        localStorage.setItem('keyPass',strPass);

    }
    else{
        localStorage.removeItem('keyPass');
    }


}