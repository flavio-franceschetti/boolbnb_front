<script>
import axios from 'axios';
import { store } from '../../store';

export default {
    name: 'ContactOwner',
    data() {
        return {
            apartment: {},
            name: '',
            surname: '',
            email: '',
            description: '',
            apartmentId: this.$route.params.id,
            errors: {
                name: '',
                surname: '',
                email: '',
                description: '',
            },
        };
    },
    methods: {
        validateForm() {
            this.errors = { name: '', surname: '', email: '', description: '' };
            let valid = true;

            if (!this.name || this.name.length > 255) {
                this.errors.name = 'Il Nome e\' richiesto e deve contenere meno di 255 caratteri.';
                valid = false;
            }

            if (!this.surname || this.surname.length > 255) {
                this.errors.surname = 'Il Cognome e\' richiesto e deve contenere meno di 255 caratteri.';
                valid = false;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!this.email || !emailPattern.test(this.email)) {
                this.errors.email = 'Inserisci una email valida.';
                valid = false;
            }

            if (!this.description || this.description.length < 10) {
                this.errors.description = 'La Descrizione e\' richiesta e deve contenere almeno 10 caratteri.';
                valid = false;
            }

            return valid;
        },
        async submitForm() {
            if (this.validateForm()) {
                const formData = {
                    name: this.name,
                    surname: this.surname,
                    email: this.email,
                    content: this.description,
                    apartment_id: this.apartmentId,
                };

                try {
                    await axios.post(store.apiUrl + '', formData);
                    alert('Richiesta inviata con successo!');
                } catch (error) {
                    console.error('Errore durante l\'invio', error);
                    alert('Errore durante l\'invio.');
                }
            }
        },
    },
};
</script>


<template>
    <div class="container mt-5">
        <h2 class="mb-4">Contatta il proprietario</h2>
        <form @submit.prevent="submitForm">
            <div class="mb-3">
                <label for="name" class="form-label">Nome:</label>
                <input type="text" v-model="name" class="form-control" />
                <div v-if="errors.name" class="text-danger">{{ errors.name }}</div>
            </div>

            <div class="mb-3">
                <label for="surname" class="form-label">Cognome:</label>
                <input type="text" v-model="surname" class="form-control" />
                <div v-if="errors.surname" class="text-danger">{{ errors.surname }}</div>
            </div>

            <div class="mb-3">
                <label for="email" class="form-label">Email:</label>
                <input type="email" v-model="email" class="form-control" />
                <div v-if="errors.email" class="text-danger">{{ errors.email }}</div>
            </div>

            <div class="mb-3">
                <label for="description" class="form-label">Descrizione:</label>
                <textarea v-model="description" class="form-control" rows="3"></textarea>
                <div v-if="errors.description" class="text-danger">{{ errors.description }}</div>
            </div>

            <button type="submit" class="button">Invia</button>
        </form>
    </div>
</template>
  
   

<style lang="scss" scoped>

.button {
    width: 5rem;
    background-color: #34ab50;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 0.5rem;
    margin-top: 1rem;
    color: white;
    text-decoration: none;
    transition: 0.3s;
    border: none;

    &:hover {
      transform: scale(1.1);
      transform: translateY(-5px);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
    }
}



</style>