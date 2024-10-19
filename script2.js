function visaResponse()
{
const c = document.getElementById("country").value;
const d = document.getElementById("category").value;
const e = document.getElementById("type").value;
const result = "https://tinyurl.com/"+c + d + e;
document.getElementById("return").setAttribute("href",result);

}

function showhide()
        {
            var div = document.getElementById("div1");
            if (div.style.display !== "block") {
                div.style.display = "block";
            }
            else {
                div.style.display = "none";
            }
        }
