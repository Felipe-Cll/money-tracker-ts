import { Category } from '../types/Category';

export const categories: Category = {
    food: { title: 'Alimentação', color: '#ffc529', expense: true },
    rent: { title: 'Aluguel', color: '#c50000', expense: true },
    vehicle: { title: 'Automóvel', color: '#888888', expense: true },
    pay: { title: 'Boleto', color: '#ef6a57', expense: true },
    extra: { title: 'Renda extra', color: '#67bbf1', expense: false },
    salary: { title: 'Salário', color: '#00bdae', expense: false }
};