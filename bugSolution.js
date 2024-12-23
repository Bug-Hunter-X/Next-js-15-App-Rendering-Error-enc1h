```javascript
// pages/index.js

export default function Home() {
  // Check for potential undefined values before using them
  const message = 'Next.js 15 App';
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}
```