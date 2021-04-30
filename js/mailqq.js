try {
    const reci_box_a = document.querySelector("#folder_1");
    const logo_a = document.querySelector("#logotips > a");
    const main_a = document.querySelector("#logotips > div > div > span.addrtitle > a:nth-child(1)");
    const search_input = document.querySelector("#subject");
    search_input.value = "";
    search_input.placeholder = "搜索";
    main_a.href = reci_box_a.href;
    logo_a.href = reci_box_a.href;
    reci_box_a.click();
    // document.getElementById("div_showbefore").onclick = function(e) {
    //     console.log(e.target);
    //     console.log('e.target.value');
    // }
} catch (error) {};