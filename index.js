'use strict';


const template = document.getElementById('dialog-template')
document.body.appendChild(
    document.importNode(template.content, true)
);