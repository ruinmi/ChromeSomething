const website = window.location.href;

// huya
if(/.huya.com/.test(website))
{
    chat_part = document.querySelector("#J_mainRoom > div.room-core > div.room-core-r");
    father = document.querySelector("#tipsOrchat > div > div.chat-room__ft__pannel > div");
    dragdownarea = document.querySelector("#tipsOrchat");
    videoarea = document.querySelector("#J_mainRoom > div.room-core > div.room-core-l");
    
    videoarea.style.position = "relative";
    chat_part.style.transition = "all 0.3s ease";
    videoarea.style.transition = "all 0.3s ease";
    
    arise_button = document.createElement("span");
    arise_button.style.display = "inline-block";
    arise_button.style.background = "#ff8400";
    arise_button.style.width = "20px";
    arise_button.style.height = "20px";
    arise_button.style.borderRadius = "5px";
    arise_button.classList.add("room-chat-tool");
    arise_button.classList.add("room-chat-tool-blockWords");
    arise_button.style.transition = "all 0.2s ease";
    arise_button.onmouseover = function(){this.style.background = "#c76700";this.style.color = "rgb(212 212 212)"};
    arise_button.onmouseout = function(){this.style.background = "#ff8400";this.style.color = "#f2f2f2"};
    arise_button.innerText = "^";
    arise_button.style.lineHeight = "24px";
    arise_button.style.textAlign = "center";
    arise_button.style.fontSize = "16px";
    arise_button.style.cursor = "pointer";
    arise_button.style.color = "#f2f2f2";
    
    
    
    dragdownbutton = document.createElement("span")
    dragdownbutton.style.display = "inline-block";
    dragdownbutton.style.position = "absolute";
    dragdownbutton.style.bottom = "0px";
    dragdownbutton.style.width = "100%";
    dragdownbutton.style.height = "24px";
    dragdownbutton.style.background = "#f2f2f2";
    dragdownbutton.style.color = "#000";
    dragdownbutton.innerText = "⇩";
    dragdownbutton.style.textAlign = "center";
    dragdownbutton.style.lineHeight = "24px";
    dragdownbutton.style.fontSize = "24px";
    dragdownbutton.style.cursor = "pointer";
    dragdownbutton.style.userSelect = "none";
    dragdownbutton.onmouseover = function(){this.style.background = "#ffa900";this.style.color = "rgb(212 212 212)"};
    dragdownbutton.onmouseout = function(){this.style.background = "#f2f2f2";this.style.color = "#000"};
    dragdownbutton.style.transition = "all 0.3s ease";

    father.appendChild(arise_button);
    
    arise_button.onclick = function()
    {
        chat_part.style.transition = "all 0.2s linear";
        videoarea.style.transition = "all 1.5s ease";
        chat_part.style.top = "-97.5%";
        dragdownarea.appendChild(dragdownbutton);
        videoarea.style.right = "-105px";
    };
    
    dragdownbutton.onclick = function()
    {
        videoarea.style.transition = "all 0.3s cubic-bezier(0, 0, 0.2, 1) 0s";
        chat_part.style.transition = "all 0.6s cubic-bezier(1, 0.04, 0.29, 1.26) 0s";
        chat_part.style.top = "0";
        videoarea.style.right = "0px";
        dragdownarea.removeChild(dragdownbutton);
    };
    
    arise_button.onclick();
}
else
{
    console.log('not huya');
}
// chaoxing
if(/.passport2.chaoxing.com/.test(website))
{
    const user = document.querySelector("#phone");
    const psw = document.querySelector("#pwd");
    const login = document.querySelector("#loginBtn");
    user.value = "18816525960";
    psw.value = "2632995"
    login.click();
}
else 
{
    console.log("not chaoxing");
}
// swcloud
if(/.chnroute.com/.test(website))
{
    document.querySelector("#email").value = "rruinmi1@gmail.com";
    document.querySelector("#password").value = "a2632995";
    document.querySelector("#app > section > div > div > div > div.card.card-primary > form > div > div:nth-child(4) > button").click();
}
// instagram
if(document.querySelector("body > div.RnEpo.Yx5HN > div") != null)
{
    document.querySelector("body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.HoLwm").click();
}
else 
{
    console.log("insta no pop up!");
}
if(/.dbfmnekepjoapopniengjbcpnbljalfg/.test(website))
{
    console.log("true");
}
