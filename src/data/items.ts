import { Item } from '../types/Item';

export const items: Item[] = [
    { date: new Date(2022, 7, 5), category: 'salary', title: 'Salário X', value: 4597 },
    { date: new Date(2022, 7, 5), category: 'food', title: 'Coffee', value: 25.60 },
    { date: new Date(2022, 7, 7), category: 'pay', title: 'Conta de energia', value: 135 },
    { date: new Date(2022, 7, 15), category: 'extra', title: 'Royalties', value: 2230 },
    { date: new Date(2022, 7, 29), category: 'rent', title: 'Alguel do apartamento', value: 2800 },
    { date: new Date(2022, 7, 30), category: 'vehicle', title: 'Manutenção do carro', value: 850 }
];