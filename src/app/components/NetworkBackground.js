export default function NetworkBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />
      <div className="absolute inset-0" 
           style={{
             backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
             backgroundSize: '50px 50px'
           }}
      />
    </div>
  );
}
