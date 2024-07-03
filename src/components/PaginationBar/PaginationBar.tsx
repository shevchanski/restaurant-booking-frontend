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

  const numberOfPages = Math.ceil(totalAmount / searchParams.perPage);

  const handleChange = (event: ChangeEvent<unknown>, page: number) => {
    const newParams = generateSearchParams({ ...searchParams, page });

    router.replace(`/search${newParams}`);
  };

  return (
    <>
      {numberOfPages > 1 ? (
        <Pagination
          {...rest}
          page={searchParams.page}
          count={numberOfPages}
          onChange={handleChange}
        />
      ) : null}
    </>
  );
}
