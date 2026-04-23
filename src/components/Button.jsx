const Button = ({
  children,
  variant = 'primary',
  size = 'small',
  className,
  ...rest
}) => {
  const getVariantClass = () => {
    if (variant === 'primary') {
      return 'text-white bg-[#00ADB5]';
    }

    if (variant === 'ghost') {
      return 'bg-transparent text-[#818181]';
    }

    if (variant === 'secondary') {
      return 'bg-[#EEEEEE] text-[##35383E]';
    }
  };

  const getSizeClass = () => {
    if (size === 'small') {
      return 'py-1 text-xs';
    }

    if (size === 'large') {
      return 'py-2 text-sm';
    }
  };

  return (
    <button
      className={`flex items-center justify-center gap-1 rounded-md px-3 font-semibold ${getVariantClass()} ${getSizeClass()} ${className} transition hover:opacity-75`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
