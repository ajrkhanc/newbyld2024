function chkcontrol(j) {
    var total=0;
    for(var i=0; i < document.form1.ckb.length; i++){
    if(document.form1.ckb[i].checked){
    total =total +1;}
    if(total > 3){
    alert("Please Select only three") 
    document.form1.ckb[j].checked = false ;
    return false;
    }
    }
    }