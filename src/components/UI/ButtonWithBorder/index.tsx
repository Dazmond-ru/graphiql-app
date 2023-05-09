import { ReactNode } from 'react';

interface ButtonWithBorderProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function ButtonWithBorder({ children, className, onClick }: ButtonWithBorderProps) {
  return (
    <button
      className={`text-xl font-semibold after:transition-all after:content-[''] after:block after:border-b-black after:border-b after:scale-x-0 hover:after:scale-100 ${className}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

ButtonWithBorder.defaultProps = {
  className: '',
  onClick: () => {},
};
