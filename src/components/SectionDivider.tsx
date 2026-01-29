const SectionDivider = ({ variant = 'default' }: { variant?: 'default' | 'accent' | 'pattern' }) => {
  if (variant === 'pattern') {
    return (
      <div className="relative py-10">
        <div className="container-refined">
          <div className="flex items-center justify-center gap-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-border" />
            <div className="flex items-center gap-3">
              <div className="w-1 h-1 rounded-full bg-accent/40" />
              <div className="w-3 h-3 rotate-45 border border-accent/30" />
              <div className="w-1 h-1 rounded-full bg-accent/40" />
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-border" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'accent') {
    return (
      <div className="relative py-8">
        <div className="container-refined">
          <div className="flex items-center justify-center">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative py-6">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  );
};

export default SectionDivider;
