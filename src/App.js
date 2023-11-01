import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import InvoiceForm from './Components/InvoiceForm';


class App extends Component {
  render() {
  return (

    
    <div className="App d-flex flex-column align-items-center justify-content-center w-100">
    {/* <div className='heading'>
        <h1 className='invoice_head1'>BILLIFY</h1>
        </div> */}
        <div className='heading'>
        <h1 className='invoice_head'>INVOICE</h1>
        </div>
    <Container>
      <InvoiceForm/>
    </Container>
    </div>
  );
}
}

export default App;
