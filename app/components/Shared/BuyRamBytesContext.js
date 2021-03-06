import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

type Props = {
  context: {}
};

class BuyRamBytesContext extends Component<Props> {
  render() {
    const { context } = this.props;
    const text = (
      <p className="dashed-border">
        You are about to buy <strong>{context.bytes}</strong> bytes of RAM to{' '}
        <strong>{context.recipient}</strong>. Transaction details are listed
        below.
      </p>
    );

    let content = '';
    if (context !== null) {
      content = (
        <div>
          {text}
          <Table basic="very" className="verify-content">
            <Table.Body>
              <Table.Row>
                <Table.Cell width={3}>Contract</Table.Cell>
                <Table.Cell>Action</Table.Cell>
                <Table.Cell>Buyer</Table.Cell>
                <Table.Cell>Receiver</Table.Cell>
                <Table.Cell>Bytes</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{context.contract}</Table.Cell>
                <Table.Cell>{context.action}</Table.Cell>
                <Table.Cell>{context.buyer}</Table.Cell>
                <Table.Cell>{context.recipient}</Table.Cell>
                <Table.Cell>{context.bytes}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      );
    }

    return content;
  }
}

export default BuyRamBytesContext;
