export interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface PaginationButtonProps {
  onClick: () => void;
  disabled?: boolean;
  variant: 'previous' | 'next';
  children: React.ReactNode;
}

export interface PageNumbersProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
