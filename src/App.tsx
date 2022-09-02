import { Header } from './components/Header';
import { GlobalStyle } from './styles/global'; 
import { Dashboard } from './components/Dashboard/index'
import Modal from 'react-modal'
import {useState} from 'react'
import { NewTransactionModal } from './components/NewTransactionModal/index'

import {TransactionsContext, TransactionsProvider} from './TransactionsContext'

Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransaction(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransaction(){
    setIsNewTransactionModalOpen(false)
  }

  return (

    <TransactionsProvider >
      <Header onOpenNewTransactionModal={handleOpenNewTransaction}/>
      <Dashboard />
      <NewTransactionModal 
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransaction}

      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

