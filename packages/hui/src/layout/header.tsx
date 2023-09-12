import React from 'react';
import { styled, type SxProps } from '@mui/material';

export function Header({
    title,
    children,
    sx,
}: {
    title?: string;
    children?: React.ReactNode;
    sx?: SxProps;
}): React.ReactNode {
    return <BaseHeader sx={sx}>
        { !!title && <h1>{title}</h1> }

        { children }
    </BaseHeader>;
}

const BaseHeader = styled('header')(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    fontWeight: 800,
}));

