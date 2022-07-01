import { CssModules } from "./components/CssModules";
import { InlineStyle } from "./components/inlineStyle";
import { StyledJsx } from "./components/StyledJsx";

export default function App() {
    return (
        <div className="App">
            <InlineStyle />
            <CssModules />
            <StyledJsx/>
        </div>
    );
}