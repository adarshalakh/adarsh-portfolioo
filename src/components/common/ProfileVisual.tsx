interface ProfileVisualProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizes = {
  sm: 'h-16 w-16',
  md: 'h-24 w-24',
  lg: 'h-32 w-32',
  xl: 'h-44 w-44',
};

export function ProfileVisual({ size = 'lg', className = '' }: ProfileVisualProps) {
  return (
    <img
      src="/images/profile.jpg"
      alt="Adarsh Mehta"
      className={`rounded-2xl object-cover ${sizes[size]} ${className}`}
    />
  );
}
