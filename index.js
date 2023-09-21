var text=document.getElementById("text");
var select=document.getElementById("select");
var toselect=document.getElementById("to-select");
var answer_area=document.getElementById("answer-area");

function convert()
{
    if(answer_area.childElementCount>0)
    {
    answer_area.removeChild(answer_area.firstElementChild);
    }

    if(text.value === "")
    {
        var p=document.createElement("p");
        p.style.color="red";
        p.style.textDecoration="underline"
        p.innerHTML="Enter the Value";
        answer_area.appendChild(p);
    }
    else if(select.value === "choose")
    {
        var p=document.createElement("p");
        p.style.color="red";
        p.style.textDecoration="underline"
        p.innerHTML="Choose the Unit of Temperature";
        answer_area.appendChild(p);
    }
    else if(toselect.value === "choose")
    {
        var p=document.createElement("p");
        p.style.color="red";
        p.style.textDecoration="underline"
        p.innerHTML="Choose the Unit of Temperature";
        answer_area.appendChild(p);
    }
                                                            // celsius                                         

    else if(select.value === "celsius" && toselect.value === "celsius")
    {
        var celsius=text.value;

        var p=document.createElement("p");
        p.innerHTML=celsius+" °C";
        answer_area.appendChild(p);
    }
    else if(select.value === "celsius" && toselect.value === "fahrenheit")
    {
        var celsius=text.value;
        var c=Number(celsius);
        var Fahrenheit=(c * 1.8) + 32;

        var p=document.createElement("p");
        p.innerHTML=Fahrenheit+" °F";
        answer_area.appendChild(p);
    }
    else if(select.value === "celsius" && toselect.value === "kelvin")
    {
        var celsius=text.value;
        var kelvin=Number(celsius)+273.15;

        var p=document.createElement("p");
        p.innerHTML=kelvin+" K";
        answer_area.appendChild(p);
    }
    else if(select.value === "celsius" && toselect.value === "rankine")
    {
        var celsius=text.value;
        var c=Number(celsius);
        var rankine=(c + 273.15)*1.8;

        var p=document.createElement("p");
        p.innerHTML=rankine+" °R";
        answer_area.appendChild(p);
    }
                                                                //  Fahrenheit                                                           

    else if(select.value === "fahrenheit" && toselect.value === "fahrenheit")
    {
        var Fahrenheit = text.value;

        var p=document.createElement("p");
        p.innerHTML=Fahrenheit+" °F";
        answer_area.appendChild(p);
    }
    else if(select.value === "fahrenheit" && toselect.value === "celsius")
    {
        var Fahrenheit = text.value;
        var F=Number(Fahrenheit);
        var celsius= (F-32)*0.55555555556;

        var p=document.createElement("p");
        p.innerHTML=celsius+" °C";
        answer_area.appendChild(p);
    }
    else if(select.value === "fahrenheit" && toselect.value === "kelvin")
    {
        var Fahrenheit=text.value;
        var kelvin=(Number(Fahrenheit) - 32) / 1.8 + 273.15;

        var p=document.createElement("p");
        p.innerHTML=kelvin+" K";
        answer_area.appendChild(p);
    }
    else if(select.value === "fahrenheit" && toselect.value === "rankine")
    {
        var Fahrenheit=text.value;
        var f=Number(Fahrenheit);
        var rankine= f + 459.67;

        var p=document.createElement("p");
        p.innerHTML=rankine+" °R";
        answer_area.appendChild(p);
    }
                                                    //  Kelvin
    else if(select.value === "kelvin" && toselect.value === "kelvin")
    {
        var kelvin=text.value;
                                                
        var p=document.createElement("p");
        p.innerHTML=kelvin+" K";
        answer_area.appendChild(p);
    }
    else if(select.value === "kelvin" && toselect.value === "celsius")
    {
        var kelvin = text.value;
        var celsius= Number(kelvin) - 273.15;

        var p=document.createElement("p");
        p.innerHTML=celsius+" °C";
        answer_area.appendChild(p);
    }
    else if(select.value === "kelvin" && toselect.value === "fahrenheit")
    {
        var kelvin = text.value;
        var k=Number(kelvin);
        var Fahrenheit = (9/5)*(k-273)+32;

        var p=document.createElement("p");
        p.innerHTML=Fahrenheit+" °F";
        answer_area.appendChild(p);
    }
    else if(select.value === "kelvin" && toselect.value === "rankine")
    {
        var kelvin=text.value;
        var k=Number(kelvin);
        var rankine= k * 1.8;

        var p=document.createElement("p");
        p.innerHTML=rankine+" °R";
        answer_area.appendChild(p);
    }
                                                    //    RanKine
    else if(select.value === "rankine" && toselect.value === "rankine")
    {
        var rankine= text.value;
                                                
        var p=document.createElement("p");
        p.innerHTML=rankine+" °R";
        answer_area.appendChild(p);
    }
    else if(select.value === "rankine" && toselect.value === "celsius")
    {
        var rankine= text.value;
        var r=Number(rankine);
        var celsius=(r - 491.67) * (5/9);   

        var p=document.createElement("p");
        p.innerHTML=celsius+" °C";
        answer_area.appendChild(p);
    }
    else if(select.value === "rankine" && toselect.value === "fahrenheit")
    {
        var rankine = text.value;
        var Fahrenheit =rankine - 459.67;

        var p=document.createElement("p");
        p.innerHTML=Fahrenheit+" °F";
        answer_area.appendChild(p);
    }
    else if(select.value === "rankine" && toselect.value === "kelvin")
    {
        var rankine=text.value;
        var kelvin= rankine / 1.8;

        var p=document.createElement("p");
        p.innerHTML=kelvin+" K";
        answer_area.appendChild(p);
    }
}