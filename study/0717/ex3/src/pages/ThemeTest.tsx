import Header from "../components/Header";
import ThemeProvider from "../contexts/ThemeContext";
import Content from "../components/Content";
import LanguageProvider from "../contexts/LanguageContext";

export default function ThemeTest() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div>
          <h2>테마 테스트</h2>
          <Header />
          <Content />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}
