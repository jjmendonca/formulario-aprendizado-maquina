document.getElementById("previsaoForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = {
      endereco: document.getElementById("endereco").value,
      bairro: document.getElementById("bairro").value,
      tipo: document.getElementById("tipo").value,
      localcometimento: document.getElementById("localCometimento").value,
      ano: parseFloat(document.getElementById("ano").value),
      mes: parseFloat(document.getElementById("mes").value),
      dia: parseFloat(document.getElementById("dia").value),
  };

  try {
      const response = await fetch("https://modelo-aprendizado-maquina-production.up.railway.app/previsao", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
          document.getElementById("resultado").innerText = `Acidente - ${data.Previsão}`;
      } else {
          document.getElementById("resultado").innerText = `Erro: ${data.error}`;
      }
  } catch (error) {
      document.getElementById("resultado").innerText = `Erro: ${error.message}`;
  }
});
