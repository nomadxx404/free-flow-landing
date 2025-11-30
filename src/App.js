import './App.css';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Спасибо за интерес! Мы свяжемся с вами: ${email}`);
      setEmail('');
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <nav className="nav">
          <div className="nav-left">
            <button onClick={() => scrollToSection('features')} className="nav-link">Возможности</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">О продукте</button>
          </div>
          <div className="logo-container">
            <img src="/logo.png" alt="Free-Flow Logo" className="logo-image" />
            <div className="logo">Free-Flow</div>
          </div>
          <div className="nav-right">
            <button onClick={() => scrollToSection('contact')} className="nav-link">Контакты</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link nav-cta">Начать</button>
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-logo-container">
            <img src="/logo.png" alt="Free-Flow" className="hero-logo" />
            <div className="hero-badge">🔒 Скоро запуск</div>
          </div>
          <h1 className="hero-title">
            Новое поколение<br />
            <span className="gradient-text">защищённого интернета</span>
          </h1>
          <p className="hero-subtitle">
            Инновационная VPN-технология для полной конфиденциальности.<br />
            Быстро. Безопасно. Без границ.
          </p>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('contact')} className="btn btn-primary">
              Получить ранний доступ
            </button>
            <button onClick={() => scrollToSection('about')} className="btn btn-secondary">
              Узнать больше
            </button>
          </div>
        </div>

        <div className="scroll-indicator" onClick={() => scrollToSection('features')}>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Ключевые возможности</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Сверхвысокая скорость</h3>
              <p>Безлимитный трафик без потери скорости соединения</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔐</div>
              <h3>Банковское шифрование</h3>
              <p>AES-256 шифрование и zero-log политика для полной анонимности</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>Глобальная сеть</h3>
              <p>Более 100 серверов в 50+ странах мира</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Защита 24/7</h3>
              <p>Автоматическая защита от утечек DNS и Kill Switch</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">О продукте</h2>
              <p className="about-description">
                Free-Flow - это революционный сервис защиты вашей приватности в интернете.
                Мы используем передовые технологии шифрования и современную серверную инфраструктуру
                для обеспечения максимальной безопасности и скорости.
              </p>
              <p className="about-description">
                Наша миссия - сделать интернет безопасным и свободным для каждого пользователя,
                защищая вашу конфиденциальность и обеспечивая доступ к любому контенту без ограничений.
              </p>
              <button onClick={() => scrollToSection('contact')} className="btn btn-primary">
                Присоединиться к бета-тесту
              </button>
            </div>
            <div className="about-visual">
              <div className="visual-box">
                <div className="visual-stat">
                  <div className="stat-number">10K+</div>
                  <div className="stat-label">Пользователей в листе ожидания</div>
                </div>
                <div className="visual-stat">
                  <div className="stat-number">99.9%</div>
                  <div className="stat-label">Стабильность работы</div>
                </div>
                <div className="visual-stat">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Поддержка</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-content">
            <h2 className="section-title">Будьте в числе первых</h2>
            <p className="contact-subtitle">
              Оставьте свой email и получите приглашение на закрытое бета-тестирование
            </p>
            <form onSubmit={handleSubscribe} className="subscribe-form">
              <input
                type="email"
                placeholder="Ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="email-input"
                required
              />
              <button type="submit" className="btn btn-primary">
                Получить доступ
              </button>
            </form>
            <p className="privacy-note">
              Мы уважаем вашу конфиденциальность. Никакого спама.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <div className="logo-container">
                <img src="/logo.png" alt="Free-Flow Logo" className="logo-image-small" />
                <div className="logo">Free-Flow</div>
              </div>
              <p className="footer-text">© 2025 Free-Flow. Все права защищены</p>
            </div>
            <div className="footer-links">
              <button onClick={() => window.open('https://t.me/free_flow_vpn', '_blank')} className="footer-link telegram-link">
                <img src="/free-icon-telegram-4423663.png" alt="Telegram" className="telegram-icon-img" />
                <span>Telegram</span>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
