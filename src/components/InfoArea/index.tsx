import * as C from './styles';
import { ResumeItem } from '../ResumeItem';
import { formatCurrentMonth } from '../../helpers/dateFilter';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
};

export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {
    
    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth( currentDate.getMonth() - 1 );
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    };

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth( currentDate.getMonth() + 1 );
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    };

    return (
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow><FaArrowAltCircleLeft onClick={handlePrevMonth} /></C.MonthArrow>
                <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow><FaArrowAltCircleRight onClick={handleNextMonth} /></C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>
                <ResumeItem title="Receitas" value={income} />
                <ResumeItem title="Despesas" value={expense} />
                <ResumeItem 
                    title="Balanço" 
                    value={income - expense} 
                    color={(income-expense) < 0 ? '#c50000' : '#00bdae'}
                />
            </C.ResumeArea>
        </C.Container>
    );
};