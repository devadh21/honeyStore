import React from "react";
interface buttonProps {
  onClick?:any ;
  label?: string;
  title?: string;
  className?: string;
  children?: any;
}
const ButtonAction: React.FC<buttonProps> = ({ onClick,label, title, className,children }) => {
  //onClick={e=>{onClick && onClick(true)}
  return (
    <button title={title} className={`style_btn ${className}`} onClick={e=>{onClick && onClick(true)}}>      
        {label}
        {children}
    </button>
  );
};
export default ButtonAction;
