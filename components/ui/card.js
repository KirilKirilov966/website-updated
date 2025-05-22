export function Card({ children }) {
    return <div className="shadow-lg rounded-lg bg-gray-800 p-6">{children}</div>;
  }
  
  export function CardContent({ children }) {
    return <div>{children}</div>;
  }
  