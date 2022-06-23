$(document).ready(function() {
    let employeeData = [
        { id: 1, name: "rishtarash", price: "25$", imgUrl: "./img/3.jpg" },
        { id: 2, name: "loptop", price: "40$", imgUrl: "./img/1.jpg" },
        { id: 3, name: "saat", price: "15$", imgUrl: "./img/2.jpg" }
    ]
    let tmpl = `

      <li id="\${id}" class="wrap-item"><img src="\${imgUrl}"></img> <span>\${name}</span> <span>\${price}</span>
      <a class= "modal-btn" data-id="\${id}" href="#modal-\${id}" rel="modal:open">more info</a>
      </li>

      <div id="modal-\${id}" class="modal">
        <p>\${name} \${price}</p>
        <a  href="#" rel="modal:close">Close</a>
    </div>

    `;

    $.tmpl(tmpl, employeeData).appendTo(".wrapper")
});