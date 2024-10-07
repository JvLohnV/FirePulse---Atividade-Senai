import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8354/api', 
});

// Adicionar interceptadores se necessário

export default instance;