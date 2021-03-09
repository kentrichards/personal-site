import ThemeToggle from './themeToggle'

const ArticleHeader = () => (
  <div className="article-header">
    <h1 className="article-text">
      Hey! <span className="inline-block animate-wave">👋</span>
    </h1>
    <ThemeToggle />
  </div>
)

export default ArticleHeader
