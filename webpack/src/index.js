import './css/index.css';
import './css/index1.scss';
function createDomElement () {
        let dom = document.createElement('div');
        dom.innerHTML = 'Hello World ...';
        dom.className = 'box';
        return dom;
}
document.body.appendChild(createDomElement());