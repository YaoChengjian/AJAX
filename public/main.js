btn1.onclick = function() {
  const request = new XMLHttpRequest();
  request.open("GET", "style.css");
  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
      let style = document.createElement("style");
      style.textContent = request.responseText;
      document.head.appendChild(style);
    }
  };
  request.send();
};

btn2.onclick = function() {
  let request = new XMLHttpRequest();
  request.open("GET", "2.js");
  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status) {
      let script = document.createElement("script");
      script.setAttribute("src", "2.js");
      document.body.appendChild(script);
    }
  };
  request.send();
};

btn3.onclick = function() {
  let request = new XMLHttpRequest();
  request.open("GET", "3.html");
  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
      let div = document.createElement("div");

      div.innerHTML = request.responseText;

      document.body.insertBefore(div, btn1);
    }
  };
  request.send();
};

btn4.onclick = function() {
  let request = new XMLHttpRequest();
  request.open("GET", "4.xml");
  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.responseText);
    }
  };
  request.send();
};

btn5.onclick = function() {
  let request = new XMLHttpRequest();
  request.open("GET", "5.json");
  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
      let json = request.responseText;
      console.log(JSON.parse(json));
    }
  };
  request.send();
};
