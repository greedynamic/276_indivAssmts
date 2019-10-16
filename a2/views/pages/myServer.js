function addEmails(button)
{
  var div = document.createElement("div");
  var label=document.createElement("LABEL");
  var text=document.createTextNode("Email(s): ");
  var input = document.createElement("INPUT");
  input.setAttribute("type", "text");
  var em=button.parentElement;
  label.appendChild(text);
  em.appendChild(label);
  em.appendChild(input);
  em.appendChild(div);
}

function addUsers()
{
  var form=document.getElementById('origin');
  var cp=form.cloneNode(true);
  cp.style.display = 'block';
  document.getElementById("side").appendChild(cp);
}