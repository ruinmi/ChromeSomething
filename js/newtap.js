document.querySelector("body div div.icons div").ondragstart = function () {
    return false
};
const frame = document.querySelector("body div.content div.icons div");
const settings = document.querySelector("body div.settings");
const topbar = document.querySelector('body div.flow-window div.top-bar');
const flowframe = document.querySelector('body div.flow-window');
let ModifyKey = false;
let Icons = {

    init: function () {
        chrome.storage.sync.get(function (e) {
            for (let key in e) {
                Icons.createIcon(e[key]['icon'], e[key]['title'], e[key]['href'], key);
            }
        })
    },

    createIcon: function (icon, title, href, key) {
        const a = document.createElement('a');
        const sub_div = document.createElement('div');
        const sub_sub_img = document.createElement('img');
        const sub_sub_div = document.createElement('div');
        const sub_sub_span = document.createElement('span');
        a.appendChild(sub_div);
        sub_div.appendChild(sub_sub_img);
        sub_div.appendChild(sub_sub_div);
        sub_div.appendChild(sub_sub_span);
        frame.appendChild(a);
        sub_div.classList.add('icon')
        sub_sub_div.classList.add('title')
        a.href = href;
        sub_sub_img.src = icon;
        sub_sub_div.innerHTML = title;
        sub_sub_span.innerHTML = 'x';
        sub_sub_span.id = 'i-' + key;
        document.querySelector('#i-' + key).onclick = function (e) {
            e.preventDefault();
            e.stopPropagation();
            Icons.deleteIcon(key);
        };
        ModifyIcon();
    },

    setIcon: function (icon, title, href) {
        chrome.storage.sync.get(function (e) {
            let count = 0;
            for (let key in e) {
                count++;
            }
            let new_icon = {
                icon: icon,
                title: title,
                href: href
            }
            let obj = {};
            obj[count] = new_icon;
            chrome.storage.sync.set(obj);
            Icons.createIcon(icon, title, href, count);
        });
    },

    deleteIcon: function (icon_deleted_key) {

        chrome.storage.sync.get(function (e) {
            let count = 0;
            let obj = {};
            for (let key in e) {
                frame.removeChild(frame.childNodes[1]);
                if (key != icon_deleted_key) {
                    let refresh_icon = {
                        icon: e[key]['icon'],
                        title: e[key]['title'],
                        href: e[key]['href']
                    };
                    obj[count] = refresh_icon;
                    count += 1;
                }
            }
            chrome.storage.sync.clear();
            chrome.storage.sync.set(obj);
            Icons.init();
        })
    }

}

Icons.init();
// 点击空白处关闭
document.querySelector(".wrap").onclick = function () {
    const href_input = document.querySelector("body  div.flow-window  div  input[type=text]:nth-child(2)");
    const title_input = document.querySelector("body  div.flow-window  div  input[type=text]:nth-child(3)");
    const icon_input = document.querySelector("body  div.flow-window  div  input[type=text]:nth-child(1)");
    document.querySelector('body div.flow-window div.top-bar').style.display = "none";
    document.querySelector('body div.flow-window div.add-icon-part').style.opacity = "0";
    document.querySelector(".flow-window").style.visibility = "hidden";
    document.querySelector(".flow-window").style.width = "0px";
    document.querySelector(".flow-window").style.height = "0px";
    document.querySelector(".wrap").style.visibility = "hidden";
    icon_input.value = '';
    href_input.value = '';
    title_input.value = '';
    ModifyKey = false;

    // flowframe.style.top ='490px';
    // flowframe.style.left ='662px';
};

// 添加icon按钮
function aDDIcon() {
    if(ModifyKey) {
        console.log(ModifyKey);
        Icons.deleteIcon(ModifyKey);
        ModifyKey = false;
    }
    const href_input = document.querySelector("body  div.flow-window  div  input[type=text]:nth-child(2)");
    const title_input = document.querySelector("body  div.flow-window  div  input[type=text]:nth-child(3)");
    const icon_input = document.querySelector("body  div.flow-window  div  input[type=text]:nth-child(1)");
    const icon = "http://favicon.cccyun.cc/" + href_input.value.match(/.*?\.[a-z]{3}\/|.*?\.[a-z]{2}\//);
    const title = title_input.value;
    const href = href_input.value;

    if (href != '' && title != '') {
        if (icon_input.value != '') {
            Icons.setIcon(icon_input.value, title, href);
        } else {
            Icons.setIcon(icon, title, href);
        }

        icon_input.value = '';
        href_input.value = '';
        title_input.value = '';
        
        return true;
    } else {
        alert('有留空');
        return false;
    }
};
document.querySelector("body  div.flow-window  div  span.add-button").onclick = aDDIcon;

// 打开设置菜单
settings.onclick = function () {
    document.querySelector(".flow-window").style.width = "1200px";
    document.querySelector(".flow-window").style.height = "800px";
    document.querySelector(".flow-window").style.visibility = "visible";
    document.querySelector(".wrap").style.visibility = "visible";
    document.querySelector('body div.flow-window div.add-icon-part').style.opacity = "1";
    document.querySelector('body div.flow-window div.top-bar').style.display = "block";
};
// 回车监听
flowframe.addEventListener('keyup', function (e) {
    if (e.code == 'Enter') {
        if (aDDIcon()) {
            document.querySelector(".wrap").click();
        }
    }
})

// 浮动窗口移动
let mousedown = false;
let preX = 0;
let preY = 0;
let distanceX = 0;
let distanceY = 0;
topbar.onmousedown = function (e) {
    preX = e.clientX;
    preY = e.clientY;
    mousedown = true;
}
document.onmouseup = function () {
    mousedown = false;

    preX = 0;
    preY = 0;
    distanceX = 0;
    distanceY = 0;
}
document.onmousemove = function (e) {
    if (mousedown == true) {
        distanceX = e.clientX - preX;
        distanceY = e.clientY - preY;
        preX += distanceX;
        preY += distanceY;
        // console.log("e.clientX:" + e.clientX+ "preX:"+ preX);
        let left = Number(window.getComputedStyle(flowframe, null).left.slice(0, window.getComputedStyle(flowframe, null).left.length - 2));
        let top = Number(window.getComputedStyle(flowframe, null).top.slice(0, window.getComputedStyle(flowframe, null).top.length - 2));
        // console.log('fetchTop:'+top+'\tdistanceY:'+distanceY+'\t\tfetchLeft:'+left+'\tdistanceX:'+distanceX);

        // 限制区域
        // if(left - 168 < 0)
        // {
        //     flowframe.style.left = "169px";
        //     return false
        // }
        if (top < 0) {
            flowframe.style.top = "0px";
            return false;
        }
        // else if((left + 1200 - 165) >= window.innerWidth)
        // {
        //     flowframe.style.left = "1097px";
        //     return false;
        // }
        // else if ( (top + 800 - 365) >= window.innerHeight)
        // {
        //     flowframe.style.top = "605px";
        //     return false;
        // }


        flowframe.style.top = distanceY + top + 'px';
        flowframe.style.left = distanceX + left + 'px';
    }
}
// 修改Icon 数据
function ModifyIcon() {
    const flowSelect = document.querySelector('#flow-select');
    let ICONs = document.getElementsByTagName('a');
    document.querySelector("#flow-select").addEventListener('contextmenu', event => event.preventDefault());
    document.addEventListener('mouseup', e => {if(e.button == 0){flowSelect.style.display='none';}})
    for (let i = 0; i < ICONs.length; i++) {
        ICONs[i].addEventListener('mouseup', function (e) {
            if (e.button == 2) {
                flowSelect.style.display = 'block';
                flowSelect.style.left = (e.clientX - (document.body.offsetWidth / 2 - 250)) + 'px';
                flowSelect.style.top = (e.clientY - (195.333 + 0.2 * window.innerHeight)) + 'px';
                
                let cou = 0;
                for (let item in e.path) {
                    cou++;
                }
                let a_title = e.path[String(cou - 8)]['innerText'].slice(0, -2);
                console.log(e.path);
                chrome.storage.sync.get(function (li_e) {
                    for(let key in li_e) {
                        if(a_title == li_e[key]['title']) {
                            
                            // Icons.deleteIcon(key);
                            document.querySelector("#flow-select ul li:nth-child(1)").addEventListener('mouseup', e => {
                                ModifyKey = key;
                                settings.click();
                                const href_input = document.querySelector("body  div.flow-window  div  input[type=text]:nth-child(2)");
                                const title_input = document.querySelector("body  div.flow-window  div  input[type=text]:nth-child(3)");
                                const icon_input = document.querySelector("body  div.flow-window  div  input[type=text]:nth-child(1)");
                                href_input.value = li_e[key]['href'];
                                title_input.value = li_e[key]['title'];
                                icon_input.value = li_e[key]['icon'];
                            })
                        }
                    }
                });
            }
        })
    }
}
const closebtn = document.querySelector('#close_button');
closebtn.addEventListener('mousedown', e => {
    closebtn.style.background = '#d84944';
})
closebtn.addEventListener('mouseup', e => {
    closebtn.style.background = '#ff554f';
    document.querySelector(".wrap").click();
})