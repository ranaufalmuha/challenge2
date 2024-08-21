import { useState } from 'react';
import { icrc1_ledger_canister_backend } from 'declarations/icrc1_ledger_canister_backend';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    icrc1_ledger_canister_backend.get_usd_btc_exchange().then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Check BTC - USD: &nbsp;</label>
        <button type="submit">Click Me!</button>
      </form>
      <p id="greeting">{greeting}</p>
    </main>
  );
}

export default App;
