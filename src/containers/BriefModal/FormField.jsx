import React from 'react';
import PropTypes from 'prop-types';

import {
  FormFieldContainer,
  FormFieldTitle,
  FormFieldInput,
  FormFieldTextArea,
  FormFieldSelect,
  FormFieldSelectOption,
} from './styled';

const FormField = ({ title, textArea, select, selectOptions, ...inputProps }) =>
  <FormFieldContainer>
    <FormFieldTitle>
      {title}
    </FormFieldTitle>
    {textArea && <FormFieldTextArea {...inputProps} />}
    {select &&
      <FormFieldSelect {...inputProps}>
        {selectOptions.map(option =>
          <FormFieldSelectOption key={option}>{option}</FormFieldSelectOption>
        )}
      </FormFieldSelect>
    }
    {!textArea && !select && <FormFieldInput {...inputProps} /> }
  </FormFieldContainer>;

FormField.propTypes = {
  title: PropTypes.string,
  textArea: PropTypes.bool,
  select: PropTypes.bool,
  selectOptions: PropTypes.arrayOf(PropTypes.string),
};

FormField.defaultProps = {
  title: '',
  textArea: false,
  select: false,
  selectOptions: [],
};

export default FormField;
