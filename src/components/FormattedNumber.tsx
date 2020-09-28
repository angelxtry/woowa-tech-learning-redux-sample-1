import React from 'react';

const DEFAULT_SEPARATOR = ',';

interface FormattedNumberProps {
  value: number;
  separator?: string;
}

export function FormattedNumber({ separator, value }: FormattedNumberProps): JSX.Element {
  const separators = separator || DEFAULT_SEPARATOR;
  const formattedNumber = String(value).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, `$1${separators}`);

  return <span>{formattedNumber}</span>;
}
