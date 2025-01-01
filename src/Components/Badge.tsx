import React from 'react';

type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}

const getBadgeStyles = (variant: BadgeVariant = 'default') => {
  // Base styles that apply to all variants
  const baseStyles = "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

  // Variant-specific styles
  const variantStyles = {
    default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
    secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
    outline: "text-foreground"
  };

  return `${baseStyles} ${variantStyles[variant]}`;
};

export function Badge({ 
  className = '', 
  variant = 'default', 
  ...props 
}: BadgeProps) {
  const combinedClassName = `${getBadgeStyles(variant)} ${className}`;

  return (
    <div className={combinedClassName} {...props} />
  );
}

// Export the function to generate badge styles for reuse if needed
export const badgeVariants = getBadgeStyles;