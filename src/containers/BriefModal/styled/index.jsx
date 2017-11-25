import styled from 'styled-components';

export const BriefModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, .6);
  z-index: 3;
`;

export const BriefModalContents = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  box-shadow: 0px 0px 13.5px 1.5px rgba(0, 0, 0, 0.1);
  width: 736px;
  max-height: 508px;
  padding: 37px 45px;
`;

export const BriefModalTitle = styled.span`
  font-size: 1.5em;
  font-weight: 500;
  margin-bottom: 17px;
  font-size: 34px;
`;

export const BriefModalForm = styled.form`
  display: flex;
  flex-flow: row nowrap;
`;

export const BriefModalFormRight = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  margin-left: 19px;
  > div {
    flex-grow: 1;
    margin-bottom: 0px;
  }
`;

export const BriefModalFormLeft = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  margin-right: 19px;
`;

export const FormFieldContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 17px;
`;

export const FormFieldTitle = styled.span``;

export const FormFieldInput = styled.input`
  border-style: solid;
  border-width: 2px;
  border-color:  rgba(221, 222, 222, 60);
  box-sizing: border-box;
  background-color:  #f9f9f9;
  width: 100%;
  height: 41px;
  padding: 14px;
  margin-top: 6px;
  font-size: 14px;
  &::placeholder {
    color: #d9dada;
    font-size: 14px;
  }
`;

export const FormFieldTextArea = styled.textarea`
  border-style: solid;
  border-width: 2px;
  border-color:  rgba(221, 222, 222, 60);
  box-sizing: border-box;
  background-color:  #f9f9f9;
  width: 100%;
  height: 100%;
  padding: 14px;
  margin-top: 6px;
  resize: none;
`;

export const SubmitButton = styled.button.attrs({ type: 'submit' })`
  border-style: none;
  border-radius: 0px;
  background: black;
  color: white;
  width: 100%;
  height: 41px;
`;

export const FormFieldSelect = styled.select`
  outline: 2px solid rgba(221, 222, 222, 60);
  outline-offset: -1px;
  border-style: none;
  box-sizing: border-box;
  background-color:  #f9f9f9;
  width: 100%;
  height: 41px;
  padding: 14px;
  margin-top: 6px;
  font-size: 14px;
`;

export const FormFieldSelectOption = styled.option``;
