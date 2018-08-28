/**
 * Created by Administrator on 2017/9/20.
 */
//模拟日历
//需求：每天打开这个页面都能定时显示年月日和星期几
//步骤：（创建一个当前日期的日期对象，然后获取其中的年月日和星期，赋值给div）
//1.创建一个当前日期的日期对象
//2.然后获取其中的年月日和星期
//3.赋值给div
//1.创建一个当前日期的日期对象
var date = new Date();
//2.然后获取其中的年月日和星期
var year = date.getFullYear();
var month = date.getMonth();
var hao = date.getDate();
var week = date.getDay();
//        console.log(year+" "+month+" "+hao+" "+week);
//3.赋值给div
var arr = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
var time = document.getElementsByClassName("time")[0];
time.innerText = year+"年"+(month+1)+"月"+hao+"日 "+arr[week];
