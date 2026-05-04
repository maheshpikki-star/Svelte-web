<script>
  // State Runes
  let count = $state(0);
  let logs = $state([]);
  let username = $state("Explorer");
  let isDarkMode = $state(false);

  // Derived State
  let doubleCount = $derived(count * 2);
  let activityLevel = $derived(count > 20 ? "High" : count > 10 ? "Moderate" : "Low");

  // Functions
  function updateCount(amount) {
    count += amount;
    addLog(`Adjusted count by ${amount}`);
  }

  function addLog(message) {
    const time = new Date().toLocaleTimeString();
    logs = [{ id: Date.now(), time, message }, ...logs].slice(0, 5);
  }

  function reset() {
    count = 0;
    logs = [];
    addLog("System Reset");
  }
</script>

<div class="app-container" class:dark={isDarkMode}>
  <aside class="sidebar">
    <div class="profile">
      <div class="avatar"></div>
      <input bind:value={username} placeholder="Set Name" />
    </div>
    
    <nav class="nav-links">
      <button class="nav-item active">Dashboard</button>
      <button class="nav-item">Analytics</button>
      <button class="nav-item">Settings</button>
      <button class="nav-item" onclick={() => isDarkMode = !isDarkMode}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  </aside>

  <main class="content">
    <header>
      <h1>Welcome back, {username}!</h1>
      <p>System Status: <span class="badge">{activityLevel} Activity</span></p>
    </header>

    <section class="stats-grid">
      <div class="stat-card">
        <span class="label">Main Counter</span>
        <span class="value">{count}</span>
      </div>
      <div class="stat-card">
        <span class="label">Double Value</span>
        <span class="value">{doubleCount}</span>
      </div>
      <div class="stat-card">
        <span class="label">Uptime</span>
        <span class="value">99.9%</span>
      </div>
    </section>

    <section class="control-panel">
      <h3>Quick Actions</h3>
      <div class="button-cloud">
        <button class="btn btn-primary" onclick={() => updateCount(1)}>Increment</button>
        <button class="btn btn-secondary" onclick={() => updateCount(-1)}>Decrement</button>
        <button class="btn btn-accent" onclick={() => updateCount(10)}>Boost +10</button>
        <button class="btn btn-danger" onclick={reset}>Reset All</button>
      </div>

      <div class="input-group">
        <label for="range">Intensity Slider</label>
        <input type="range" id="range" bind:value={count} min="0" max="100" />
      </div>
    </section>

    <section class="log-section">
      <h3>Recent Activity</h3>
      <ul>
        {#each logs as log (log.id)}
          <li>
            <span class="time">{log.time}</span>
            <span class="msg">{log.message}</span>
          </li>
        {/each}
      </ul>
    </section>
  </main>
</div>

<style>
  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background: #f0f2f5;
    color: #1a1a1a;
  }

  .app-container {
    display: flex;
    min-height: 100vh;
    transition: all 0.3s ease;
  }

  .dark {
    background: #121212;
    color: #ffffff;
  }

  /* Sidebar */
  .sidebar {
    width: 260px;
    background: #ffffff;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #e0e0e0;
  }

  .dark .sidebar {
    background: #1e1e1e;
    border-color: #333;
  }

  .avatar {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #6366f1, #a855f7);
    border-radius: 50%;
    margin-bottom: 1rem;
  }

  .profile input {
    width: 100%;
    border: 1px solid #ddd;
    padding: 0.5rem;
    border-radius: 6px;
    margin-bottom: 2rem;
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .nav-item {
    text-align: left;
    padding: 0.8rem 1rem;
    border-radius: 8px;
    border: none;
    background: transparent;
    cursor: pointer;
    font-weight: 500;
    color: #666;
  }

  .nav-item.active, .nav-item:hover {
    background: #f0f0ff;
    color: #6366f1;
  }

  /* Main Content */
  .content {
    flex: 1;
    padding: 3rem;
    max-width: 1000px;
  }

  .badge {
    background: #e0e7ff;
    color: #4338ca;
    padding: 0.2rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: bold;
  }

  /* Cards */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
  }

  .stat-card {
    background: white;
    padding: 1.5rem;
    border-radius: 16px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.02);
  }

  .dark .stat-card {
    background: #2d2d2d;
  }

  .stat-card .label { color: #888; font-size: 0.9rem; display: block; }
  .stat-card .value { font-size: 2rem; font-weight: 800; color: #6366f1; }

  /* Buttons */
  .button-cloud {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .btn {
    padding: 0.8rem 1.5rem;
    border-radius: 10px;
    border: none;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.1s;
  }

  .btn:active { transform: scale(0.95); }

  .btn-primary { background: #6366f1; color: white; }
  .btn-secondary { background: #e2e8f0; color: #475569; }
  .btn-accent { background: #f59e0b; color: white; }
  .btn-danger { background: #ef4444; color: white; }

  /* Logs */
  .log-section {
    background: rgba(255, 255, 255, 0.5);
    padding: 1.5rem;
    border-radius: 12px;
    margin-top: 2rem;
  }

  ul { list-style: none; padding: 0; }
  li {
    padding: 0.8rem 0;
    border-bottom: 1px solid rgba(0,0,0,0.05);
    display: flex;
    gap: 1rem;
  }

  .time { color: #999; font-size: 0.8rem; min-width: 80px; }
</style>