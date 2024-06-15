function maskPhone(value: string) {
  const lengthOfNumber = 18;

  const cutNumber = (value: string) => value.slice(0, lengthOfNumber);

  if (value.length >= lengthOfNumber) return cutNumber(value);
  console.log(value);
  value = value
    .replace(/\D/g, '')
    .replace(/^(\d{1,3})/, '+($1')
    .replace(/^(.{5})(\d{1,2})/, '$1) $2')
    .replace(/^(.{6})\ (\d{2})(\d{1,3})/, '$1 $2 $3')
    .replace(/^(.{6})\ (\d{2})\ (\d{3})(\d{1,4})/, '$1 $2 $3-$4');

  return cutNumber(value);
}

export { maskPhone };
