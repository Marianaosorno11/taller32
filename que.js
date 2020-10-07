
var que=function()
 {
 
 	var n1=document.getElementById('que');
	var e2=document.getElementById('e');
	e2.className="im2";


}
var eje=function()
 {
 	var n1=document.getElementById('que');
	var e2=document.getElementById('e');
     e2.className="im";
	var n2=document.getElementById('eje');
	var t=document.getElementById('t');
	var sol2=document.getElementById('sol');
	var x=document.getElementById('x');
	var j=document.getElementById('j');

	t.className="t2";
	sol2.className="sol2";
	x.className="x2";
	j.className="j2";
}
var solu=function()
 {
 	var pn1=document.getElementById('numero1').value;
	var pn2=document.getElementById('numero2').value;
    var pn3=document.getElementById('numero3').value;
    var sum=parseInt(pn1)+parseInt(pn2)-parseInt(pn3);
    alert('EL RESULTADO DE HABER SUMADO  '+pn1 +' Y '+pn2+' Y HABERLE RESTADO '+pn3+' ES '+sum)
	
}
