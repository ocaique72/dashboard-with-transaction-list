import { Container } from "./styles";
import React, { useContext } from "react";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from "../../TransactionsContext";

export function Summary(){

 const { transactions } = useContext(TransactionsContext)

//  const totalDeposits = transactions.reduce((acc, transaction) => {
//     if (transaction.type == 'deposit'){
//         return acc + transaction.amount;
//     }

//     return acc;
//  }, 0)

const sumary = transactions.reduce((acc, transaction) => {
    if (transaction.type == 'deposit'){
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
    } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
    }

    return acc;
}, {
    deposits: 0,
    withdraws: 0,
    total: 0,
})

    return (
        <Container>


            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>{sumary.deposits}</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saidas" />
                </header>
                <strong>{sumary.withdraws}</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>{sumary.total}</strong>
            </div>
        </Container>
    )
}