import AnimatedBackdrop from './AnimatedBackdrop';

function AppWrapper({ children }) {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <AnimatedBackdrop />
      {children}
    </div>
  );
}

export default AppWrapper; 