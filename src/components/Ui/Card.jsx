import React from "react";

const Card = ({
  as: Tag = "div",
  imageSrc,
  imageAlt = "",
  title,
  subtitle,
  href,
  className = "",
  overlay = true,
  children,
}) => {
  const Inner = (
    <div className={`relative rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.10)] border border-green-900/10 ${className}`}>
      {imageSrc && (
        <img
          src={imageSrc}
          alt={imageAlt || title}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e)=>{e.currentTarget.style.display='none'}}
        />
      )}
      {overlay && <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/36 to-transparent" />}
      <div className="relative z-10 p-5 h-full flex flex-col justify-end">
        {title && <h3 className="text-2xl font-extrabold text-white">{title}</h3>}
        {subtitle && <p className="text-white/85 text-sm">{subtitle}</p>}
        {children}
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block group">
        {Inner}
      </a>
    );
  }
  return <Tag>{Inner}</Tag>;
};

export default Card;
