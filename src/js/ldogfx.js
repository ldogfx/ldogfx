// ldogfx.js
// Inputs foreign exchange daily quotes and outputs graphics and sound.

$(function()
{
/*
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'dolartoday.xlsx', true);
    xhr.responseType = 'blob';
    xhr.onload = function(e) {
      if (this.status == 200) {
        var myBlob = this.response;
        
        var reader = new FileReader();
        reader.onload = function(e) {
            var data = e.target.result;
            var arr = String.fromCharCode.apply(null, new Uint8Array(data));
            var wb = XLSX.read(btoa(arr), {type: 'base64'});

            var sheet = wb.Sheets['cucuta'];
            var leResult = sheet["B2"];
            $("#xlsresult").html("Today's quote is "+leResult.v);
        };
        reader.onerror = function(e) {
            $("#xlsresult").html("File not found");
        }
        reader.readAsArrayBuffer(myBlob);
      }
    };
    xhr.send();
*/
});