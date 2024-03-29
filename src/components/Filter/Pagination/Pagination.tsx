import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationComponent({handlePaginateData, quantity, data}: any) {
    return (
        <Stack spacing={2}>
            <Pagination
                count={quantity} color="primary"
                onChange={(e: any, index: number) => handlePaginateData(index)}
                disabled={data?.length <= 11}
                shape="rounded"
                variant="outlined"
            />
        </Stack>
    );
}