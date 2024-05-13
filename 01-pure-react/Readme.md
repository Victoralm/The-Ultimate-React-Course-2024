# Using pure React

## Main App

-   Example

```Typescript
<script>
    function App() {
        ...
    }
</script>
```

## [useState](https://react.dev/reference/react/useState)

-   Example

```Typescript
const [time, setTime] = React.useState(new Date().toLocaleTimeString());
```

## [useEffect](https://react.dev/reference/react/useEffect)

-   Example

```Typescript
React.useEffect(() => {
    setInterval(() => {
        setTime(new Date().toLocaleTimeString())
    }, 1000);
}, [])
```

## [Creating a new DOM element](https://react.dev/reference/react/createElement)

-   Example

```Typescript
return React.createElement("header", null, `Hello React... It's ${time}`);
```

## [createRoot](https://react.dev/reference/react-dom/client/createRoot)

-   Example

```Typescript
const root = ReactDOM.createRoot(document.getElementById('root'));
```

## [render](https://react.dev/reference/react-dom/render) DEPRECATED!

-   Example

```Typescript
root.render(React.createElement(App));
```
