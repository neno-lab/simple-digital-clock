const sat = document.querySelector('.sat');

const digitalniSat = () => {
  const vrijeme = new Date();

  const sati = vrijeme.getHours();
  const minute = vrijeme.getMinutes();
  const sekunde = vrijeme.getSeconds();

  const html = `
    <span>${sati}</span> :
    <span>${minute}</span> :
    <span>${sekunde}</span>
  `;
  sat.innerHTML = html;
};

setInterval(digitalniSat, 1000);
