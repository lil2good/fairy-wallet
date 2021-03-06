// @flow
import React from 'react';
import { Form } from 'semantic-ui-react';
import { re } from '../../utils/parser';

const handleSymbolInputValidationOnChange = (e, v, onChange) => {
  const { value } = v;
  if (value === '' || re.symbol.test(value.toUpperCase())) {
    onChange(e, { value: value.toUpperCase(), ...v });
  }
};

const InputSymbol = (props: inputProps) => {
  if (typeof props.onChange !== 'function') {
    return <Form.Input {...props} />;
  }

  const { onChange, ...parentProps } = props;

  return (
    <Form.Input
      {...parentProps}
      onChange={(e, v) => handleSymbolInputValidationOnChange(e, v, onChange)}
    />
  );
};

const handleAccountNameInputValidationOnChange = (e, v, onChange) => {
  const { value } = v;
  if (value === '' || re.account.test(value)) {
    onChange(e, v);
  }
};

const InputAccount = (props: inputProps) => {
  if (typeof props.onChange !== 'function') {
    return <Form.Input {...props} />;
  }

  const { onChange, ...parentProps } = props;

  return (
    <Form.Input
      {...parentProps}
      onChange={(e, v) =>
        handleAccountNameInputValidationOnChange(e, v, onChange)
      }
    />
  );
};

const handleFloatInputValidationOnChange = (e, v, onChange) => {
  const { value, min, max } = v;
  const number = parseFloat(value);
  const inRange = min <= number && number <= max;
  const isNumber = re.float.test(value);
  if (value === '' || (isNumber && inRange)) {
    onChange(e, v);
  }
};

const InputFloat = (props: inputProps) => {
  if (typeof props.onChange !== 'function') {
    return <Form.Input {...props} />;
  }

  const { onChange, ...parentProps } = props;

  return (
    <Form.Input
      {...parentProps}
      onChange={(e, v) => handleFloatInputValidationOnChange(e, v, onChange)}
    />
  );
};

export default {
  InputAccount,
  InputFloat,
  InputSymbol
};
