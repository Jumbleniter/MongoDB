<script lang="ts">
    export let data: { items: { name: string; email: string; message: string }[] };
 
    let name = '';
    let email = '';
    let message = '';
 
    const handleSubmit = async () => {
       const formData = { name, email, message };
       const response = await fetch('/api/submit', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: { 'Content-Type': 'application/json' }
       });
       if (response.ok) {
          location.reload(); // Reload page to see the new data
       }
    };
 </script>
 
 <form on:submit|preventDefault={handleSubmit}>
    <input bind:value={name} placeholder="Name" required />
    <input bind:value={email} placeholder="Email" type="email" required />
    <textarea bind:value={message} placeholder="Message" required></textarea>
    <button type="submit">Submit</button>
 </form>
 
 <ul>
    {#each data.items as item}
       <li>{item.name} - {item.email}: {item.message}</li>
    {/each}
 </ul>
 