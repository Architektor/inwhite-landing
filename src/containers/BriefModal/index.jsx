import React from 'react';
import PropTypes from 'prop-types';

import { servicesOptions, briefModalTitle, briefCTACopy } from '../../config/materials';

import {
  BriefModalContainer,
  BriefModalContents,
  BriefModalTitle,
  BriefModalForm,
  BriefModalFormRight,
  BriefModalFormLeft,
  SubmitButton,
} from './styled';

import FormField from './FormField';

const BriefModal = ({ isOpen, onSubmit, onClose }) => isOpen &&
  <BriefModalContainer
    onClick={onClose}
  >
    <BriefModalContents
      onClick={(ev) => ev.stopPropagation()}
    >
      <BriefModalTitle>
        {briefModalTitle}
      </BriefModalTitle>
      <BriefModalForm onSubmit={onSubmit}>
        <BriefModalFormLeft>
          <FormField
            title="Представтесь, пожалуйста"
            name="fullname"
            placeholder="ФИО"
            required
          />
          <FormField
            title="Ваш E-mail"
            name="email"
            placeholder="email@example.com"
            required
          />
          <FormField
            title="Контактный телефон"
            name="phone"
            placeholder="+7 (XXX) XXX XX XX"
            required
          />
          <FormField
            select
            selectOptions={servicesOptions}
            title="Чем мы можем вам помочь?"
            name="needs"
          />
          <FormField
            title="Ваш сайт"
            name="homepage"
            placeholder="example.com"
          />
        </BriefModalFormLeft>
        <BriefModalFormRight>
          <FormField
            textArea
            title="Дополнительная информация"
            name="additionalInfo"
            placeholder="(по желанию)"
            rows={23}
          />
          <SubmitButton>{briefCTACopy}</SubmitButton>
        </BriefModalFormRight>
      </BriefModalForm>
    </BriefModalContents>
  </BriefModalContainer>;

BriefModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default BriefModal;
