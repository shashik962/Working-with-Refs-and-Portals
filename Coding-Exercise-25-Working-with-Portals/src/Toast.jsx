
import ReactDOM from 'react-dom';

export default function Toast({ message }) {
  return ReactDOM.createPortal(
    <aside className="toast" data-testid="toast">
      <p>{message}</p>
    </aside>,
    document.querySelector('body')
  );
}

// export default function Toast({ message }) {
//   return (
//     <aside className="toast" data-testid="toast">
//       <p>{message}</p>
//     </aside>
//   );
// }