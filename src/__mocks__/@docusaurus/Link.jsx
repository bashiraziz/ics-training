import React from 'react';
export default function Link({ to, href, children, className, style, target, rel }) {
  return (
    <a href={to || href} className={className} style={style} target={target} rel={rel}>
      {children}
    </a>
  );
}
