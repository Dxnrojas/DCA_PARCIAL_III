import { navigate } from '../store/actions';
import { dispatch } from '../store';
import { Screens } from '../types/store';

export enum Attribute {
    
}

class NavBar extends HTMLElement {
    

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return Object.values(Attribute);
    }

    attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
        
    }

    connectedCallback() {
        this.render();
    
       
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <section class="container-top">
                <h1>Vinyl Store</h1>
            </section>
            <section class="container-text">
                <label class="nav-label-home">User View</label>
                <label class="nav-label-add">Admin View</label>
            </section>
            `;
    
            // Event listeners
            const userviewBtn = this.shadowRoot?.querySelector('.nav-label-home');
            userviewBtn?.addEventListener('click', () => {
                dispatch(navigate(Screens.USERVIEW));
            });
    
            const adminViewBtn = this.shadowRoot?.querySelector('.nav-label-add');
            adminViewBtn?.addEventListener('click', () => {
                dispatch(navigate(Screens.ADMINVIEW));
            })

        }
    }
}    

customElements.define('nab-bar', NavBar);
export default NavBar;