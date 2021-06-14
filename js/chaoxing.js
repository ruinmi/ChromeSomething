
if(/.chaoxing.com/.test(website))
{
    $('div.Py_answer.clearfix > span:nth-child(2)').css('display', 'none');
    let Anum = true;
    let flag = false;
    
    window.onkeydown = function(e) { 
        if(e.keyCode == 32){
            return false;
        }
    };
    $(document).keydown(function (e) {
        console.log(e.keyCode);
        console.log(flag);
        if (e.keyCode == 32) {
            if(flag = false) {
                flag = true;
            }
            if(Anum && flag) {
                $('div.Py_answer').each(function () {
                    $(this).css('opacity', '0');  
                    Anum = !Anum;
                    // console.log(Anum);
                })
            }else if(!Anum || !flag) {
                $('div.Py_answer').each(function () {
                    $(this).css('opacity', '1');
                    Anum = !Anum;
                    // console.log(Anum);
                })
            }
        }
        
    });
    
    $(document).keyup(function (e) {
        if (e.keyCode == 32) {
            flag = false;
        }
    })
}



