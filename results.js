let risultato = {
  totali: 10,
  corrette: 7,
  sbagliate: 3,
};

const doughnutLabel = {
  id: "doughnutLabel",
  beforeDraw: function (chart, args, pluginOptions) {
    const { ctx, data } = chart;
    ctx.save();
    const centerX = chart.width / 2;
    const centerY = chart.height / 2 - 65;

    const lines = pluginOptions.text.split("\n");
    const fontSize = pluginOptions.fontSize || 12;
    const lineHeight = pluginOptions.lineHeight || 1;
    const boldFont = `${fontSize * 1.1}px sans-serif`;
    const regularFont = `200 ${fontSize * 0.8}px sans-serif`;
    ctx.shadowColor = pluginOptions.shadow;
    ctx.shadowBlur = 20;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;

    ctx.textAlign = "center";

    lines.forEach((line, index) => {
      if (index < 2) {
        ctx.font = boldFont;
        if (index === 1) {
          ctx.fillStyle = pluginOptions.colorSecondLine;
        } else {
          ctx.fillStyle = pluginOptions.color;
        }
      } else {
        ctx.font = regularFont;
        ctx.fillStyle = pluginOptions.color;
      }
      ctx.fillText(line, centerX, centerY + index * fontSize * lineHeight);
    });

    ctx.restore();
  },
};

document.addEventListener("DOMContentLoaded", function () {
  let text = "";
  let colorSecondLine = "";
  if (risultato.corrette >= risultato.sbagliate) {
    text = "Congratulations!\nYou passed the exam.\n\nWe'll send you the certificate \nin few minutes. \nCheck your email (including\n promotions/spam folder)";
    colorSecondLine = "#01FBFC";
  } else {
    text = "We are sorry\nYou failed the exam\n\nYou will be contacted by \nyour teacher in the next few days";
    colorSecondLine = "#01FBFC";
  }

  const chart = document.getElementById("chart");

  const percentualiEsatte = (risultato.corrette / risultato.totali) * 100;
  const percentualiErrate = (risultato.sbagliate / risultato.totali) * 100;

  new Chart(chart, {
    type: "doughnut",
    data: {
      labels: ["Wrong", "Correct"],
      datasets: [
        {
          data: [percentualiErrate, percentualiEsatte],
          backgroundColor: ["#C2128D", "#00FFFF"],
          borderColor: ["#C2128D", "#00FFFF"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      cutout: "70%",
      plugins: {
        legend: { display: false },
        title: {
          display: false,
        },
        doughnutLabel: {
          fontFamily: "Outfit, sans-serif",
          fontSize: 13,
          lineHeight: 1.5,
          color: "white",
          colorSecondLine: colorSecondLine,
          text: text,
        },
      },
    },
    plugins: [doughnutLabel],
  });
  const percentualeCorrect = document.getElementById("percentualeCorrect");
  percentualeCorrect.innerText = percentualiEsatte + "%";
  const percentualeWrong = document.getElementById("percentualeWrong");
  percentualeWrong.innerText = percentualiErrate + "%";

  const answersCorrect = document.getElementById("questionCorrect");
  answersCorrect.innerText = risultato.corrette + "/" + risultato.totali + " questions";
  const answersWrong = document.getElementById("questionWrong");
  answersWrong.innerText = risultato.sbagliate + "/" + risultato.totali + " questions";
});
