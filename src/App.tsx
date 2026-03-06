import "./App.css";

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="brand">MySite</div>
        <nav className="nav">
          <a href="#home">首页</a>
          <a href="#projects">项目</a>
          <a href="#about">关于</a>
          <a href="#contact">联系</a>
        </nav>
      </header>

      <main className="main">
        <section className="hero" id="home">
       <h1>用 React + TypeScript 做一个正式网站</h1>
       <p>deploy key test</p>
       <p>TEST-123456</p>
       <p>从本地开发 → 打包 → 上传到阿里云 ECS → 域名上线。</p>
       <div className="actions">
            <button className="primary">查看项目</button>
            <button className="ghost">联系我</button>
          </div>
        </section>
git status
        <section className="section" id="projects">
          <h2>项目</h2>
          <div className="grid">
            <div className="card">
              <h3>项目 A</h3>
              <p>一句话描述你的项目亮点。</p>
            </div>
            <div className="card">
              <h3>项目 B</h3>
              <p>一句话描述你的项目亮点。</p>
            </div>
            <div className="card">
              <h3>项目 C</h3>
              <p>一句话描述你的项目亮点。</p>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <h2>关于</h2>
          <p>这里写你的简介：你是谁、做什么、擅长什么。</p>
        </section>

        <section className="section" id="contact">
          <h2>联系</h2>
          <p>Email：yourname@example.com</p>
        </section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} MySite</footer>
    </div>
  );
}