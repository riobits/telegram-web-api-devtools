const initialCode = `<div class="container">
  <h1>Telegram Web API Dev</h1>
  <p class="hint">I made this website for fun and also to try Telegram Web API directly, we could do a good looking editor for bot+ if we want, and a library for Telegram Web API</p>
  <a class="link" href="https://www.youtube.com/watch?v=xvFZjo5PgG0">Learn More</a>
  <button class="test-btn">Test</button>
</div>

<script>
  const tg = window.Telegram.WebApp
</script>

<style>
  h1 {
    font-size: 1.5rem;
  }

  .preview * {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  }

  .preview {
    background: var(--tg-theme-secondary-bg-color);
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 5rem;
    height: 100vh;
  }

  .container {
    background: var(--tg-theme-bg-color);
    color: var(--tg-theme-text-color);
    max-width: 400px;
    text-align: center;
    padding: 2rem;
    margin: 1rem;
    border-radius: 1rem;
  }

  .hint {
    color: var(--tg-theme-hint-color);
  }

  .link {
    color: var(--tg-theme-link-color);
  }

  .test-btn {
    border-radius: 0.5rem;
    background: var(--tg-theme-button-color);
    color: var(--tg-theme-button-text-color);
    display: block;
    padding: 0.8rem 3rem;
    margin: 1rem auto;
    font-size: 1rem;
    border: none;
  }
</style>
`

export default initialCode
