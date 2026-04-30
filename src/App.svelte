<script>
  // Destructure props using the $props() rune
  let { title = "Counter" } = $props(); 

  // Declare reactive state with the $state() rune
  let count = $state(0); 

  function increment() {
    count += 1;
  }

</script>

<div class="card">
  <h2>{title}</h2>
  <p>Current count is {count}</p>
  
  <!-- Svelte uses standard HTML event attributes like onclick -->
  <button onclick={increment}>
    Add 1
  </button>
  <div class="buttons">
  <button class="one">one</button>
  <button class="two">two</button>
  <button class="three">three</button>
  <button class="four">four</button>
  </div>
</div>

<style>
  /* Styles are automatically scoped to this component */
  .card {
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 8px;
  }
  button {
    background: #ff3e00;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  .buttons{
    display: flex;
    flex-direction:column;
    gap:10rem;
    margin:20px;
    width:fit-content;
    justify-content:center;
  }
</style>
