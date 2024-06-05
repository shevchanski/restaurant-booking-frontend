'use client';

import { useRestSearchParams } from '@/hooks/useRestSearchParams';
import { generateSearchParams } from '@/utils/generateSearchParams';
import Pagination, { PaginationProps } from '@mui/material/Pagination';
import { useRouter } from 'next/navigation';
import { ChangeEvent } from 'react';

interface Props extends PaginationProps {
  totalAmount: number;
}

export default function PaginationBar({ totalAmount, ...rest }: Props) {
  const searchParams = useRestSearchParams();
  const router = useRouter();

  const handleChange = (event: ChangeEvent<unknown>, page: number) => {
    const newParams = generateSearchParams({ ...searchParams, page });

    router.replace(`/search${newParams}`);
  };

  return (
    <Pagination
      {...rest}
      page={searchParams.page}
      count={Math.round(totalAmount / searchParams.perPage)}
      onChange={handleChange}
    />
  );
}
