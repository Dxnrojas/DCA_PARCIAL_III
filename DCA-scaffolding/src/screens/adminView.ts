import NavBar from '../components/navbar';
import '../../components/NavBar/navBar';

import { addObserver, appState } from '../store';
import { addProducts } from '../utils/firebase';

class CreationScreen extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        addObserver(this);
    }

    connectedCallback() {
        this.render();
    }

    async render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <h1>Creation Screen</h1>
                <nab-bar></nab-bar>
                <div class="creation-content">
                    <form>
                        <label for="title-event">Title Event:</label>
                        <input type="text" id="title" name="title-event" required>

                        <label for="date-event">Date:</label>
                        <input type="text" id="Date" name="artist-name" required>

                        <label for="location-event">Location:</label>
                        <input type="number" id="Location" name="price" required>

                        <label for="attendees-event">attendees:</label>
                        <input type="number" id="attendees" name="stock" required>

                        <label for="image-url">Image URL:</label>
                        <input type="text" id="image-url" name="image-url" required>

                        <button type="submit">Add Product</button>
                    </form>
                </div>
            `;

            // Add event listener for the form submission
            const form = this.shadowRoot?.querySelector('form');
            form?.addEventListener('submit', (event) => {
                event.preventDefault();
                this.handleFormSubmission();
            });

        }
    }

    private getFormValues(): VinylComponent {
        const albumNameElement = this.shadowRoot?.getElementById('ttitle') as HTMLInputElement | null;
        const artistNameElement = this.shadowRoot?.getElementById('date') as HTMLInputElement | null;
        const priceElement = this.shadowRoot?.getElementById('location') as HTMLInputElement | null;
        const stockElement = this.shadowRoot?.getElementById('attendees') as HTMLInputElement | null;
        const imageUrlElement = this.shadowRoot?.getElementById('image-url') as HTMLInputElement | null;
    
        return {
            albumName: albumNameElement?.value || '',
            artistName: artistNameElement?.value || '',
            price: priceElement?.value ? parseFloat(priceElement.value) : 0,
            stock: stockElement?.value ? parseInt(stockElement.value) : 0,
            imageUrl: imageUrlElement?.value || '',
        };
    }
    
    async handleFormSubmission() {
        // Get the form data
        const formValues = this.getFormValues();
    
        try {
            // Save the product to the database
            await addProducts(formValues);
            console.log('Product added successfully');
        } catch (error) {
            console.error('Error adding product:', error);
        }
    }
    
    
    }


customElements.define('creation-screen', CreationScreen);
export default CreationScreen;