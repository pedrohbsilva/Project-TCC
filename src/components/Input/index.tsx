/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
  useCallback,
} from 'react';
import { useField } from '@unform/core';
import { Container, TextInput, Icon } from './styles';
import { maskCep, maskCurrency, maskDate, maskPhone, maskCpf } from './masks';
import { InputProps, InputRef, InputValueReference } from '../../interfaces';

const Input: React.RefForwardingComponent<InputRef, InputProps> = (
  { name, icon, mask, inputMaskChange, ...rest }: InputProps,
  ref,
) => {
  const inputElementRef = useRef<any>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });
  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputValueRef.current.value);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  function handleChange(text: string) {
    if (mask === 'cep') {
      const value = maskCep(text);
      inputMaskChange(value);
    }
    if (mask === 'phone') {
      const value = maskPhone(text);
      inputMaskChange(value);
    }
    if (mask === 'currency') {
      const value = maskCurrency(text);
      inputMaskChange(value);
    }
    if (mask === 'date') {
      const value = maskDate(text);
      inputMaskChange(value);
    }
    if (mask === 'cpf') {
      const value = maskCpf(text);
      inputMaskChange(value);
    }
  }

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(item: any, value: string) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);
  return (
    <Container isFocused={isFocused} isErrored={!!error}>
      <Icon
        name={icon}
        size={20}
        color={isFocused || isFilled ? '#009EBA' : '#666360'}
      />
      <TextInput
        ref={inputElementRef}
        placeholderTextColor="#666360"
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={value => {
          inputValueRef.current.value = value;
          handleChange(value);
        }}
        {...rest}
      />
    </Container>
  );
};

export default forwardRef(Input);
