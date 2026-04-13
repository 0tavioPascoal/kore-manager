const SidebarButton = ({ children, variant }) => {
  const getVariantClass = () => {
    if (variant === 'unselected') {
      return 'text-[##35383E]';
    }

    if (variant === 'selected') {
      return 'bg-[#E6F7F8] px-6 py-3 text-[#00ADB5]';
    }
  };
  return (
    <a className={`rounded-lg px-6 py-3 ${getVariantClass()}`} href="#">
      {children}
    </a>
  );
};

export default SidebarButton;
