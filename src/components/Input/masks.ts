function maskDate(value: string): string {
  if (value.length > 10) {
    value = value.substring(0, 10);
  }
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d{2})(\d)/, '$1/$2');
  value = value.replace(/(\d{2})(\d)/, '$1/$2');
  return value;
}

function maskCep(value: string) {
  if (value.length > 9) {
    value = value.substring(0, 9);
  }
  value = value.replace(/\D/g, ''); // 1239856
  value = value.replace(/^(\d{5})(\d)/, '$1-$2');
  return value;
}

function maskPhone(value: string) {
  if (value.length > 14) {
    value = value.substring(0, 14);
  }
  value = value.replace(/\D/g, '');
  // (11)1111-1111
  value = value.replace(/^(\d{2})(\d)/g, '($1)$2');
  value = value.replace(/(\d)(\d{4})$/, '$1-$2');
  return value;
}

function maskCurrency(value: string) {
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d)(\d{2})$/, '$1,$2');
  value = value.replace(/(?=(\d{3})+(\D))\B/g, '.');
  return value;
}

function maskCpf(value: string) {
  if (value.length > 14) {
    value = value.substring(0, 14);
  }
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d{2})$/, '$1-$2');
  return value;
}

export { maskCep, maskPhone, maskCurrency, maskDate, maskCpf };
