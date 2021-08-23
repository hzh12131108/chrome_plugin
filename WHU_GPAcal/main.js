/*
 * @Author: 何志恒
 * @Date: 2021-08-23 18:56:27
 * @LastEditTime: 2021-08-23 19:48:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \chrome_plugin\WHU_GPAcal\main.js
 */

document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);

function fireContentLoadedEvent(){
    document.getElementById("search_go").addEventListener("click",async function(){
        var whujs = document.getElementById("tabGrid")
        //console.log(whujs)
        //console.log("test")
        var tbody = await whujs.childNodes[0].childNodes
        //console.log(tbody)
        var score_jd = 0;
        var al_jd = 0;
        //console.log(tbody[2])
        for (var i = 1; i < tbody.length; i++) {
          //console.log(tbody[i]);
          score_jd = score_jd + parseFloat(tbody[i].childNodes[21].title);
          al_jd = al_jd + parseFloat(tbody[i].childNodes[6].title);
        }
        console.log(score_jd/al_jd);
        alert("你的GPA为"+score_jd/al_jd)
    })
}
