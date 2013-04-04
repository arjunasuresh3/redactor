instanceCount = 0;
function S4() {
   return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}

function guid() {
   return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

function asd() {
    for (var i=0;i<10;i++) {
        instanceCount = instanceCount + 1;
        var uuid = guid(),
        divObj = document.createElement('div');
        divObj.className = 'top_div';
        divObj.id = 'top_div_nic_' + uuid;
        divObj.innerHTML = 'Nic Editor';
        var textareaObj = document.createElement('textarea');
        textareaObj.className = 'simpleEdit';
        textareaObj.id = 'nic_' + uuid;
        textareaObj.style.cssText="width: 300px; height: 100px;";
        divObj.appendChild(textareaObj);
        document.body.appendChild(divObj);
        $(textareaObj).redactor(); // textareaObj.redactor();
    }
    console.log('Totalcount');
    console.log(instanceCount);
    return true;
}

function dsa() {
    setTimeout(function () {
                   var aEds = document.querySelectorAll('textarea.simpleEdit'),
                   insCount = aEds.length;
                   console.log('delcount');
                   console.log(insCount);
                   for (var i=0;i<insCount;i++) {
                       var sEdId = aEds[i];
                       sEdId = sEdId.id;
                       // var asd = nicEditors.findEditor(sEdId);
                       // asd.removeInstance(); // this method not to be used as it will look into complete DOM to find editor node
                       $(sEdId).destroyEditor(); // asd.destroy();
                       sEdId = null;
                       // asd = null;
                   }
                   aEds = null;
                   document.body.innerHTML = '';
                   return true;
               },2);
}

var intervalId = setInterval(function() {
                                 asd();
                                 dsa();
                             },10000);

console.log(intervalId); // setinterval id to stop the process